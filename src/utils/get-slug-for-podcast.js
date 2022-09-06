const getSlugForPodcast = (slug) =>
  slug
    .replace(/w\//g, '')
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase();

module.exports = getSlugForPodcast;
