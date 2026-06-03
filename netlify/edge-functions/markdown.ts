const MARKDOWN_CONTENT_TYPE = 'text/markdown; charset=utf-8';
const HTML_ACCEPT = 'text/html,application/xhtml+xml';

const STATIC_MARKDOWN_PATHS = new Set(['/auth.md', '/sitemap.md', '/llms.txt']);

const NON_PAGE_EXTENSION_RE =
  /\.(?:avif|css|csv|gif|heic|ico|jpeg|jpg|js|json|map|mjs|mp3|mp4|pdf|png|riv|svg|txt|wasm|webm|webmanifest|woff2?|xml)$/i;

const BLOCK_TAGS = [
  'address',
  'article',
  'aside',
  'blockquote',
  'dd',
  'details',
  'div',
  'dl',
  'dt',
  'figcaption',
  'figure',
  'footer',
  'form',
  'header',
  'hr',
  'main',
  'nav',
  'p',
  'section',
  'summary',
];

const ENTITY_MAP: Record<string, string> = {
  amp: '&',
  apos: "'",
  gt: '>',
  lt: '<',
  nbsp: ' ',
  quot: '"',
};

type NetlifyContext = {
  next: () => Promise<Response>;
};

export default async function markdown(request: Request, context: NetlifyContext) {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return context.next();
  }

  const requestUrl = new URL(request.url);
  const isMarkdownPath = requestUrl.pathname.endsWith('.md');
  const wantsMarkdown = acceptsMarkdown(request.headers.get('accept'));

  if (STATIC_MARKDOWN_PATHS.has(requestUrl.pathname)) {
    return context.next();
  }

  if (!isMarkdownPath && !wantsMarkdown) {
    return context.next();
  }

  if (!isMarkdownPath && NON_PAGE_EXTENSION_RE.test(requestUrl.pathname)) {
    return context.next();
  }

  const pageUrl = new URL(request.url);

  if (isMarkdownPath) {
    pageUrl.pathname = markdownPathToPagePath(requestUrl.pathname);
  }

  const headers = new Headers(request.headers);
  headers.set('accept', HTML_ACCEPT);

  const pageResponse = await fetch(pageUrl, {
    headers,
    method: 'GET',
    redirect: 'follow',
  });

  const contentType = pageResponse.headers.get('content-type') || '';

  if (!pageResponse.ok || !contentType.includes('text/html')) {
    if (isMarkdownPath) {
      return new Response('Markdown representation is not available for this resource.\n', {
        status: pageResponse.ok ? 404 : pageResponse.status,
        headers: {
          'content-type': MARKDOWN_CONTENT_TYPE,
        },
      });
    }

    return context.next();
  }

  const html = await pageResponse.text();
  const markdownBody = htmlToMarkdown(html, pageUrl);
  const responseHeaders = new Headers();
  responseHeaders.set('content-type', MARKDOWN_CONTENT_TYPE);
  responseHeaders.set('vary', 'Accept');

  const cacheControl = pageResponse.headers.get('cache-control');
  if (cacheControl) {
    responseHeaders.set('cache-control', cacheControl);
  }

  return new Response(request.method === 'HEAD' ? null : markdownBody, {
    status: 200,
    headers: responseHeaders,
  });
}

function acceptsMarkdown(accept: string | null) {
  if (!accept) {
    return false;
  }

  return accept
    .toLowerCase()
    .split(',')
    .some((part) => {
      const mediaType = part.split(';')[0].trim();
      return mediaType === 'text/markdown' || mediaType === 'text/x-markdown';
    });
}

function markdownPathToPagePath(pathname: string) {
  const withoutMarkdownExtension = pathname.replace(/\.md$/i, '');

  if (
    !withoutMarkdownExtension ||
    withoutMarkdownExtension === '/index' ||
    withoutMarkdownExtension === '/'
  ) {
    return '/';
  }

  return withoutMarkdownExtension;
}

