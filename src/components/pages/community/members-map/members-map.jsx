import clsx from 'clsx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

import bg from './images/bg.svg';

const TITLE = 'The power of open source community';
const BUTTON_TEXT = 'View All Contributors';

const AVATAR_SIZES = {
  sm: {
    className: 'h-14',
    width: 56,
    height: 56,
  },
  md: {
    className: 'h-[72px]',
    width: 72,
    height: 72,
  },
  lg: {
    className: 'h-[92px]',
    width: 92,
    height: 92,
  },
};

const AVARS_STYLES = [
  { className: 'left-[62.75%] top-[31.75%]', size: 'lg' },
  { className: 'left-[21.25%] top-[48.75%]', size: 'lg' },
  { className: 'left-[40.5%] top-[69.6%]', size: 'lg' },
  { className: 'left-[72.5%] top-[69.25%]', size: 'lg' },
  { className: 'left-[45%] top-[33%]', size: 'md' },
  { className: 'left-[12.25%] top-[37.75%]', size: 'md' },
  { className: 'left-[70.75%] top-[49%]', size: 'md' },
  { className: 'left-[85%] top-[40%]', size: 'md' },
  { className: 'left-[19.75%] top-[71.25%]', size: 'md' },
  { className: 'left-[33%] top-[35.75%]', size: 'sm' },
  { className: 'left-[31.5%] top-[57.5%]', size: 'sm' },
  { className: 'left-[54.5%] top-[23.5%]', size: 'sm' },
  { className: 'left-[63%] top-[62.25%]', size: 'sm' },
  { className: 'left-[22%] top-[24.8%]', size: 'sm' },
  { className: 'left-[52.5%] top-[74.75%]', size: 'sm' },
  { className: 'left-[30.75%] top-[76%]', size: 'sm' },
  { className: 'left-[75.75%] top-[27.25%]', size: 'sm' },
  { className: 'left-[82.75%] top-[57.25%]', size: 'sm' },
  { className: 'left-[33.75%] top-[19.5%]', size: 'sm' },
  { className: 'left-[11%] top-[60.5%]', size: 'sm' },
  { className: 'left-[63.75%] top-[77%]', size: 'sm' },
  { className: 'left-[83.25%] top-[72.5%]', size: 'sm' },
];

const Avatar = ({ size, login, avatar_url: avatarUrl, contributions }) => {
  const { className, width, height } = AVATAR_SIZES[size];
  return (
    <>
      <div className="relative">
        <GatsbyImage
          className="w-full"
          imgClassName="rounded-lg"
          image={getImage(avatarUrl)}
          alt={login}
        />
        <img
          className={clsx(
            'relative z-10 border rounded-full bg-gray-9 w-auto saturate-0',
            className
          )}
          src={avatarUrl}
          alt={login}
          width={width}
          height={height}
          loading="lazy"
        />
        <span className="absolute -inset-2 border-4 border-white border-opacity-10 bg-white bg-opacity-50 rounded-full mix-blend-overlay" />
      </div>
      <span className="mt-2.5 text-primary-1 leading-tight text-xs whitespace-nowrap">{login}</span>
      <span className="text-white font-light leading-tight opacity-70 text-[10px] whitespace-nowrap">
        {contributions} commits
      </span>
    </>
  );
};

const MembersMap = ({ items }) => (
  <section className="members-map safe-paddings -mt-14 relative overflow-hidden">
    <div className="container absolute left-1/2 -translate-x-1/2 top-[46.25%] flex flex-col items-center z-10">
      <Heading
        className="relative z-10 font-medium text-center max-w-lg mx-auto tracking-normal leading-tight"
        size="xl"
        tag="h2"
        theme="white"
      >
        {TITLE}
      </Heading>
      <Button
        className="relative h-12 px-6 z-10 mt-7 text-[13px] !tracking-normal text-center mx-auto"
        theme="gray-outline"
      >
        {BUTTON_TEXT}
      </Button>
    </div>
    <div className="w-[1920px] relative left-1/2 -translate-x-1/2 [mask-image:radial-gradient(65%_38%_at_50%_52%,black,black_55%,transparent)]">
      <img
        className="relative z-0 top-0 left-0 w-full max-w-none shrink-0"
        src={bg}
        width={1920}
        height={1219}
        alt=""
        loading="lazy"
        aria-hidden
      />
      <ul className="absolute inset-0 z-0">
        {items.slice(0, 22).map((contributor, index) => {
          const { size, className } = AVARS_STYLES[index];
          return (
            <li
              className={clsx(
                'flex flex-col items-center absolute',
                className,
                size === 'lg' && 'w-24',
                size === 'md' && 'w-[72px]',
                size === 'sm' && 'w-14'
              )}
              key={contributor.id}
            >
              <Avatar size={size} {...contributor} />
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

MembersMap.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      login: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired,
      site_admin: PropTypes.bool.isRequired,
      contributions: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default MembersMap;
