const assert = require('node:assert/strict');
const { readFile } = require('node:fs/promises');
const { test } = require('node:test');

const { createMarkdownMiddleware } = require('../gatsby/markdown-middleware');
const getPageUrls = require('../src/utils/get-page-urls');
const {
  HTML_ACCEPT,
  MARKDOWN_CONTENT_TYPE,
  STATIC_MARKDOWN_PATHS,
  acceptsMarkdown,
  decodeHtml,
  htmlToMarkdown,
  markdownPathToPagePath,
} = require('../src/utils/markdown');

const PAGE_HTML = `<!doctype html>
<html>
  <head>
    <title>Novu Inbox</title>
    <meta name="description" content="An agent-friendly page">
  </head>
  <body>
    <main>
      <h1>Inbox</h1>
      <p>Read the <a href="/pricing/">pricing page</a>.</p>
    </main>
  </body>
</html>`;

function createRequest(pathname, { accept = 'text/html', headers = {}, method = 'GET' } = {}) {
  const requestHeaders = {
    accept,
    host: 'localhost:8000',
    ...headers,
  };

  return {
    method,
    originalUrl: pathname,
    protocol: 'http',
    headers: requestHeaders,
    get(name) {
      return requestHeaders[name.toLowerCase()];
    },
  };
}

function runMiddleware(middleware, request) {
  return new Promise((resolve, reject) => {
    const response = {
      body: undefined,
      headers: {},
      statusCode: undefined,
      send(body) {
        this.body = body;
        resolve({ nextCalled: false, response: this });
        return this;
      },
      set(name, value) {
        this.headers[name.toLowerCase()] = value;
        return this;
      },
      status(statusCode) {
        this.statusCode = statusCode;
        return this;
      },
      type(contentType) {
        this.headers['content-type'] = contentType;
        return this;
      },
    };

    middleware(request, response, (error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve({ nextCalled: true, response });
    });
  });
}

test('maps index and nested markdown paths to HTML page paths', () => {
  assert.equal(markdownPathToPagePath('/index.md'), '/');
  assert.equal(markdownPathToPagePath('/inbox.md'), '/inbox');
  assert.equal(markdownPathToPagePath('/customers/acme.md'), '/customers/acme');
});

test('bypasses static and proxied agent markdown files', () => {
  assert.equal(STATIC_MARKDOWN_PATHS.has('/agents.md'), true);
  assert.equal(STATIC_MARKDOWN_PATHS.has('/auth.md'), true);
  assert.equal(STATIC_MARKDOWN_PATHS.has('/sitemap.md'), true);
});

test('normalizes current, canonical, and markdown alternate URLs', () => {
  assert.deepEqual(
    getPageUrls({
      canonical: 'https://novu.co/customers/',
      pathname: 'https://novu.co/legacy-customers/',
      siteUrl: 'https://novu.co',
    }),
    {
      currentCanonicalUrl: 'https://novu.co/customers/',
      currentMarkdownUrl: 'https://novu.co/customers.md',
      currentUrl: 'https://novu.co/legacy-customers/',
    }
  );

  assert.deepEqual(
    getPageUrls({
      pathname: '/',
      siteUrl: 'https://novu.co',
    }),
    {
      currentCanonicalUrl: 'https://novu.co/',
      currentMarkdownUrl: 'https://novu.co/index.md',
      currentUrl: 'https://novu.co/',
    }
  );
});

test('respects markdown Accept q-values', () => {
  assert.equal(acceptsMarkdown('text/markdown, text/html;q=0.5'), true);
  assert.equal(acceptsMarkdown('text/x-markdown; q=0.2'), true);
  assert.equal(acceptsMarkdown('text/markdown;q=0, text/html;q=1'), false);
  assert.equal(acceptsMarkdown('text/html, */*'), false);
});

test('keeps invalid numeric HTML entities without throwing', () => {
  assert.equal(
    decodeHtml('bad: &#9999999999; &#xFFFFFFFF; &#xD800;'),
    'bad: &#9999999999; &#xFFFFFFFF; &#xD800;'
  );
  assert.equal(decodeHtml('valid: &#65; &#x42;'), 'valid: A B');
});

test('loads markdown utilities as a Deno-compatible side-effect ESM module', async () => {
  const source = await readFile(require.resolve('../src/utils/markdown.js'), 'utf8');
  const moduleUrl = `data:text/javascript;base64,${Buffer.from(
    `${source}\nexport default globalThis.novuMarkdownUtils;`
  ).toString('base64')}`;
  const { default: edgeMarkdownUtils } = await import(moduleUrl);

  assert.equal(edgeMarkdownUtils.MARKDOWN_CONTENT_TYPE, MARKDOWN_CONTENT_TYPE);
  assert.equal(edgeMarkdownUtils.markdownPathToPagePath('/inbox.md'), '/inbox');
  assert.match(
    edgeMarkdownUtils.htmlToMarkdown(PAGE_HTML, new URL('https://novu.co/inbox')),
    /# Inbox/
  );
});

