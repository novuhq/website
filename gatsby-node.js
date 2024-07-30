const fs = require('fs');
const path = require('path');

const slash = require('slash');

const redirects = require('./redirects.json');
const {
  fetchRepositories,
  fetchAllContributorsWithoutMembers,
  getIssueType,
  fetchIssuesWithLabels,
  sortRepositories,
} = require('./src/utils/community-utils');
const {
  fetchCommitCount,
  fetchClosedIssuesCount,
  fetchPullRequestCount,
} = require('./src/utils/github-utils');
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

const createCommunityPage = async ({ actions, reporter }) => {
  const { createPage } = actions;

  try {
    const repositories = await fetchRepositories();
    const requiredLabels = ['help wanted', 'good first issue'];
    const issuesWithLabels = await Promise.all(
      repositories.map((repo) => fetchIssuesWithLabels(repo, requiredLabels))
    );

    const repositoriesWithLabeledIssues = new Set();

    const labeledIssues = issuesWithLabels.flat().map((issue) => {
      const repo = repositories.find((repo) => repo.url === issue.repository_url);
      repositoriesWithLabeledIssues.add(repo);

      const labels = issue.labels
        .map((label) => label.name)
        .filter((name) => requiredLabels.includes(name));

      const issueType = getIssueType(issue.title);
      const tags = issueType ? [issueType, ...labels] : labels;

      return {
        ...issue,
        repository_name: repo.name,
        tags,
      };
    });

    const nonMemberContributors = await fetchAllContributorsWithoutMembers();
    nonMemberContributors.sort((a, b) => b.contributions - a.contributions);

    const templatePage = path.resolve('./src/templates/community.jsx');

    createPage({
      path: '/community/',
      component: slash(templatePage),
      context: {
        contributors: nonMemberContributors,
        totalContributorsCount: nonMemberContributors.length,
        labeledIssues,
        repositoriesWithLabeledIssues: Array.from(repositoriesWithLabeledIssues)
          .map((repo) => ({
            name: repo.name,
            id: repo.id,
          }))
          .sort(sortRepositories),
      },
    });
  } catch (err) {
    reporter.panicOnBuild('There was an error when loading the Community page.', err);
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
  await createCommunityPage(params);
  await createPosts(params);

  // TODO: to uncomment the creation of podcast pages after this link works - https://feeds.transistor.fm/sourcelife
  // await createPodcastPage(params);
  // await createPodcastDetailPages(params);
  await createContributorsPage(params);
};

exports.sourceNodes = async ({ actions: { createNode }, createContentDigest }) => {
  const githubDataPromise = fetch('https://api.github.com/repos/novuhq/novu').then((response) =>
    response.json()
  );
  const allContributorsPromise = await fetch(
    `${process.env.GATSBY_CONTRIBUTORS_API_URL}/contributors-mini`
  ).then((response) => response.json());

  const dataPromises = Promise.all([
    fetchCommitCount('novuhq', 'novu'),
    fetchPullRequestCount('novuhq', 'novu', 'open'),
    fetchPullRequestCount('novuhq', 'novu', 'closed'),
    fetchClosedIssuesCount('novuhq', 'novu'),
  ]);

  const [
    githubData,
    contributors,
    [commitsCount, openPullRequestsCount, closedPullRequestsCount, closedIssuesCount],
  ] = await Promise.all([githubDataPromise, allContributorsPromise, dataPromises]);

  createNode({
    // nameWithOwner and url are arbitrary fields from the data
    nameWithOwner: githubData.full_name,
    url: githubData.html_url,
    count: githubData.stargazers_count,
    forks: githubData.forks_count,
    openIssues: githubData.open_issues,
    closedIssues: closedIssuesCount,
    pullRequests: openPullRequestsCount + closedPullRequestsCount,
    contributors: contributors.list.length,
    commits: commitsCount,
    // required fields
    id: `github-data`,
    parent: null,
    children: [],
    internal: {
      type: `Github`,
      contentDigest: createContentDigest(githubData),
    },
  });
  // TODO: Please comment this part of the code after Hacktoberfest is over, as this part greatly affects the resources of the build, and come back to it when you need it again.
  // const hacktoberfestIssuesData = await octokit.request(
  //   'GET /orgs/novuhq/issues?filter=all&state=all&labels=hacktoberfest&per_page=100',
  //   {
  //     headers: {
  //       'X-GitHub-Api-Version': '2022-11-28',
  //     },
  //   }
  // );

  // createNode({
  //   data: hacktoberfestIssuesData.data,
  //   id: `hacktoberfest-issues-data`,
  //   parent: null,
  //   children: [],
  //   internal: {
  //     type: `HacktoberfestIssues`,
  //     contentDigest: createContentDigest(hacktoberfestIssuesData),
  //   },
  // });

  // This part is used to get the data of contributors in Hacktoberfest and to calculate the scores

  // const repos = await octokit.request('GET /orgs/novuhq/repos?per_page=100');
  // const repoNames = repos.data.map((repo) => repo.name);

  // const hacktoberfestAuthorsMergedPRs = [];

  // // Fetch pull requests in parallel
  // const allPullRequests = await Promise.all(repoNames.map(fetchMergedPullRequestsFromRepo));

  // allPullRequests.flat().forEach((pr) => {
  //   if (
  //     pr.labels.some(
  //       (label) => label.name === 'hacktoberfest' || label.name === 'hacktoberfest-accepted'
  //     ) &&
  //     pr.merged_at
  //   ) {
  //     const author = pr.user;
  //     const prId = pr.id;
  //     const prUrl = pr.html_url;
  //     const prMergeDate = pr.merged_at;
  //     const repo = pr.base.repo.name;
  //     const score = 1;
  //     const year = new Date(prMergeDate).getFullYear(); // Extracting the year from the merge date

  //     const authorData = hacktoberfestAuthorsMergedPRs.find(
  //       ({ author: authorPR }) => authorPR.login === author.login
  //     );

  //     if (!authorData) {
  //       hacktoberfestAuthorsMergedPRs.push({
  //         author,
  //         prs: [
  //           {
  //             prId,
  //             prUrl,
  //             prMergeDate,
  //             repo,
  //             score,
  //           },
  //         ],
  //         score,
  //         scoreByYear: { [year]: score }, // Initializing scoreByYear with the first score
  //       });
  //     } else {
  //       authorData.prs.push({
  //         prId,
  //         prUrl,
  //         prMergeDate,
  //         repo,
  //         score,
  //       });
  //       authorData.score += score;

  //       // Update the scoreByYear
  //       if (authorData.scoreByYear[year]) {
  //         authorData.scoreByYear[year] += score;
  //       } else {
  //         authorData.scoreByYear[year] = score;
  //       }
  //     }
  //   }
  // });

  // createNode({
  //   data: hacktoberfestAuthorsMergedPRs,
  //   id: `hacktoberfest-authors-prs`,
  //   parent: null,
  //   children: [],
  //   internal: {
  //     type: `HacktoberfestAuthorsMergedPRs`,
  //     contentDigest: createContentDigest(hacktoberfestAuthorsMergedPRs),
  //   },
  // });
  // End of Hacktoberfest part

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
