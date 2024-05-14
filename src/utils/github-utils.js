const { Octokit } = require('@octokit/rest');

const octokit = new Octokit({
  auth: process.env.GITHUB_README_TOKEN,
});

const fetchCommitCount = async (owner, repo) => {
  try {
    const response = await octokit.rest.repos.listCommits({
      owner,
      repo,
      per_page: 1,
    });

    const linkHeader = response.headers.link;
    if (!linkHeader) {
      return response.data.length;
    }

    const lastPageMatch = linkHeader.match(/&page=(\d+)>; rel="last"/);
    const lastPageNumber = lastPageMatch ? parseInt(lastPageMatch[1], 10) : 1;

    return lastPageNumber;
  } catch (error) {
    console.error(`Error fetching commit count for repo ${owner}/${repo}:`, error);
    return null;
  }
};

const getGithubPaginatedData = async (prefix) => {
  let page = 1;
  let result = [];
  while (true) {
    const batch = await octokit.request(`GET ${prefix}per_page=100&page=${page}`);
    if (batch.data.length === 0) {
      break; // No more pull requests to fetch
    }
    result = result.concat(batch.data);
    page += 1;
  }
  return result;
};

module.exports = {
  octokit,
  fetchCommitCount,
  getGithubPaginatedData,
};
