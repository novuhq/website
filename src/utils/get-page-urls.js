const getPageUrls = ({ canonical, pathname, siteUrl }) => {
  const currentUrl = new URL(pathname || '/', siteUrl).toString();
  const normalizedUrl = new URL(canonical || currentUrl, siteUrl);
  const markdownPath =
    normalizedUrl.pathname === '/'
      ? '/index.md'
      : `${normalizedUrl.pathname.replace(/\/$/, '')}.md`;

  return {
    currentCanonicalUrl: normalizedUrl.toString(),
    currentMarkdownUrl: new URL(markdownPath, siteUrl).toString(),
    currentUrl,
  };
};

module.exports = getPageUrls;
