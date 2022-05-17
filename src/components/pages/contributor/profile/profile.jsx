import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import GitHubIcon from 'icons/github.inline.svg';
import TwitterIcon from 'icons/twitter.inline.svg';

import avatar from './images/avatar.jpeg';
import LinkIcon from './images/link.inline.svg';
import LocationIcon from './images/location.inline.svg';

import './profile.css';

const NAME = 'Dima Grossman';
const USER_NAME = 'scopsy';
const BIO = 'Creator of Novu 🚀 - The open-source notification infrastructure';
const LOCATION = 'Tel Aviv';
const WEBSITE = 'http://blog.grossman.io';
const GITHUB_URL = 'https://github.com/scopsy';
const TWITTER_URL = 'https://twitter.com/dimagrossman';

const Profile = () => (
  <div className="profile sticky top-10 col-span-4 max-w-[312px] rounded-[20px] bg-gradient-to-b from-gray-2 to-[rgba(26,26,26,0.7)] px-5 pt-10 pb-6">
    <div className="profile-avatar">
      <img
        className="z-10 rounded-full grayscale"
        src={avatar}
        height={192}
        width={192}
        loading="eager"
        alt={NAME}
      />
    </div>
    <Heading className="mt-3 text-center font-medium leading-tight" tag="h1" size="xs">
      {NAME}
    </Heading>
    <span className="mt-0.5 block text-center text-lg leading-tight text-primary-1">
      {USER_NAME}
    </span>

    <p className="mt-4 text-base font-light">{BIO}</p>
    <div className="mt-3 space-y-1.5">
      <span className="flex text-sm leading-denser">
        <LocationIcon className="mr-1.5 h-4" />
        {LOCATION}
      </span>
      <Link className="flex text-sm leading-denser" to={WEBSITE} target="__blank" theme="white">
        <LinkIcon className="mr-1.5 h-4" />
        {WEBSITE.replace(/^https?:\/\//, '')}
      </Link>
    </div>

    <div className="mt-6 flex justify-center space-x-4 border-t border-dashed border-gray-5 pt-6">
      <Link
        className="transition-opacity duration-200 hover:opacity-80"
        to={GITHUB_URL}
        target="__blank"
      >
        <GitHubIcon className="h-8" />
      </Link>
      <Link
        className="transition-opacity duration-200 hover:opacity-80"
        to={TWITTER_URL}
        target="__blank"
      >
        <TwitterIcon className="h-8" />
      </Link>
    </div>
  </div>
);

export default Profile;
