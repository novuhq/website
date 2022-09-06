const fs = require('fs');
const path = require('path');

const fetch = require(`node-fetch`);
const slash = require('slash');

const redirects = require('./redirects.json');
const getSlugForPodcast = require('./src/utils/get-slug-for-podcast');

async function createPages({ graphql, actions, reporter }) {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allWpPage(filter: { template: { templateName: { ne: "Blog" } } }) {
        nodes {
          id
          uri
          template {
            templateName
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw new Error(result.errors);
  }

  const pages = result.data.allWpPage.nodes;

  pages.forEach(({ id, uri, template: { templateName } }) => {
    const templateNamePath = templateName.toLowerCase().replace(/\s/g, '-');
    const templatePath = path.resolve(`./src/templates/${templateNamePath}.jsx`);

    if (fs.existsSync(templatePath)) {
      createPage({
        path: uri,
        component: slash(templatePath),
        context: {
          id,
        },
      });
    } else {
      reporter.error(`Template "${templateName}" was not found`);
    }
  });
}

async function createBlogPages({ graphql, actions }) {
  const POSTS_PER_PAGE = 13;

  const { createPage } = actions;

  const result = await graphql(`
    {
      wpPage(template: { templateName: { eq: "Blog" } }) {
        id
        uri
      }

      allWpPost(sort: { fields: date, order: DESC }) {
        nodes {
          id
          categories {
            nodes {
              id
            }
          }
        }
      }

      featuredPost: allWpPost(limit: 1, sort: { fields: date, order: DESC }) {
        nodes {
          id
        }
      }

      allWpCategory(
        filter: {
          name: { nin: ["Uncategorized"] }
          posts: { nodes: { elemMatch: { id: { ne: null } } } }
        }
        sort: { fields: name, order: ASC }
      ) {
        nodes {
          id
          slug
          seo {
            title
            metaDesc
            metaRobotsNoindex
            opengraphUrl
            opengraphImage {
              localFile {
                childImageSharp {
                  gatsbyImageData(formats: JPG, width: 1200, height: 630)
                }
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw new Error(result.errors);
  }

  const {
    data: {
      wpPage: page,
      allWpPost: { nodes: posts },
      featuredPost: {
        nodes: { 0: featuredPost },
      },
      allWpCategory: { nodes: categories },
    },
  } = result;

  const postsWithoutPostsInHeroSection = posts.filter((post) => post.id !== featuredPost.id);

  const template = path.resolve('./src/templates/blog.jsx');

  const context = {
    id: page.id,
    featuredPostId: featuredPost.id,
    blogPageURL: page.uri,
  };

  // Creating non category pages
  const pageCount = Math.ceil(postsWithoutPostsInHeroSection.length / POSTS_PER_PAGE);
  Array.from({ length: pageCount }).forEach((_, index) => {
    createPage({
      path: index === 0 ? page.uri : `${page.uri}${index + 1}/`,
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
    const postsForCategory = postsWithoutPostsInHeroSection.filter((post) => {
      const postCategoryId = post.categories.nodes[0].id;
      return postCategoryId === category.id;
    });

    const pageCount = Math.ceil(postsForCategory.length / POSTS_PER_PAGE);
    Array.from({ length: pageCount }).forEach((_, index) => {
      createPage({
        path:
          index === 0
            ? `${page.uri}${category.slug}/`
            : `${page.uri}${category.slug}/${index + 1}/`,
        component: slash(template),
        context: {
          ...context,
          limit: POSTS_PER_PAGE,
          skip: index * POSTS_PER_PAGE,
          pageCount,
          currentPage: index,
          categoryId: category.id,
          categoryPath: `${category.slug}/`,
          seo: category.seo,
        },
      });
    });
  });
}

async function createPosts({ graphql, actions }) {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allWpPost {
        nodes {
          id
          uri
          categories {
            nodes {
              slug
            }
          }
        }
      }

      wpPage(template: { templateName: { eq: "Blog" } }) {
        uri
      }
    }
  `);

  if (result.errors) {
    throw new Error(result.errors);
  }

  const {
    data: {
      wpPage: { uri: blogPageURL },
      allWpPost: { nodes: posts },
    },
  } = result;

  const template = path.resolve('./src/templates/blog-post.jsx');

  posts.forEach(({ id, uri, categories }) => {
    const context = {
      id,
      categorySlug: categories.nodes[0].slug,
      blogPageURL,
    };

    createPage({
      path: uri,
      component: slash(template),
      context,
    });
  });
}

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

  const podcastPageUrl = 'podcast';
  const template = path.resolve('./src/templates/podcast.jsx');

  createPage({
    path: podcastPageUrl,
    component: slash(template),
    context: {
      podcastPageUrl,
    },
  });

  const pageCount = Math.ceil(podcasts.length / PODCASTS_PER_PAGE);

  Array.from({ length: pageCount }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/${podcastPageUrl}` : `/${podcastPageUrl}/${index + 1}`,
      component: slash(template),
      context: {
        limit: PODCASTS_PER_PAGE,
        skip: index * PODCASTS_PER_PAGE,
        pageCount,
        currentPage: index,
        podcastPageUrl,
      },
    });
  });
};

async function createPodcastDetailPages({ graphql, actions }) {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allFeedPodcast {
        nodes {
          id
          title
        }
      }
    }
  `);

  if (result.errors) {
    throw new Error(result.errors);
  }

  const {
    allFeedPodcast: { nodes: podcasts },
  } = result.data;

  podcasts.forEach(({ id, title }) => {
    const templatePath = path.resolve('./src/templates/podcast-detail.jsx');
    const slug = getSlugForPodcast(title);

    createPage({
      path: `/podcast/${slug}/`,
      component: slash(templatePath),
      context: {
        id,
      },
    });
  });
}

exports.createPages = async (args) => {
  const { createRedirect } = args.actions;

  const params = {
    ...args,
  };

  redirects.forEach((redirect) =>
    createRedirect({
      fromPath: redirect.fromPath,
      toPath: redirect.toPath,
      statusCode: redirect.statusCode,
      force: redirect.force,
    })
  );

  await createPages(params);
  await createBlogPages(params);
  await createPosts(params);
  await createPodcastPage(params);
  await createPodcastDetailPages(params);
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

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
    type FeedPodcast implements Node {
      content: FeedPodcastContent
    }
    type FeedPodcastContent @infer{
      encoded: String
    }
  `;

  createTypes(typeDefs);
};
