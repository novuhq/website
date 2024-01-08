import EmojiConvertor from 'emoji-js';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import GitHubIcon from 'icons/github.inline.svg';
import TwitterIcon from 'icons/twitter.inline.svg';

import LinkIcon from './images/link.inline.svg';
import LocationIcon from './images/location.inline.svg';

import './profile.css';

const emoji = new EmojiConvertor();

const Profile = ({ contributor }) => (
  <div className="profile sticky top-10 col-span-4 max-w-[312px] rounded-[20px] bg-gradient-to-b from-gray-2 to-[rgba(26,26,26,0.7)] px-5 pb-6 pt-10 md:static md:flex md:w-full md:max-w-none md:px-10 sm:flex-col sm:p-5">
    <div className="profile-avatar group relative mx-auto flex h-[232px] w-[232px] flex-shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-border md:mx-0 md:mr-10 sm:mx-auto">
      <img
        className="z-10 rounded-full grayscale transition-all duration-200 group-hover:grayscale-0"
        src={`https://avatars.githubusercontent.com/${contributor.github}?v=3`}
        height={192}
        width={192}
        loading="eager"
        alt={contributor.name || `@${contributor.github}`}
      />
    </div>
    <div className="mt-3 w-full md:mt-0 sm:mt-3">
      <Heading
        className="text-center font-medium leading-tight md:text-left sm:text-center"
        tag="h1"
        size="xs"
        theme="white"
      >
        {contributor.name || `@${contributor.github}`}
      </Heading>
      <span className="mt-0.5 block text-center text-lg leading-tight text-primary-1 md:text-left sm:text-center">
        {contributor.name ? contributor.github : ''}
      </span>

      <p
        className="mt-4 text-base font-light sm:text-center"
        dangerouslySetInnerHTML={{ __html: emoji.replace_colons(contributor.bio || '') }}
      />

      <div className="mt-3 space-y-1.5 md:flex md:gap-x-5 md:gap-y-1.5 md:space-y-0 sm:flex-wrap sm:justify-center">
        {!!contributor.location && contributor.location !== 'undefined' && (
          <span className="flex text-sm leading-denser">
            <LocationIcon className="mr-1.5 h-4" />
            {contributor.location}
          </span>
        )}
        {!!contributor.url && (
          <Link
            className="flex text-sm leading-denser"
            to={contributor.url.startsWith('http') ? contributor.url : `https://${contributor.url}`}
            target="__blank"
            theme="white"
          >
            <LinkIcon className="mr-1.5 h-4 flex-shrink-0" />
            {contributor.url}
          </Link>
        )}
      </div>

      <div className="mt-6 flex justify-center space-x-4 border-t border-dashed border-gray-5 pt-6 md:justify-start sm:justify-center">
        {!!contributor.github && (
          <Link
            className="transition-opacity duration-200 hover:opacity-80"
            to={`https://github.com/${contributor.github}`}
            target="__blank"
          >
            <GitHubIcon className="h-8" />
          </Link>
        )}
        {!!contributor.twitter && (
          <Link
            className="transition-opacity duration-200 hover:opacity-80"
            to={`https://twitter.com/${contributor.twitter}`}
            target="__blank"
          >
            <TwitterIcon className="h-8" />
          </Link>
        )}
      </div>
    </div>
  </div>
);

Profile.propTypes = {
  contributor: PropTypes.shape({
    bio: PropTypes.string,
    github: PropTypes.string,
    location: PropTypes.string,
    name: PropTypes.string,
    twitter: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default Profile;
