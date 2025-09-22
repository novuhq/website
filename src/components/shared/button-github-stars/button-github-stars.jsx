import clsx from 'clsx';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import GITHUB from 'constants/github';
import GitHubIcon from 'icons/github.inline.svg';
// eslint-disable-next-line import/no-named-as-default
import buttonClick from 'utils/use-landing-simple-tracking';

const ButtonGithubStars = ({ className = null, size = 'large' }) => {
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
        size === 'small' && '!h-auto !px-0 !text-sm hover:text-gray-9 focus-visible:text-gray-9',
        className
      )}
      size="xs"
      theme={size === 'large' ? 'gray-outline' : null}
      to="https://git.new/novu?utm_campaign=website"
      target="_blank"
      rel="noopener noreferrer"
      onClick={buttonClick('github_star', { type: 'menu' })}
    >
      <GitHubIcon
        className={size === 'small' ? 'mr-2 size-6 [&_path]:fill-current' : 'mr-2 size-[26px]'}
      />
      {size === 'large' && <span className="lg:hidden">Star us</span>}
      <span
        className={clsx(
          'flex items-center',
          size === 'large' &&
            'before:mx-2.5 before:h-[18px] before:w-px before:bg-gray-4 before:transition-colors before:duration-200 group-hover:before:bg-gray-5'
        )}
        aria-label={`${count} stars on GitHub`}
      >
        {`${(count / 1000).toFixed(1)}k`}
      </span>
    </Button>
  );
};

ButtonGithubStars.propTypes = {
  // eslint-disable-next-line react/require-default-props
  className: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  size: PropTypes.oneOf(['large', 'small']),
};

export default ButtonGithubStars;
