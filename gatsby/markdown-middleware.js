const {
  HTML_ACCEPT,
  MARKDOWN_CONTENT_TYPE,
  NON_PAGE_EXTENSION_RE,
  STATIC_MARKDOWN_PATHS,
  acceptsMarkdown,
  htmlToMarkdown,
  markdownPathToPagePath,
} = require('../src/utils/markdown');

const createMarkdownMiddleware =
  ({ fetchImpl = fetch } = {}) =>
  async (req, res, next) => {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      next();
      return;
    }

    const protocol = req.protocol || 'http';
    const host = req.get ? req.get('host') : req.headers.host;
    const requestUrl = new URL(req.originalUrl || req.url, `${protocol}://${host}`);
    const isMarkdownPath = requestUrl.pathname.endsWith('.md');
    const accept = req.get ? req.get('accept') : req.headers.accept;
    const wantsMarkdown = acceptsMarkdown(accept);

    if (STATIC_MARKDOWN_PATHS.has(requestUrl.pathname)) {
      next();
      return;
    }

    if (!isMarkdownPath && !wantsMarkdown) {
      next();
      return;
    }

    if (!isMarkdownPath && NON_PAGE_EXTENSION_RE.test(requestUrl.pathname)) {
      next();
      return;
    }

    const pageUrl = new URL(requestUrl);

    if (isMarkdownPath) {
      pageUrl.pathname = markdownPathToPagePath(requestUrl.pathname);
    }

    try {
      const pageResponse = await fetchImpl(pageUrl, {
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
          res
            .status(status)
            .type(MARKDOWN_CONTENT_TYPE)
            .send('Markdown representation is not available for this resource.\n');
          return;
        }

        next();
        return;
      }

      const html = await pageResponse.text();
      const markdownBody = htmlToMarkdown(html, pageUrl);

      res.set('Vary', 'Accept');
      res.type(MARKDOWN_CONTENT_TYPE);
      res.status(200).send(req.method === 'HEAD' ? null : markdownBody);
    } catch (error) {
      next(error);
    }
  };

module.exports = {
  createMarkdownMiddleware,
};
