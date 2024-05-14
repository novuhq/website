const { octokit } = require('./github-utils');

const getIssueType = (title) => {
  if (title.includes('Bug Report:')) return 'bug';
  if (title.includes('Feature:')) return 'feature';
  if (title.includes('Docs Feedback:')) return 'docs feedback';
  return null;
};

const fetchRepositories = async () => {
  const { data: repositories } = await octokit.rest.repos.listForOrg({
    org: 'novuhq',
    type: 'public',
    per_page: 100,
  });
  return repositories;
};

const fetchIssuesForRepo = async (repo) => {
  const { data: issues } = await octokit.rest.issues.listForRepo({
    owner: repo.owner.login,
    repo: repo.name,
    labels: 'help wanted',
    state: 'open',
    per_page: 100,
  });
  return issues;
};

const fetchContributorsAndMembers = async () => {
  const [contributors, members] = await Promise.all([
    octokit.request(`GET /repos/novuhq/novu/contributors?per_page=100`, {
      headers: { 'X-GitHub-Api-Version': '2022-11-28' },
    }),
    octokit.request(`GET /orgs/novuhq/members?per_page=100`, {
      headers: { 'X-GitHub-Api-Version': '2022-11-28' },
    }),
  ]);

  if (contributors.status !== 200 || members.status !== 200) {
    throw new Error('Failed to fetch GitHub contributors or members');
  }

  return { contributors: contributors.data, members: members.data };
};

module.exports = {
  fetchContributorsAndMembers,
  fetchIssuesForRepo,
  fetchRepositories,
  getIssueType,
};
