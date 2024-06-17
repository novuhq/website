const { Octokit } = require('@octokit/rest');

const octokit = new Octokit({
  auth: process.env.GITHUB_README_TOKEN,
});

const fetchAllRepositories = async (owner) => {
  const { data: repositories } = await octokit.rest.repos.listForOrg({
    org: owner,
    type: 'public',
    per_page: 100,
  });
  return repositories;
};

const getLastPageNumber = (response) => {
  const linkHeader = response.headers.link;
  if (!linkHeader) {
    return response.data.length;
  }

  const lastPageMatch = linkHeader.match(/&page=(\d+)>; rel="last"/);

  return lastPageMatch ? parseInt(lastPageMatch[1], 10) : 1;
};

const fetchCount = async (apiMethod, type, params) => {
  const { owner, repo } = params;
  try {
    const response = await apiMethod(params);
    const lastPageNumber = getLastPageNumber(response);

    return lastPageNumber;
  } catch (error) {
    console.error(`Error fetching ${type} from ${owner}/${repo} count:`, error);
    return null;
  }
};

const fetchCommitCount = async (owner, repo) =>
  fetchCount(octokit.rest.repos.listCommits, 'commits', { owner, repo, per_page: 1 });

const fetchClosedIssuesCount = async (owner, repo) =>
  fetchCount(octokit.rest.issues.listForRepo, 'issues', {
    owner,
    repo,
    state: 'closed',
    per_page: 1,
  });

const fetchPullRequestCount = async (owner, repo, state) =>
  fetchCount(octokit.rest.pulls.list, 'pull requests', { owner, repo, state, per_page: 1 });

module.exports = {
  octokit,
  fetchCommitCount,
  fetchClosedIssuesCount,
  fetchAllRepositories,
  fetchPullRequestCount,
};