test('drops unsafe link targets and preserves allowed protocols', () => {
  const html = `<main>
    <a href="JaVaScRiPt:alert(1)">unsafe</a>
    <a href="data:text/plain,test">data</a>
    <a href="/pricing/">internal</a>
    <a href="https://example.com/page">external</a>
    <a href="mailto:team@novu.co">email</a>
    <a href="tel:+123456789">phone</a>
  </main>`;
  const markdown = htmlToMarkdown(html, new URL('https://novu.co/inbox'));

  assert.match(markdown, /unsafe/);
  assert.doesNotMatch(markdown, /javascript:/i);
  assert.match(markdown, /data/);
  assert.doesNotMatch(markdown, /data:text/i);
  assert.match(markdown, /\[internal\]\(\/pricing\.md\)/);
  assert.match(markdown, /\[external\]\(https:\/\/example\.com\/page\)/);
  assert.match(markdown, /\[email\]\(mailto:team@novu\.co\)/);
  assert.match(markdown, /\[phone\]\(tel:\+123456789\)/);
});

test('serves index, normal, and proxied-style markdown paths', async () => {
  const requestedUrls = [];
  const fetchImpl = async (url) => {
    requestedUrls.push(url.pathname);
    return new Response(PAGE_HTML, {
      headers: { 'content-type': 'text/html; charset=utf-8' },
    });
  };
  const middleware = createMarkdownMiddleware({ fetchImpl });

  const results = await Promise.all(
    ['/index.md', '/inbox.md', '/pricing.md'].map((pathname) =>
      runMiddleware(middleware, createRequest(pathname))
    )
  );

  results.forEach((result) => {
    assert.equal(result.response.statusCode, 200);
    assert.equal(result.response.headers['content-type'], MARKDOWN_CONTENT_TYPE);
    assert.match(result.response.body, /# Inbox/);
  });

  assert.deepEqual(requestedUrls, ['/', '/inbox', '/pricing']);
});

test('serves content negotiation and ignores q=0', async () => {
  let fetchCount = 0;
  const fetchImpl = async () => {
    fetchCount += 1;
    return new Response(PAGE_HTML, {
      headers: { 'content-type': 'text/html' },
    });
  };
  const middleware = createMarkdownMiddleware({ fetchImpl });

  const accepted = await runMiddleware(
    middleware,
    createRequest('/inbox', { accept: 'text/markdown, text/html;q=0.5' })
  );
  assert.equal(accepted.response.statusCode, 200);

  const rejected = await runMiddleware(
    middleware,
    createRequest('/inbox', { accept: 'text/markdown;q=0, text/html;q=1' })
  );
  assert.equal(rejected.nextCalled, true);
  assert.equal(fetchCount, 1);
});

test('HEAD returns headers without a markdown body', async () => {
  const middleware = createMarkdownMiddleware({
    fetchImpl: async () =>
      new Response(PAGE_HTML, {
        headers: { 'content-type': 'text/html' },
      }),
  });
  const result = await runMiddleware(middleware, createRequest('/inbox.md', { method: 'HEAD' }));

  assert.equal(result.response.statusCode, 200);
  assert.equal(result.response.body, null);
  assert.equal(result.response.headers['content-type'], MARKDOWN_CONTENT_TYPE);
});

test('does not forward conditional or range headers to the HTML fetch', async () => {
  let fetchOptions;
  const middleware = createMarkdownMiddleware({
    fetchImpl: async (_url, options) => {
      fetchOptions = options;
      return new Response(PAGE_HTML, {
        headers: { 'content-type': 'text/html' },
      });
    },
  });

  await runMiddleware(
    middleware,
    createRequest('/inbox.md', {
      headers: {
        'if-modified-since': 'Wed, 21 Oct 2015 07:28:00 GMT',
        'if-none-match': '"page-etag"',
        range: 'bytes=0-20',
      },
    })
  );

  assert.deepEqual(fetchOptions.headers, { accept: HTML_ACCEPT });
});

test('maps an unexpected internal 304 response to a valid 404 response', async () => {
  const middleware = createMarkdownMiddleware({
    fetchImpl: async () => ({
      headers: new Headers({ 'content-type': 'text/html' }),
      ok: false,
      status: 304,
    }),
  });
  const result = await runMiddleware(middleware, createRequest('/inbox.md'));

  assert.equal(result.response.statusCode, 404);
  assert.match(result.response.body, /not available/);
});
