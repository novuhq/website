/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs').promises;

const { Octokit } = require('@octokit/rest');
const fetch = require('node-fetch');

const { ACHIEVEMENTS } = require('../constants/contributors');

const MEDAL_WIDTH = '34';
const IMAGE_SIZE = '40';

const octokit = new Octokit({
  auth: process.env.GITHUB_README_TOKEN,
});

const generateTableMarkup = (tableData) => {
  let tableMarkup = '| Photo | Name | Profile | Medals |\n';
  tableMarkup += '| ----- | ------ | ------ | ------ |\n';

  // Loop through the data array and generate table rows
  for (const item of tableData) {
    const { photo, github, name, medals } = item;

    const nameWithEscapedPipe = name.replace(/\|/g, '\\|');

    tableMarkup += `| <img style="border-radius:100%" src="${photo}" width="${IMAGE_SIZE}" height="${IMAGE_SIZE}" alt="${github}" /> | <strong>${nameWithEscapedPipe}</strong> | <a href="https://novu.co/contributors/${github}" target="_blank" rel="noopener noreferrer">${github}</a> | <div>${medals}</div> |\n`;
  }

  return tableMarkup;
};

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

    return contributorsWithPulls.sort((a, b) => b.pulls.length - a.pulls.length);
  } catch (error) {
    console.error('Error fetching contributors data:', error);
    return null;
  }
};

const getContributorsWithAllAchievements = async (contributorsWithAdditionalAchievements) => {
  const contributors = await fetchContributorsData();

  const contributorsWithAllAchievements = contributors
    .map((contributor) => {
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
    })
    .sort((a, b) => b.achievements.length - a.achievements.length);

  return contributorsWithAllAchievements.map(({ name, github, achievements }) => {
    const medals = achievements.map((achievement) => {
      const { image, title } = achievement;

      const width =
        title === 'Gold Medal' || title === 'Silver Medal' || title === 'Bronze Medal'
          ? MEDAL_WIDTH
          : IMAGE_SIZE;

      return `<img src="${image}" width="${width}" height="${IMAGE_SIZE}" alt="${title}" />`;
    });

    return {
      photo: `https://avatars.githubusercontent.com/${github}?v=3&s=${IMAGE_SIZE}`,
      name: name || github,
      github,
      medals: medals.length > 0 ? medals.map((medal) => medal).join(' ') : '',
    };
  });
};

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

const changeReadmeContent = async (readmeContent, contributorsWithAdditionalAchievements) => {
  const headingToFind = '## 🦸 Community Heroes';

  const data = await getContributorsWithAllAchievements(contributorsWithAdditionalAchievements);

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

async function getCache() {
  try {
    const data = await fs.readFile('community-heroes-cache.json', 'utf-8');
    return JSON.parse(data).hash;
  } catch (error) {
    // Ignore errors - cache may not exist yet
    return null;
  }
}

async function setCache(hash) {
  await fs.writeFile('community-heroes-cache.json', JSON.stringify({ hash }));
}

module.exports = {
  octokit,
  fetchReadmeContent,
  changeReadmeContent,
  getCache,
  setCache,
};
