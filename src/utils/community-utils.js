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

const fetchAllContributorsWithoutMembers = async () => {
  const [membersResponse, reposResponse] = await Promise.all([
    octokit.rest.orgs.listMembers({
      org: 'novuhq',
      per_page: 100,
    }),
    octokit.rest.repos.listForOrg({
      org: 'novuhq',
      type: 'public',
      per_page: 100,
    }),
  ]);

  if (membersResponse.status !== 200) {
    throw new Error('Failed to fetch GitHub members');
  }

  if (reposResponse.status !== 200) {
    throw new Error('Failed to fetch GitHub repositories');
  }

  const membersList = membersResponse.data
    .map((member) => member.login)
    .concat([
      'ainouzgali',
      'AliaksandrRyzhou',
      'americano98',
      'andrewgolovanov',
      'antonjoel82',
      'BiswaViraj',
      'ChmaraX',
      'Cliftonz',
      'ComBarnea',
      'davidsoderberg',
      'denis-kralj-novu',
      'djabarovgeorge',
      'iampearceman',
      'jainpawan21',
      'justnems',
      'LetItRock',
      'rgozdzialski',
      'rifont',
      'sashasushko',
      'scopsy',
      'SokratisVidros',
      'stephenward21',
      'sumitsaurabh927',
      'tatarco',
      'unicodeveloper',
      'yasell',
    ]);

  const repos = reposResponse.data;

  const contributorPromises = repos.map((repo) =>
    octokit
      .request(`GET /repos/${repo.full_name}/contributors?per_page=100`, {
        headers: { 'X-GitHub-Api-Version': '2022-11-28' },
      })
      .then((contributorsResponse) => {
        if (contributorsResponse.status !== 200) {
          throw new Error(`Failed to fetch contributors for repository ${repo.full_name}`);
        }

        return contributorsResponse.data;
      })
  );

  const contributorsArrays = await Promise.all(contributorPromises);

  const allContributors = contributorsArrays.flat().reduce((acc, contributor) => {
    if (!membersList.includes(contributor.login) && contributor.type !== 'Bot') {
      if (!acc[contributor.login]) {
        acc[contributor.login] = {
          login: contributor.login,
          avatarUrl: contributor.avatar_url,
          contributions: 0,
        };
      }
      acc[contributor.login].contributions += contributor.contributions;
    }
    return acc;
  }, {});

  return Object.values(allContributors);
};

module.exports = {
  fetchAllContributorsWithoutMembers,
  fetchIssuesForRepo,
  fetchRepositories,
  getIssueType,
};
