/* eslint-disable no-use-before-define */

const MARKDOWN_CONTENT_TYPE = 'text/markdown; charset=utf-8';
const HTML_ACCEPT = 'text/html,application/xhtml+xml';

const STATIC_MARKDOWN_PATHS = new Set(['/auth.md', '/sitemap.md', '/llms.txt']);

const NON_PAGE_EXTENSION_RE =
  /\.(?:avif|css|csv|gif|heic|ico|jpeg|jpg|js|json|map|mjs|mp3|mp4|pdf|png|riv|svg|txt|wasm|webm|webmanifest|woff2?|xml)$/i;

const SAFE_LINK_PROTOCOLS = new Set(['http:', 'https:', 'mailto:', 'tel:']);

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

const ENTITY_MAP = {
  amp: '&',
  apos: "'",
  gt: '>',
  lt: '<',
  nbsp: ' ',
  quot: '"',
};

function acceptsMarkdown(accept) {
  if (!accept) {
    return false;
  }

  return accept.split(',').some((entry) => {
    const [rawMediaType, ...parameters] = entry.split(';');
    const mediaType = rawMediaType.trim().toLowerCase();

    if (mediaType !== 'text/markdown' && mediaType !== 'text/x-markdown') {
      return false;
    }

    const qualityParameter = parameters.find((parameter) => {
      const [name] = parameter.split('=');
      return name.trim().toLowerCase() === 'q';
    });

    if (!qualityParameter) {
      return true;
    }

    const quality = Number(qualityParameter.slice(qualityParameter.indexOf('=') + 1).trim());
    return Number.isFinite(quality) && quality > 0 && quality <= 1;
  });
}

function markdownPathToPagePath(pathname) {
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

function pagePathToMarkdownPath(pathname) {
  const normalizedPath = pathname.replace(/\/$/, '');

  if (!normalizedPath) {
    return '/index.md';
  }

  if (normalizedPath.endsWith('.md')) {
    return normalizedPath;
  }

  return `${normalizedPath}.md`;
}

function isValidCodePoint(codePoint) {
  return (
    Number.isInteger(codePoint) &&
    codePoint > 0 &&
    codePoint <= 0x10ffff &&
    (codePoint < 0xd800 || codePoint > 0xdfff)
  );
}

function decodeHtml(value) {
  return value.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (match, entity) => {
    const normalizedEntity = entity.toLowerCase();

    if (normalizedEntity.startsWith('#x')) {
      const codePoint = Number.parseInt(normalizedEntity.slice(2), 16);
      return isValidCodePoint(codePoint) ? String.fromCodePoint(codePoint) : match;
    }

    if (normalizedEntity.startsWith('#')) {
      const codePoint = Number.parseInt(normalizedEntity.slice(1), 10);
      return isValidCodePoint(codePoint) ? String.fromCodePoint(codePoint) : match;
    }

    return ENTITY_MAP[normalizedEntity] || match;
  });
}

function normalizeHref(href, sourceUrl) {
  let url;
  try {
    url = new URL(href, sourceUrl);
  } catch {
    return null;
  }

  if (!SAFE_LINK_PROTOCOLS.has(url.protocol)) {
    return null;
  }

  if (url.protocol === 'mailto:' || url.protocol === 'tel:') {
    return url.toString();
  }

  if (url.origin !== sourceUrl.origin || NON_PAGE_EXTENSION_RE.test(url.pathname)) {
    return url.toString();
  }

  url.pathname = pagePathToMarkdownPath(url.pathname);
  return `${url.pathname}${url.search}${url.hash}`;
}

function htmlToMarkdown(html, sourceUrl) {
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

function extractPageContent(html) {
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

function convertHtmlFragmentToMarkdown(html, sourceUrl) {
  let markdown = html;
  const codeBlocks = [];

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
    const normalizedHref = href ? normalizeHref(href, sourceUrl) : null;

    if (!text) {
      return '';
    }

    if (!normalizedHref) {
      return text;
    }

    return `[${escapeMarkdownLinkText(text)}](${normalizedHref})`;
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

function extractFirstMatch(value, regex) {
  return value.match(regex)?.[1] || '';
}

function extractAttribute(attrs, name) {
  const match = attrs.match(new RegExp(`${name}\\s*=\\s*(["'])(.*?)\\1`, 'i'));
  return match?.[2] ? decodeHtml(match[2]).trim() : '';
}

function stripTags(html) {
  return html.replace(/<[^>]+>/g, '');
}

function cleanInlineText(markdown) {
  return normalizeMarkdown(markdown).replace(/\n+/g, ' ').trim();
}

function normalizeMarkdown(markdown) {
  return markdown
    .replace(/\r\n?/g, '\n')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n[ \t]+/g, '\n')
    .replace(/[ \t]{2,}/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/^\s+|\s+$/g, '')
    .concat('\n');
}

function startsWithHeading(markdown, title) {
  const firstLine = markdown.trim().split('\n')[0] || '';
  return firstLine.replace(/^#+\s+/, '').trim() === title;
}

function escapeMarkdownLinkText(text) {
  return text.replace(/([\\[\]])/g, '\\$1');
}

module.exports = {
  HTML_ACCEPT,
  MARKDOWN_CONTENT_TYPE,
  NON_PAGE_EXTENSION_RE,
  STATIC_MARKDOWN_PATHS,
  acceptsMarkdown,
  decodeHtml,
  htmlToMarkdown,
  markdownPathToPagePath,
  normalizeHref,
};
