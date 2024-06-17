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

const fetchIssuesWithLabels = async (repo, requiredLabels) => {
  const issues = await Promise.all(
    requiredLabels.map(async (label) => {
      const { data } = await octokit.rest.issues.listForRepo({
        owner: repo.owner.login,
        repo: repo.name,
        labels: label,
        state: 'open',
        per_page: 100,
      });
      return data;
    })
  );

  const uniqueIssues = new Map();
  issues.flat().forEach((issue) => {
    uniqueIssues.set(issue.id, issue);
  });

  return Array.from(uniqueIssues.values()).sort((a, b) => b.id - a.id);
};

async function fetchAllContributors(repoFullName) {
  let allContributors = [];
  let page = 1;
  let hasMoreContributors = true;

  while (hasMoreContributors) {
    const contributorsResponse = await octokit.request(`GET /repos/${repoFullName}/contributors`, {
      headers: { 'X-GitHub-Api-Version': '2022-11-28' },
      per_page: 100,
      page,
    });

    if (contributorsResponse.status !== 200) {
      throw new Error(`Failed to fetch contributors for repository ${repoFullName}`);
    }

    const contributors = contributorsResponse.data;
    allContributors = allContributors.concat(contributors);

    if (contributors.length < 100) {
      hasMoreContributors = false;
    } else {
      page++;
    }
  }

  return allContributors;
}

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

  const contributorPromises = repos.map((repo) => fetchAllContributors(repo.full_name));

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

const sortRepositories = (a, b) => {
  const priorityOrder = ['novu', 'docs', 'examples'];
  const indexA = priorityOrder.indexOf(a.name);
  const indexB = priorityOrder.indexOf(b.name);

  if (indexA !== -1 && indexB !== -1) {
    return indexA - indexB;
  }
  if (indexA !== -1) {
    return -1;
  }
  if (indexB !== -1) {
    return 1;
  }
  return 0;
};

module.exports = {
  fetchAllContributorsWithoutMembers,
  sortRepositories,
  fetchIssuesWithLabels,
  fetchRepositories,
  getIssueType,
};
