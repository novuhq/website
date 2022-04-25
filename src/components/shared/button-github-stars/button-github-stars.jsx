import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import GitHubLogo from 'images/logo-github.inline.svg';

import Button from '../button';

const ButtonGithubStars = ({ className }) => {
  const {
    github: { url, count },
  } = useStaticQuery(graphql`
    query githubQuery {
      github {
        url
        count
      }
    }
  `);

  return (
    <Button
      className={className}
      size="xs"
      theme="gray-outline"
      to={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <GitHubLogo className="mr-2 h-[26px] w-[26px]" />
      <span>Star us</span>
      <span
        className="flex items-center before:mx-2.5 before:h-[18px] before:w-px before:bg-gray-4"
        aria-label={`${count} stars on Github`}
      >
        {`${(count / 1000).toFixed(1)}k`}
      </span>
    </Button>
  );
};

ButtonGithubStars.propTypes = {
  className: PropTypes.string,
};

ButtonGithubStars.defaultProps = {
  className: null,
};

export default ButtonGithubStars;
