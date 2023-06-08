/* eslint-disable import/no-extraneous-dependencies */
const { Octokit } = require('@octokit/rest');
const fetch = require('node-fetch');

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const repoOwner = 'vannyle';
const repoName = 'novu';

const ACHIEVEMENTS = [
  {
    iconName: 'goldMedal',
    title: 'Gold Medal',
    image: 'https://novu.co/static/0fa29e2bd41d3e8a743850f444714461/b8d20/gold-medal.webp',
    tooltip:
      'This medal is given to the experienced contributors with many thanks from the Novu team.',
    date: null,
    count: 0,
    minStars: 7,
  },
  {
    iconName: 'silverMedal',
    title: 'Silver Medal',
    image: 'https://novu.co/static/6ed181b6a26c6559bba02be6bc4425ef/b8d20/silver-medal.webp',
    tooltip: 'This one is held by the people who made at least three PRs to make Novu better.',
    date: 'April 2022',
    count: 1,
    minStars: 3,
  },
  {
    iconName: 'bronzeMedal',
    title: 'Bronze Medal',
    image: 'https://novu.co/static/220891bac32daa9d1ba5206d31c969b0/b8d20/bronze-medal.webp',
    tooltip: 'This medal is a great start of your relationship with the Novu project.',
    date: 'April 2022',
    count: 1,
    minStars: 1,
  },
];

const fetchReadmeContent = async (repoOwner, repoName) => {
  try {
    const response = await octokit.request(`GET /repos/${repoOwner}/${repoName}/readme`, {
      owner: 'OWNER',
      repo: 'REPO',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });

    if (response.status === 200) {
      const content = Buffer.from(response.data.content, 'base64').toString('utf-8');
      return { content, sha: response.data.sha };
    }
    console.error('Error fetching README content:', response);
    return null;
  } catch (error) {
    console.error('Error fetching README content:', error);
    return null;
  }
};

const generateTableMarkup = (tableData) => {
  let tableMarkup = '| Photo | Name | Profile | Medals |\n';
  tableMarkup += '| ----- | ------ | ------ | ------ |\n';

  // Loop through the data array and generate table rows
  for (const item of tableData) {
    const { photo, github, name, medals } = item;

    const nameWithEscapedPipe = name.replace(/\|/g, '\\|');

    tableMarkup += `| <img style="border-radius:100%" src="${photo}" width="40" height="40" alt="${github}" /> | <strong>${nameWithEscapedPipe}</strong> | <a href="https://novu.co/contributors/${github}" target="_blank" rel="noopener noreferrer">${github}</a> | <div>${medals}</div> |\n`;
  }

  return tableMarkup;
};

module.exports = async ({ graphql }) => {
  const result = await graphql(`
    query {
      allWpUserAchievement {
        nodes {
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
          title
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

  const fetchContributorsData = async () => {
    try {
      const data = await fetch(`${process.env.GATSBY_CONTRIBUTORS_API_URL}/contributors`).then(
        (response) => response.json()
      );

      const contributors = data.list.filter(
        ({ totalPulls, teammate }) => totalPulls > 0 && !teammate
      );

      const contributorsWithPulls = await Promise.all(
        contributors.map(async (contributor) => {
          const { pulls } = await fetch(
            `${process.env.GATSBY_CONTRIBUTORS_API_URL}/contributor/${contributor.github}`
          ).then((response) => response.json());

          return { ...contributor, pulls };
        })
      );

      const sortedContributors = contributorsWithPulls.sort(
        (a, b) => b.pulls.length - a.pulls.length
      );

      const contributorsWithAllAchievements = sortedContributors.map((contributor) => {
        const achievements = ACHIEVEMENTS.filter(
          ({ minStars }) => contributor.pulls.length >= minStars
        );
        const additionalAchievements = contributorsWithAdditionalAchievements.find(
          ({ github }) => github === contributor.github
        );

        return {
          ...contributor,
          achievements: [...(additionalAchievements?.achievements || []), ...achievements],
        };
      });

      return contributorsWithAllAchievements.map(({ name, github, achievements }) => {
        const medals = achievements.map((achievement) => {
          const { image, title } = achievement;

          const width =
            title === 'Gold Medal' || title === 'Silver Medal' || title === 'Bronze Medal'
              ? '34'
              : '40';

          return `<img src="${image}" width="${width}" height="40" alt="${title}" />`;
        });

        return {
          photo: `https://avatars.githubusercontent.com/${github}?v=3&s=40`,
          name: name || github,
          github,
          medals: medals.length > 0 ? medals.map((medal) => medal).join(' ') : '',
        };
      });
    } catch (error) {
      console.error('Error fetching contributors data:', error);
      return null;
    }
  };

  const changeReadmeContent = async (readmeContent) => {
    const headingToFind = '## 💪 Thanks To All Contributors';
    const data = await fetchContributorsData();

    const tableMarkup = generateTableMarkup(data);

    const headingIndex = readmeContent.indexOf(headingToFind);
    if (headingIndex !== -1) {
      // Find the index of the end of the heading line
      const headingLineEndIndex = readmeContent.indexOf('\n', headingIndex);
      if (headingLineEndIndex !== -1) {
        // Extract the content after the heading line
        const contentAfterHeading = readmeContent.substring(headingLineEndIndex + 1);

        // Replace the content after the heading with the table markup
        const modifiedContent = readmeContent.replace(contentAfterHeading, tableMarkup);

        return modifiedContent;
      }
    }

    return readmeContent; // Return the original content if the heading is not found
  };

  await fetchReadmeContent(repoOwner, repoName)
    .then(async (data) => {
      if (data) {
        const { content, sha } = data;

        const modifiedContent = await changeReadmeContent(content);

        // Update the README.md file
        await octokit
          .request(`PUT /repos/${repoOwner}/${repoName}/contents/README.md`, {
            owner: 'OWNER',
            repo: 'REPO',
            path: 'README.md',
            message: 'Update README.md',
            content: Buffer.from(modifiedContent).toString('base64'),
            sha,
            branch: 'main',
          })
          .then((response) => {
            console.log('README.md updated:', response);
          })
          .catch((error) => {
            console.error('Error updating README.md:', error);
          });
      }
    })
    .catch((error) => {
      console.error('Error fetching README.md:', error);
    });
};
