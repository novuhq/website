const fetch = require(`node-fetch`);
const path = require('path');

const slash = require('slash');

const createBlogPage = async ({ graphql, actions, reporter }) => {
  const POSTS_PER_PAGE = 13;

  const { createPage } = actions;

  const result = await graphql(
    `
      {
        strapiBlog {
          id
          slug
          featuredPost {
            id
          }
        }

        allStrapiArticle {
          nodes {
            id
            slug
            category {
              id
            }
          }
        }

        allStrapiCategory(sort: { fields: name, order: ASC }) {
          nodes {
            id
            slug
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading your Strapi articles`, result.errors);

    return;
  }

  const {
    strapiBlog,
    allStrapiArticle: { nodes: articles },
    allStrapiCategory: { nodes: categories },
  } = result.data;
  const blogPageURL = strapiBlog.slug;

  const articlesWithoutArticleInHeroSection = articles.filter(
    (post) => post.id !== strapiBlog.featuredPost.id
  );
  const template = path.resolve('./src/templates/blog.jsx');

  const context = {
    id: strapiBlog.id,
    featuredPostId: strapiBlog.featuredPost.id,
    blogPageURL,
  };

  createPage({
    path: blogPageURL,
    component: slash(template),
    context,
  });

  // Creating non category pages
  const pageCount = Math.ceil(articlesWithoutArticleInHeroSection.length / POSTS_PER_PAGE);

  Array.from({ length: pageCount }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/${blogPageURL}` : `/${blogPageURL}/${index + 1}`,
      component: slash(template),
      context: {
        ...context,
        limit: POSTS_PER_PAGE,
        skip: index * POSTS_PER_PAGE,
        pageCount,
        currentPage: index,
      },
    });
  });

  // Creating pages for each category
  categories.forEach((category) => {
    const articlesForCategory = articlesWithoutArticleInHeroSection.filter((article) => {
      const articleCategoryId = article.category.id;
      return articleCategoryId === category.id;
    });

    const pageCount = Math.ceil(articlesForCategory.length / POSTS_PER_PAGE);
    Array.from({ length: pageCount }).forEach((_, index) => {
      createPage({
        path:
          index === 0
            ? `/${blogPageURL}/${category.slug}`
            : `/${blogPageURL}/${category.slug}/${index + 1}`,
        component: slash(template),
        context: {
          ...context,
          limit: POSTS_PER_PAGE,
          skip: index * POSTS_PER_PAGE,
          pageCount,
          currentPage: index,
          categoryId: category.id,
          categoryPath: `${category.slug}/`,
        },
      });
    });
  });
};

const createArticles = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        strapiBlog {
          slug
        }

        allStrapiArticle {
          nodes {
            id
            slug
            category {
              name
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading your Strapi articles`, result.errors);

    return;
  }

  const {
    strapiBlog: { slug: blogPageURL },
    allStrapiArticle: { nodes: articles },
  } = result.data;
  const template = path.resolve('./src/templates/article.jsx');

  if (articles.length) {
    articles.forEach(({ id, slug, category: { name: categoryName } }) => {
      const context = {
        id,
        categoryName,
        blogPageURL,
      };

      createPage({
        path: `/${blogPageURL}/${slug}`,
        component: slash(template),
        context,
      });
    });
  }
};

const createPodcastPage = async ({ graphql, actions, reporter }) => {
  const PODCASTS_PER_PAGE = 13;

  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allFeedPodcast {
          nodes {
            id
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(result.errors);
    return;
  }

  const {
    allFeedPodcast: { nodes: podcasts },
  } = result.data;

  const podcastPageURL = '/podcast/';
  const template = path.resolve('./src/templates/podcast.jsx');

  createPage({
    path: podcastPageURL,
    component: slash(template),
    context: {
      podcastPageURL,
    },
  });

  const pageCount = Math.ceil(podcasts.length / PODCASTS_PER_PAGE);

  Array.from({ length: pageCount }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/${podcastPageURL}` : `/${podcastPageURL}/${index + 1}`,
      component: slash(template),
      context: {
        limit: PODCASTS_PER_PAGE,
        skip: index * PODCASTS_PER_PAGE,
        pageCount,
        currentPage: index,
      },
    });
  });
};

exports.createPages = async (args) => {
  const params = {
    ...args,
  };

  await createBlogPage(params);
  await createArticles(params);
  await createPodcastPage(params);
};

exports.sourceNodes = async ({ actions: { createNode }, createContentDigest }) => {
  // get data from GitHub API at build time
  const result = await fetch(`https://api.github.com/repos/novuhq/novu`);
  const resultData = await result.json();
  // create node for build time data example in the docs
  createNode({
    // nameWithOwner and url are arbitrary fields from the data
    nameWithOwner: resultData.full_name,
    url: resultData.html_url,
    count: resultData.stargazers_count,
    // required fields
    id: `github-data`,
    parent: null,
    children: [],
    internal: {
      type: `Github`,
      contentDigest: createContentDigest(resultData),
    },
  });
};

/* 
TODO: We can get rid of this if at least one article inside the content contains an embedded image

creating the STRAPI_ARTICLE_CONTENT_MEDIA type for the content,
so as not to get an error when executing a GraphQL query in the article template (since this data is currently missing)
*/
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
    type STRAPI_ARTICLE implements Node {
      content: STRAPI_ARTICLE_CONTENT
    }
    type STRAPI_ARTICLE_CONTENT @infer{
      medias: [STRAPI_ARTICLE_CONTENT_MEDIAS]
    }
    type STRAPI_ARTICLE_CONTENT_MEDIAS @infer{
      src: String
      localFile: File @link(from: "localFile___NODE")
    }
  `;

  createTypes(typeDefs);
};