function htmlToMarkdown(html: string, sourceUrl: URL) {
  const title = decodeHtml(extractFirstMatch(html, /<title[^>]*>([\s\S]*?)<\/title>/i)).trim();
  const description = decodeHtml(
    extractFirstMatch(
      html,
      /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["'][^>]*>/i
    ) ||
      extractFirstMatch(
        html,
        /<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["'][^>]*>/i
      )
  ).trim();
  const rawContent = extractPageContent(html);
  const content = convertHtmlFragmentToMarkdown(rawContent, sourceUrl);
  const lines = [];

  if (title && !startsWithHeading(content, title)) {
    lines.push(`# ${title}`);
  }

  if (description && !content.includes(description)) {
    lines.push(description);
  }

  lines.push(content);

  return normalizeMarkdown(lines.filter(Boolean).join('\n\n'));
}

function extractPageContent(html: string) {
  const main = extractFirstMatch(html, /<main\b[^>]*>([\s\S]*?)<\/main>/i);
  if (main) {
    return main;
  }

  const article = extractFirstMatch(html, /<article\b[^>]*>([\s\S]*?)<\/article>/i);
  if (article) {
    return article;
  }

  return extractFirstMatch(html, /<body\b[^>]*>([\s\S]*?)<\/body>/i) || html;
}

function convertHtmlFragmentToMarkdown(html: string, sourceUrl: URL) {
  let markdown = html;
  const codeBlocks: string[] = [];

  markdown = markdown
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<script\b[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[\s\S]*?<\/style>/gi, '')
    .replace(/<noscript\b[\s\S]*?<\/noscript>/gi, '')
    .replace(/<template\b[\s\S]*?<\/template>/gi, '')
    .replace(/<svg\b[\s\S]*?<\/svg>/gi, '')
    .replace(/<canvas\b[\s\S]*?<\/canvas>/gi, '')
    .replace(/<iframe\b[\s\S]*?<\/iframe>/gi, '')
    .replace(/<picture\b[\s\S]*?<\/picture>/gi, '')
    .replace(/<video\b[\s\S]*?<\/video>/gi, '')
    .replace(/<audio\b[\s\S]*?<\/audio>/gi, '')
    .replace(/<form\b[\s\S]*?<\/form>/gi, '')
    .replace(/<button\b[\s\S]*?<\/button>/gi, '')
    .replace(/<(?:input|select|textarea)\b[^>]*>/gi, '');

  markdown = markdown.replace(/<pre\b[^>]*>([\s\S]*?)<\/pre>/gi, (_match, codeHtml) => {
    const language =
      extractFirstMatch(codeHtml, /class=["'][^"']*language-([a-z0-9_-]+)[^"']*["']/i) || '';
    const code = decodeHtml(stripTags(codeHtml))
      .replace(/\n{3,}/g, '\n\n')
      .trim();
    const placeholder = `\n\n@@CODE_BLOCK_${codeBlocks.length}@@\n\n`;
    codeBlocks.push(`\`\`\`${language}\n${code}\n\`\`\``);
    return placeholder;
  });

  markdown = markdown.replace(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi, (_match, attrs, textHtml) => {
    const text = cleanInlineText(convertHtmlFragmentToMarkdown(textHtml, sourceUrl));
    const href = extractAttribute(attrs, 'href');

    if (!text) {
      return '';
    }

    if (!href || href.startsWith('#') || href.startsWith('javascript:')) {
      return text;
    }

    return `[${escapeMarkdownLinkText(text)}](${normalizeHref(href, sourceUrl)})`;
  });

  markdown = markdown
    .replace(/<img\b([^>]*)>/gi, (_match, attrs) => {
      const alt = extractAttribute(attrs, 'alt');
      return alt ? ` ${decodeHtml(alt)} ` : ' ';
    })
    .replace(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi, (_match, level, textHtml) => {
      const text = cleanInlineText(convertHtmlFragmentToMarkdown(textHtml, sourceUrl));
      return text ? `\n\n${'#'.repeat(Number(level))} ${text}\n\n` : '\n\n';
    })
    .replace(/<blockquote\b[^>]*>([\s\S]*?)<\/blockquote>/gi, (_match, textHtml) => {
      const text = normalizeMarkdown(convertHtmlFragmentToMarkdown(textHtml, sourceUrl));
      return text
        ? `\n\n${text
            .split('\n')
            .map((line) => (line ? `> ${line}` : '>'))
            .join('\n')}\n\n`
        : '\n\n';
    })
    .replace(/<li\b[^>]*>/gi, '\n- ')
    .replace(/<\/li>/gi, '\n')
    .replace(/<br\s*\/?>/gi, '\n');

  BLOCK_TAGS.forEach((tag) => {
    markdown = markdown.replace(new RegExp(`<\\/?${tag}\\b[^>]*>`, 'gi'), '\n\n');
  });

  markdown = markdown
    .replace(/<\/(?:ul|ol|table|thead|tbody|tr)>/gi, '\n')
    .replace(/<(?:ul|ol|table|thead|tbody|tr)\b[^>]*>/gi, '\n')
    .replace(/<\/t[hd]>/gi, ' | ')
    .replace(/<t[hd]\b[^>]*>/gi, '| ')
    .replace(/<\/?(?:strong|b)\b[^>]*>/gi, '**')
    .replace(/<\/?(?:em|i)\b[^>]*>/gi, '*')
    .replace(/<code\b[^>]*>([\s\S]*?)<\/code>/gi, (_match, codeHtml) => {
      const code = decodeHtml(stripTags(codeHtml)).trim();
      return code ? `\`${code.replace(/`/g, '\\`')}\`` : '';
    })
    .replace(/<[^>]+>/g, ' ');

  codeBlocks.forEach((codeBlock, index) => {
    markdown = markdown.replace(`@@CODE_BLOCK_${index}@@`, codeBlock);
  });

  return normalizeMarkdown(decodeHtml(markdown));
}

function extractFirstMatch(value: string, regex: RegExp) {
  return value.match(regex)?.[1] || '';
}

function extractAttribute(attrs: string, name: string) {
  const match = attrs.match(new RegExp(`${name}\\s*=\\s*(["'])(.*?)\\1`, 'i'));
  return match?.[2] ? decodeHtml(match[2]).trim() : '';
}

function stripTags(html: string) {
  return html.replace(/<[^>]+>/g, '');
}

function cleanInlineText(markdown: string) {
  return normalizeMarkdown(markdown).replace(/\n+/g, ' ').trim();
}

function normalizeMarkdown(markdown: string) {
  return markdown
    .replace(/\r\n?/g, '\n')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n[ \t]+/g, '\n')
    .replace(/[ \t]{2,}/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/^\s+|\s+$/g, '')
    .concat('\n');
}

function decodeHtml(value: string) {
  return value.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (_match, entity) => {
    const normalizedEntity = entity.toLowerCase();

    if (normalizedEntity.startsWith('#x')) {
      return String.fromCodePoint(parseInt(normalizedEntity.slice(2), 16));
    }

    if (normalizedEntity.startsWith('#')) {
      return String.fromCodePoint(parseInt(normalizedEntity.slice(1), 10));
    }

    return ENTITY_MAP[normalizedEntity] || `&${entity};`;
  });
}

function normalizeHref(href: string, sourceUrl: URL) {
  if (/^(?:mailto|tel):/i.test(href)) {
    return href;
  }

  let url: URL;
  try {
    url = new URL(href, sourceUrl);
  } catch {
    return href;
  }

  if (url.origin !== sourceUrl.origin || NON_PAGE_EXTENSION_RE.test(url.pathname)) {
    return url.toString();
  }

  url.pathname = pagePathToMarkdownPath(url.pathname);
  return `${url.pathname}${url.search}${url.hash}`;
}

function pagePathToMarkdownPath(pathname: string) {
  const normalizedPath = pathname.replace(/\/$/, '');

  if (!normalizedPath) {
    return '/index.md';
  }

  if (normalizedPath.endsWith('.md')) {
    return normalizedPath;
  }

  return `${normalizedPath}.md`;
}

function startsWithHeading(markdown: string, title: string) {
  const firstLine = markdown.trim().split('\n')[0] || '';
  return firstLine.replace(/^#+\s+/, '').trim() === title;
}

function escapeMarkdownLinkText(text: string) {
  return text.replace(/([\\[\]])/g, '\\$1');
}
