const fs = require('fs');
const path = require('path');

const fetch = require('node-fetch');
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

const isProductionBuild = process.env.CONTEXT === 'production';

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

    // we need to get the full information on pulls, which is missing from the /contributors/ endpoint,
    // so we have to make an additional request to extract this data
    const enrichedResults = await Promise.allSettled(
      contributors.map(async (contributor) => {
        const response = await fetch(
          `${process.env.GATSBY_CONTRIBUTORS_API_URL}/contributor/${contributor.github}`
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch contributor details for "${contributor.github}": ${response.status} ${response.statusText}`
          );
        }

        const { pulls } = await response.json();

        return { ...contributor, pulls };
      })
    );

    const failedDetails = enrichedResults
      .map((r, idx) => (r.status === 'rejected' ? contributors[idx]?.github : null))
      .filter(Boolean);

    if (failedDetails.length > 0) {
      const msg = `Failed to fetch detailed contributor data for ${failedDetails.length} contributor(s). Example: "${failedDetails[0]}".`;
      if (isProductionBuild) {
        reporter.panicOnBuild(msg);
      } else {
        reporter.warn(`${msg} Continuing with empty pulls for those profiles.`);
      }
    }

    const enrichedContributors = enrichedResults.map((r, idx) =>
      r.status === 'fulfilled' ? r.value : { ...contributors[idx], pulls: [] }
    );

    enrichedContributors.forEach((contributor) => {
      const ogImage = `${process.env.GATSBY_CONTRIBUTORS_API_URL}/profiles/${contributor.github}.jpg`;
      const embedImage = `${process.env.GATSBY_CONTRIBUTORS_API_URL}/profiles/${contributor.github}-small.jpg`;

      createPage({
        path: `/contributors/${contributor.github.toLowerCase()}/`,
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
  } catch (err) {
    const msg = `There was an error when loading the main Contributors list. Reason: ${err.message}`;
    if (isProductionBuild) {
      reporter.panicOnBuild(msg, err);
    } else {
      reporter.warn(`${msg} Skipping contributor pages for this build.`);
    }
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

async function createDirectoryPages({ graphql, actions }) {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMdx(filter: { internal: { contentFilePath: { regex: "/src/data/pages/directory/" } } }) {
        nodes {
          frontmatter {
            title
            description
            updatedAt
            images {
              childImageSharp {
                gatsbyImageData(width: 588, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
              }
            }
          }
          fields {
            directorySlug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw new Error(result.errors);
  }

  const posts = result.data.allMdx.nodes;
  const postTemplate = path.resolve(`./src/templates/directory-post.jsx`);

  createPage({
    path: `/directory`,
    component: path.resolve(`./src/templates/directory.jsx`),
    context: {
      posts,
    },
  });

  posts.forEach((node) => {
    const slug = node.fields.directorySlug;

    createPage({
      path: `/directory/${slug}`,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        slug,
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
  await createCommunityPage(params);
  await createDirectoryPages(params);

  // TODO: to uncomment the creation of podcast pages after this link works - https://feeds.transistor.fm/sourcelife
  // await createPodcastPage(params);
  // await createPodcastDetailPages(params);
  await createContributorsPage(params);
};

exports.onCreateNode = require('./gatsby/on-create-node');

exports.sourceNodes = async ({ actions: { createNode }, createContentDigest, reporter }) => {
  try {
    const githubDataPromise = fetch('https://api.github.com/repos/novuhq/novu').then((response) =>
      response.json()
    );
    const allContributorsPromise = fetch(
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
  } catch (error) {
    reporter.panicOnBuild('Error sourcing nodes from GitHub API', error);
  }
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
    type Asset {
      url: String
      metadata: Metadata
    }
    type Metadata {
      dimensions: Dimensions
    }
    type Dimensions {
      width: Int
      height: Int
    }
    type CoverContent {
      asset: Asset
    }
    type SanityLatestChangelog {
      _id: ID!
      title: String
      slug: String
      cover: CoverContent
      content: JSON
      caption: String
    }
    extend type Query {
      sanityLatestChangelog: SanityLatestChangelog
    }
    enum SystemsStatusEnum {
      paused
      pending
      maintenance
      validating
      up
      down
    }
    type SystemsStatus {
      name: String!
      status: SystemsStatusEnum
    }
  `;

  createTypes(typeDefs);
};

exports.onPostBuild = require('./gatsby/on-post-build');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: (filePath) => {
            const fileName = filePath.split('/').pop();

            return fileName === 'rive.wasm';
          },
          type: 'asset/resource',
          generator: {
            filename: 'static/[name].[hash][ext]',
          },
        },
      ],
    },
  });
};

exports.createResolvers = ({ createResolvers, reporter }) => {
  // eslint-disable-next-line import/no-extraneous-dependencies
  const { createClient } = require('@sanity/client');

  const client = createClient({
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,
    token: process.env.SANITY_API_READ_TOKEN,
    apiVersion: '2025-01-01',
    useCdn: false,
    perspective: 'published',
  });

  createResolvers({
    Query: {
      sanityLatestChangelog: {
        type: 'SanityLatestChangelog',
        resolve: async () => {
          const groq = `
          *[_type == "changelogPost" && defined(publishedAt)]
          | order(publishedAt desc)[0]{
            _id,
            title,
            "slug": slug.current,
            cover {
              asset->{
                url,
                metadata {dimensions}
              }
            },
            content,
            caption
          }
        `;

          try {
            const doc = await client.fetch(groq);
            if (!doc) return null;

            if (doc.cover?.asset?.url) {
              doc.cover.asset.url = `${doc.cover.asset.url}?w=440`;
            }

            return doc;
          } catch (error) {
            reporter.error('Failed to fetch data from Sanity:', error);
            return null;
          }
        },
      },
      systemsStatus: {
        type: '[SystemsStatus]!',
        resolve: async () => {
          const monitorNames = [
            '[US] - API',
            '[US] - WebSocket Service',
            '[US] - Webhooks service',
            '[EU] - API',
            '[EU] - WebSocket Service',
            '[EU] - Webhooks service',
          ];

          try {
            const response = await fetch('https://uptime.betterstack.com/api/v2/monitors', {
              headers: {
                Authorization: `Bearer ${process.env.BETTERSTACK_API_KEY}`,
              },
            });

            if (!response.ok) {
              throw new Error('Failed to fetch systems status from Better Stack API');
            }

            const { data } = await response.json();

            if (!data || !data.length) {
              throw new Error('Better Stack API returned an invalid data');
            }

            return data
              .map((monitor) => ({
                name: monitor.attributes.pronounceable_name,
                status: monitor.attributes.status,
              }))
              .filter((monitor) => monitorNames.includes(monitor.name));
          } catch (error) {
            reporter.error('Failed to fetch data from Better Stack:', error);
            return [];
          }
        },
      },
    },
  });
};
