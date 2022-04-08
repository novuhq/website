import { useEffect, useState } from 'react';

import GITHUB from 'constants/github';

export default function useGithubRepoStars(username, repoName) {
  const [githubStars, setGithubStars] = useState();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      fetch(`${GITHUB.apiUrl}/${username}/${repoName}`)
        .then((response) => response.json())
        .then(({ stargazers_count }) =>
          setGithubStars(new Intl.NumberFormat('en-US').format(stargazers_count))
        );
    }
  }, [username, repoName]);

  return githubStars;
}
