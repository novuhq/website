import markdownUtils from '../../src/utils/markdown.js';

const {
  HTML_ACCEPT,
  MARKDOWN_CONTENT_TYPE,
  NON_PAGE_EXTENSION_RE,
  STATIC_MARKDOWN_PATHS,
  acceptsMarkdown,
  htmlToMarkdown,
  markdownPathToPagePath,
} = markdownUtils;

export default async function markdown(request, context) {
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

  const pageResponse = await fetch(pageUrl, {
    headers: {
      accept: HTML_ACCEPT,
    },
    method: 'GET',
    redirect: 'follow',
  });

  const contentType = pageResponse.headers.get('content-type') || '';

  if (!pageResponse.ok || !contentType.includes('text/html')) {
    if (isMarkdownPath) {
      const status = pageResponse.status >= 400 ? pageResponse.status : 404;
      return new Response('Markdown representation is not available for this resource.\n', {
        status,
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
