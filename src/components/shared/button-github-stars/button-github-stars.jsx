import clsx from 'clsx';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import GitHubIcon from 'icons/github.inline.svg';
// eslint-disable-next-line import/no-named-as-default
import buttonClick from 'utils/use-landing-simple-tracking';

const ButtonGithubStars = ({ className, size }) => {
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
      className={clsx('group', size === 'small' && 'border-0 !px-0', className)}
      size="xs"
      theme="gray-outline"
      to={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={buttonClick('github_star', { type: 'menu' })}
    >
      <GitHubIcon className="mr-2 h-[26px] w-[26px]" />
      {size === 'large' && <span className="lg:hidden">Star us</span>}
      <span
        className={clsx(
          'flex items-center',
          size === 'large' &&
            'before:mx-2.5 before:h-[18px] before:w-px before:bg-gray-4 before:transition-colors before:duration-200 group-hover:before:bg-gray-5'
        )}
        aria-label={`${count} stars on Github`}
      >
        {`${(count / 1000).toFixed(1)}k`}
      </span>
    </Button>
  );
};

ButtonGithubStars.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['large', 'small']),
};

ButtonGithubStars.defaultProps = {
  className: null,
  size: 'large',
};

export default ButtonGithubStars;
