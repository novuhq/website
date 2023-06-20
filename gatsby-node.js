const fs = require('fs');
const path = require('path');

const fetch = require(`node-fetch`);
const slash = require('slash');

const redirects = require('./redirects.json');
const getUseCases = require('./src/utils/get-use-cases');
// const getSlugForPodcast = require('./src/utils/get-slug-for-podcast');

const createContributorsPage = async ({ actions, reporter }) => {
  const { createPage } = actions;

  try {
    const data = await fetch(`${process.env.GATSBY_CONTRIBUTORS_API_URL}/contributors`).then(
      (response) => response.json()
    );

    const templateMainPage = path.resolve('./src/templates/contributors.jsx');
    const templateDetailPage = path.resolve('./src/templates/contributor.jsx');

    createPage({
      path: '/contributors/',
      component: slash(templateMainPage),
      context: {
        contributors: data,
      },
    });

    const contributors = data.list.filter(
      ({ totalPulls, teammate }) => totalPulls > 0 && !teammate
    );

    await Promise.all(
      // we need to get the full information on pulls, which is missing from the /contributors/ endpoint,
      // so we have to make an additional request to extract this data
      contributors.map(async (contributor) => {
        const { pulls } = await fetch(
          `${process.env.GATSBY_CONTRIBUTORS_API_URL}/contributor/${contributor.github}`
        ).then((response) => response.json());

        return { ...contributor, pulls };
      })
    ).then((contributors) => {
      contributors.forEach((contributor) => {
        const ogImage = `${process.env.GATSBY_CONTRIBUTORS_API_URL}/profiles/${contributor.github}.jpg`;
        const embedImage = `${process.env.GATSBY_CONTRIBUTORS_API_URL}/profiles/${contributor.github}-small.jpg`;

        createPage({
          path: `/contributors/${contributor.github}/`,
          component: slash(templateDetailPage),
          context: {
            userName: contributor.github,
            contributor: {
              ...contributor,
              images: {
                ogImage,
                embedImage,
              },
            },
          },
        });
      });
    });
  } catch (err) {
    reporter.panicOnBuild('There was an error when loading Contributors.', err);
  }
};

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
      allWpPost(sort: { date: DESC }) {
        nodes {
          id
          categories {
            nodes {
              id
            }
          }
        }
      }
      featuredPost: allWpPost(limit: 1, sort: { date: DESC }) {
        nodes {
          id
        }
      }
      allWpCategory(
        filter: {
          name: { nin: ["Uncategorized"] }
          posts: { nodes: { elemMatch: { id: { ne: null } } } }
        }
        sort: { name: ASC }
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

// const createPodcastPage = async ({ graphql, actions, reporter }) => {
//   const PODCASTS_PER_PAGE = 13;

//   const { createPage } = actions;

//   const result = await graphql(
//     `
//       {
//         allFeedPodcast {
//           nodes {
//             id
//           }
//         }
//       }
//     `
//   );

//   if (result.errors) {
//     reporter.panicOnBuild(result.errors);
//     return;
//   }

//   const {
//     allFeedPodcast: { nodes: podcasts },
//   } = result.data;

//   const podcastPageUrl = 'podcast';
//   const template = path.resolve('./src/templates/podcast.jsx');

//   createPage({
//     path: podcastPageUrl,
//     component: slash(template),
//     context: {
//       podcastPageUrl,
//     },
//   });

//   const pageCount = Math.ceil(podcasts.length / PODCASTS_PER_PAGE);

//   Array.from({ length: pageCount }).forEach((_, index) => {
//     createPage({
//       path: index === 0 ? `/${podcastPageUrl}` : `/${podcastPageUrl}/${index + 1}`,
//       component: slash(template),
//       context: {
//         limit: PODCASTS_PER_PAGE,
//         skip: index * PODCASTS_PER_PAGE,
//         pageCount,
//         currentPage: index,
//         podcastPageUrl,
//       },
//     });
//   });
// };

// async function createPodcastDetailPages({ graphql, actions }) {
//   const { createPage } = actions;

//   const result = await graphql(`
//     {
//       allFeedPodcast {
//         nodes {
//           id
//           title
//         }
//       }
//     }
//   `);

//   if (result.errors) {
//     throw new Error(result.errors);
//   }

//   const {
//     allFeedPodcast: { nodes: podcasts },
//   } = result.data;

//   podcasts.forEach(({ id, title }) => {
//     const templatePath = path.resolve('./src/templates/podcast-detail.jsx');
//     const slug = getSlugForPodcast(title);

//     createPage({
//       path: `/podcast/${slug}/`,
//       component: slash(templatePath),
//       context: {
//         id,
//       },
//     });
//   });
// }

async function createUseCasePages({ graphql, actions, reporter }) {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityTechnicalUseCase {
        nodes {
          id
          templateType: _type
          title
          description
          slug {
            current
          }
          body: _rawBody
          templateIndetifiers
        }
      }
      allSanityFeatureUseCase {
        nodes {
          id
          templateType: _type
          title
          description
          slug {
            current
          }
          body: _rawBody
          templateIndetifiers
        }
      }

      allSanityProvider {
        nodes {
          name
          channels {
            channel {
              name
              value {
                current
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

  try {
    const useCases = [
      ...result.data.allSanityTechnicalUseCase.nodes,
      ...result.data.allSanityFeatureUseCase.nodes,
    ];
    const allProviders = result.data.allSanityProvider.nodes;

    const useCasesWithFullData = await getUseCases(useCases, allProviders);
    const useCaseTemplate = path.resolve('./src/templates/use-case.jsx');
    const useCaseTemplateTypes = {
      'technical-use-case': {
        slug: '/technical-use-cases/',
      },
      'feature-use-case': {
        slug: '/feature-use-cases/',
      },
    };

    useCasesWithFullData.map((useCase) => {
      const { templateType, slug } = useCase;

      const parentPageUrl = useCaseTemplateTypes[templateType].slug;
      const otherUseCases = useCasesWithFullData
        .filter(
          (otherUseCase) =>
            otherUseCase.id !== useCase.id && otherUseCase.templateType === templateType
        )
        .map((otherUseCase) => ({
          ...otherUseCase,
          slug: parentPageUrl + otherUseCase.slug.current,
        }))
        .slice(-2);

      return createPage({
        path: `${useCaseTemplateTypes[templateType].slug}${slug.current}/`,
        component: slash(useCaseTemplate),
        context: {
          ...useCase,
          parentPageUrl,
          otherUseCases,
        },
      });
    });

    const useCasesTemplate = path.resolve('./src/templates/use-cases.jsx');

    createPage({
      path: '/technical-use-cases/',
      component: slash(useCasesTemplate),
      context: {
        title: 'Technical Use Cases',
        description:
          'Simple components and APIs for managing all communication channels  in one place: Email, SMS, Direct, and Push',
        useCases: useCasesWithFullData.filter(
          (useCase) => useCase.templateType === 'technical-use-case'
        ),
        pageMetadata: {
          slug: '/technical-use-cases/',
          title: 'Technical Use Cases - Novu',
        },
      },
    });

    createPage({
      path: '/feature-use-cases/',
      component: slash(useCasesTemplate),
      context: {
        title: 'Feature Use Cases',
        description:
          'Simple components and APIs for managing all communication channels  in one place: Email, SMS, Direct, and Push',
        useCases: useCasesWithFullData.filter(
          (useCase) => useCase.templateType === 'feature-use-case'
        ),
        pageMetadata: {
          slug: '/feature-use-cases/',
          title: 'Feature Use Cases - Novu',
        },
      },
    });
  } catch (error) {
    reporter.panicOnBuild('Error in createUseCasePages:', error);
  }
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
  await createUseCasePages(params);

  // TODO: to uncomment the creation of podcast pages after this link works - https://feeds.transistor.fm/sourcelife
  // await createPodcastPage(params);
  // await createPodcastDetailPages(params);
  await createContributorsPage(params);
};

exports.sourceNodes = async ({ actions: { createNode }, createContentDigest }) => {
  // get data from GitHub API at build time
  const githubData = await fetch(`https://api.github.com/repos/novuhq/novu`).then((response) =>
    response.json()
  );
  // create node for build time data example in the docs
  createNode({
    // nameWithOwner and url are arbitrary fields from the data
    nameWithOwner: githubData.full_name,
    url: githubData.html_url,
    count: githubData.stargazers_count,
    // required fields
    id: `github-data`,
    parent: null,
    children: [],
    internal: {
      type: `Github`,
      contentDigest: createContentDigest(githubData),
    },
  });

  const issuesData = await fetch(`${process.env.GATSBY_CONTRIBUTORS_API_URL}/issues`).then(
    (response) => response.json()
  );
  createNode({
    data: issuesData.issues,
    id: `issues-data`,
    parent: null,
    children: [],
    internal: {
      type: `Issues`,
      contentDigest: createContentDigest(issuesData),
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

exports.onPostBuild = require('./gatsby/on-post-build');
