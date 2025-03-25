import clsx from 'clsx';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import GITHUB from 'constants/github';
import GitHubIcon from 'icons/github.inline.svg';
// eslint-disable-next-line import/no-named-as-default
import buttonClick from 'utils/use-landing-simple-tracking';

const ButtonGithubStars = ({ className, size }) => {
  const {
    github: { count = GITHUB.count },
  } = useStaticQuery(graphql`
    query githubQuery {
      github {
        count
      }
    }
  `);

  return (
    <Button
      className={clsx(
        'group',
        size === 'small' && 'border-0 !px-0 hover:text-gray-9 hover:after:opacity-0',
        className
      )}
      size="xs"
      theme="gray-outline"
      to="https://git.new/novu?utm_campaign=website"
      target="_blank"
      rel="noopener noreferrer"
      onClick={buttonClick('github_star', { type: 'menu' })}
    >
      <GitHubIcon
        className={clsx(
          'mr-2 h-[26px] w-[26px] [&_path]:transition-colors',
          size === 'small' && '[&_path]:duration-200 group-hover:[&_path]:fill-gray-9'
        )}
      />
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
