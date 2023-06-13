// eslint-disable-next-line import/no-extraneous-dependencies
const objectHash = require('object-hash');

const {
  fetchReadmeContent,
  changeReadmeContent,
  octokit,
  getCache,
  setCache,
} = require('../src/utils/contributors-utils');

// TODO: rename repoOwner and repoName to Novu's
const repoOwner = 'vannyle';
const repoName = 'contributors';

module.exports = async ({ graphql }) => {
  if (process.env.NODE_ENV !== 'production' && !process.env.GITHUB_README_TOKEN) {
    return;
  }

  const result = await graphql(`
    query {
      allWpUserAchievement {
        nodes {
          title
          userAchievement {
            achievementsList {
              achievement {
                ... on WpAchievement {
                  title
                  achievement {
                    tooltip
                    badge {
                      altText
                      sourceUrl
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const data = result.data.allWpUserAchievement.nodes.map(
    ({ userAchievement: { achievementsList }, title }) => ({ title, achievementsList })
  );

  const contributorsWithAdditionalAchievements = data.map(({ title, achievementsList }) => {
    const achievements = achievementsList.map(({ achievement }) => {
      const {
        title,
        achievement: {
          tooltip,
          badge: { sourceUrl },
        },
      } = achievement;

      return { title, tooltip, image: sourceUrl };
    });

    return { github: title, achievements };
  });

  await fetchReadmeContent(repoOwner, repoName)
    .then(async (data) => {
      if (data) {
        const { content, sha } = data;

        const oldData = await getCache();
        const oldDataHash = oldData || null;

        const newData = await changeReadmeContent(content, contributorsWithAdditionalAchievements);
        const newDataHash = objectHash(newData);

        if (newDataHash !== oldDataHash) {
          await setCache(newDataHash);

          // Update the README.md file
          await octokit
            .request(`PUT /repos/${repoOwner}/${repoName}/contents/README.md`, {
              owner: 'OWNER',
              repo: 'REPO',
              path: 'README.md',
              message: 'chore: update community heroes in readme',
              content: Buffer.from(newData).toString('base64'),
              sha,
              branch: 'main',
            })
            .then((response) => {
              console.log('README.md updated:', response);
            })
            .catch((error) => {
              console.error('Error updating README.md:', error);
            });
        } else {
          console.log('README.md content has not changed, no update necessary.');
        }
      }
    })
    .catch((error) => {
      console.error('Error fetching README.md:', error);
    });
};
