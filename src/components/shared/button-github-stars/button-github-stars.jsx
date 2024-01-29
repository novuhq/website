import clsx from 'clsx';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import GitHubIcon from 'icons/github.inline.svg';

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
      className={clsx('group', className)}
      size="xs"
      theme="gray-outline"
      to={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <GitHubIcon className="mr-2 h-[26px] w-[26px]" />
      <span className="lg:hidden">Star us</span>
      <span
        className="flex items-center before:mx-2.5 before:h-[18px] before:w-px before:bg-gray-4 before:transition-colors before:duration-200 group-hover:before:bg-gray-5"
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
