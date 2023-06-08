const { execSync } = require('child_process');
const fs = require('fs');

// eslint-disable-next-line import/no-extraneous-dependencies
const fetch = require('node-fetch');

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

const repoOwner = 'vannyle';
const repoName = 'novu';

const fetchReadmeContent = async (repoOwner, repoName) => {
  try {
    const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/readme`);
    if (response.ok) {
      const data = await response.json();
      const readmeUrl = data.download_url;
      const readmeResponse = await fetch(readmeUrl);
      if (readmeResponse.ok) {
        return await readmeResponse.text();
      }
      console.error('Error fetching README.md:', readmeResponse.status);
      return null;
    }
    console.error('Error fetching README.md:', response.status);
    return null;
  } catch (error) {
    console.error('Error fetching README.md:', error);
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

    tableMarkup += `| <img src="${photo}" width="60" height="60" alt="${github}" /> | <strong>${nameWithEscapedPipe}</strong> | <a href="https://novu.co/contributors/${github}" target="_blank" rel="noopener noreferrer">${github}</a> | <div>${medals}</div> |\n`;
  }

  return tableMarkup;
};

const pushChangesToTargetRepo = () => {
  const watcher = fs.watch('./target-repo', (eventType, filename) => {
    if (filename === 'README.md') {
      // File created, stop watching and perform operations
      watcher.close();
      execSync('git add README.md', { cwd: './target-repo' });

      // Commit the changes
      execSync('git commit -m "Update README.md"', { cwd: './target-repo' });

      // Push the changes to the repository
      execSync('git push origin main', { cwd: './target-repo' });

      console.log('Changes pushed to target repository successfully!');
    }
  });
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
      const data = await fetch(`https://contributors.novu.co/contributors`).then((response) =>
        response.json()
      );

      const contributors = data.list.filter(
        ({ totalPulls, teammate }) => totalPulls > 0 && !teammate
      );

      const contributorsWithPulls = await Promise.all(
        contributors.map(async (contributor) => {
          const { pulls } = await fetch(
            `https://contributors.novu.co/contributor/${contributor.github}`
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

          return `<img src="${image}" width="60" height="60" alt="${title}" />`;
        });

        return {
          photo: `https://avatars.githubusercontent.com/${github}?v=3&s=60`,
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

  const isRepoCloned = fs.existsSync(`./target-repo`);

  // Fetch the README.md content from GitHub API
  await fetchReadmeContent(repoOwner, repoName)
    .then(async (readmeContent) => {
      if (readmeContent) {
        // Change the content of the README.md file
        const modifiedContent = await changeReadmeContent(readmeContent);

        try {
          if (isRepoCloned) {
            fs.writeFileSync('./target-repo/README.md', modifiedContent, 'utf8');
            pushChangesToTargetRepo();
          } else {
            // Clone the target repository
            execSync(`git clone https://github.com/${repoOwner}/${repoName}.git target-repo`);
            fs.writeFileSync('./target-repo/README.md', modifiedContent, 'utf8');

            pushChangesToTargetRepo();

            console.log('Changes pushed to target repository successfully!');
          }
        } catch (error) {
          console.error('Error pushing changes to target repository:', error);
        } finally {
          // Clean up temporary files
          execSync('rm -rf target-repo', { cwd: __dirname });
        }
      }
    })
    .catch((error) => {
      console.error('Error fetching README.md:', error);
    });
};
