import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

import bgMd from './images/bg-md.svg';
import bg from './images/bg.svg';

const TITLE = 'The power of open source community';
const BUTTON_TEXT = 'View All Contributors';

const AVATAR_SIZES = {
  sm: {
    className: 'h-14 xl:h-12 md:h-[38px] md:h-8',
    width: 56,
    height: 56,
  },
  md: {
    className: 'h-[72px] xl:h-14 md:h-12 sm:h-10',
    width: 72,
    height: 72,
  },
  lg: {
    className: 'h-[92px] xl:h-[82px] md:h-[63px] sm:h-[52px]',
    width: 92,
    height: 92,
  },
};

const AVATARS_LIGHTS = {
  blue: {
    className: 'bg-[#97E0FF] border-[#97E0FF]',
    defaultBorderClassName: 'bg-[#58E3FF] bg-opacity-70',
  },
  pink: {
    className: 'bg-[#FF97F5] border-[#FF97F5]',
    defaultBorderClassName: 'bg-[#FBBAEA] bg-opacity-70',
  },
};

const AVARS_STYLES = [
  {
    className: 'left-[62.75%] top-[31.75%] md:left-[63%] md:top-[31.5%]',
    size: 'lg',
    lightsTheme: 'pink',
  },
  {
    className: 'left-[21.25%] top-[48.75%] md:left-[15.2%] md:top-[50.5%]',
    size: 'lg',
    lightsTheme: 'blue',
  },
  {
    className: 'left-[40.5%] top-[69.6%] md:left-[36%] md:top-[74.3%]',
    size: 'lg',
    lightsTheme: 'blue',
  },
  {
    className: 'left-[72.5%] top-[69.25%] md:left-[74.5%] md:top-[74.2%]',
    borderClassName:
      'bg-[radial-gradient(97%_97%_at_39.58%_3%,#F675D5_0%,_rgba(251,186,234,.7)_50%,rgba(255,255,255,.4)_100%)]',
    size: 'lg',
    lightsTheme: 'pink',
  },
  {
    className: 'left-[45%] top-[33%] md:left-[41.5%] md:top-[28%]',
    size: 'md',
    lightsTheme: 'blue',
  },
  {
    className: 'left-[12.25%] top-[37.75%] md:left-[15%] md:top-[21%]',
    borderClassName:
      'bg-[radial-gradient(100%_100%_at_100%_78%,_#FFFFFF_0%,rgba(0,213,255,.4)_100%)]',
    size: 'md',
    lightsTheme: 'blue',
  },
  {
    className: 'left-[70.75%] top-[49%] md:left-[77.75%] md:top-[49.25%]',
    borderClassName:
      'bg-[radial-gradient(91%_91%_at_81%_88%,#F675D5_0%,rgba(255,255,255,.4)_100%)]',
    size: 'md',
    lightsTheme: 'pink',
  },
  {
    className: 'left-[85%] top-[40%] md:left-[65%] md:top-[83.25%]',
    borderClassName:
      'bg-[radial-gradient(86%_86%_at_15%_86%,_rgba(246,117,213,.7)_0%,rgba(255,255,255,.4)_100%)]',
    size: 'md',
    lightsTheme: 'pink',
  },
  {
    className: 'left-[19.75%] top-[71.25%] md:left-[13.5%] md:top-[69.75%]',
    borderClassName: 'bg-[radial-gradient(97%_97%_at_67%_3%,#FFFFFF_0%,rgba(0,213,255,.4)_100%)]',
    size: 'md',
    lightsTheme: 'blue',
  },
  {
    className: 'left-[33%] top-[35.75%] md:left-[27.4%] md:top-[33.8%]',
    borderClassName: 'bg-[radial-gradient(94%_94%_at_19%_94%,#FFFFFF_0%,rgba(0,213,255,.4)_100%)]',
    size: 'sm',
    lightsTheme: 'blue',
  },
  {
    className: 'left-[31.5%] top-[57.5%] md:left-[27%] md:top-[61.5%]',
    borderClassName: 'bg-[radial-gradient(94%_94%_at_27%_5%,#FFFFFF_0%,rgba(0,213,255,.4)_100%)]',
    size: 'sm',
    lightsTheme: 'blue',
  },
  {
    className: 'left-[54.5%] top-[23.5%] md:left-[54.3%] md:top-[17.75%]',
    size: 'sm',
    lightsTheme: 'blue',
  },
  {
    className: 'left-[63%] top-[62.25%] md:left-2/3 md:top-[63.25%]',
    borderClassName:
      'bg-[radial-gradient(104%_104%_at_100%_58%,#F675D5_0%,rgba(255,255,255,.4)_100%)]',
    size: 'sm',
    lightsTheme: 'pink',
  },
  {
    className: 'left-[22%] top-[24.8%] md:left-[34.25%] md:top-[12.75%]',
    size: 'sm',
    lightsTheme: 'blue',
  },
  {
    className: 'left-[52.5%] top-[74.75%] md:left-[52%] md:top-[84.25%]',
    size: 'sm',
    lightsTheme: 'pink',
  },
  {
    className: 'left-[30.75%] top-[76%] md:left-[24.5%] md:top-[82.5%]',
    size: 'sm',
    lightsTheme: 'blue',
  },
  {
    className: 'left-[75.75%] top-[27.25%] md:top-[25.75%] md:left-[79.2%]',
    size: 'sm',
    lightsTheme: 'pink',
  },
  { className: 'left-[82.75%] top-[57.25%]', size: 'sm', lightsTheme: 'pink' },
  { className: 'left-[33.75%] top-[19.5%]', size: 'sm', lightsTheme: 'blue' },
  {
    className: 'left-[11%] top-[60.5%]',
    size: 'sm',
    lightsTheme: 'blue',
    borderClassName:
      'bg-[radial-gradient(100%_100%_at_100%_24%,#FFFFFF_0%,rgba(0,213,255,.4)_100%)]',
  },
  { className: 'left-[63.75%] top-[77%]', size: 'sm', lightsTheme: 'pink', borderClassName: '' },
  { className: 'left-[83.25%] top-[72.5%]', size: 'sm', lightsTheme: 'pink', borderClassName: '' },
];

const Avatar = ({
  borderClassName,
  size,
  login,
  avatar_url: avatarUrl,
  contributions,
  lightsTheme,
}) => {
  const { className, width, height } = AVATAR_SIZES[size];
  return (
    <>
      <div
        className={clsx(
          'relative rounded-full p-px',
          borderClassName || lightsTheme.defaultBorderClassName
        )}
      >
        <img
          className={clsx('relative z-10 rounded-full w-auto saturate-0', className)}
          src={avatarUrl}
          alt={login}
          width={width}
          height={height}
          loading="lazy"
        />
        <span
          className={clsx(
            'absolute -inset-2 bg-opacity-[0.06] p-1 rounded-full xl:-inset-1.5 md:p-0.5 md:-inset-1',
            lightsTheme.className
          )}
        >
          <span
            className={clsx(
              'flex items-center justify-center h-full w-full rounded-full bg-opacity-[0.18]',
              lightsTheme.className
            )}
          />
        </span>
      </div>
      <span className="mt-2.5 text-primary-1 leading-tight text-xs whitespace-nowrap xl:text-[10px] md:text-[8px] md:mt-1.5 sm:text-[7px]">
        {login}
      </span>
      <span className="text-white font-light leading-tight opacity-70 text-[10px] whitespace-nowrap xl:text-[8px] md:text-[7px] sm:text-[6px]">
        {contributions} commits
      </span>
    </>
  );
};

const MembersMap = ({ items }) => (
  <section className="members-map safe-paddings -mt-16 relative overflow-hidden xl:mt-0 md:mt-11">
    <div className="container absolute left-1/2 -translate-x-1/2 top-[46.25%] flex flex-col items-center z-10 sm:top-[46.75%]">
      <Heading
        className="relative z-10 font-medium text-center max-w-lg mx-auto tracking-normal leading-tight xl:max-w-md xl:text-5xl md:max-w-sm md:text-[32px] sm:text-2xl sm:leading-denser"
        size="xl"
        tag="h2"
        theme="white"
      >
        {TITLE}
      </Heading>
      <Button
        className="relative h-12 px-6 z-10 mt-7 text-[13px] !tracking-normal text-center mx-auto md:h-11 md:mt-7 sm:mt-5 sm:h-10 sm:px-5"
        to="https://github.com/novuhq/novu/graphs/contributors"
        theme="gray-outline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {BUTTON_TEXT}
      </Button>
    </div>
    <div className="w-[1920px] relative left-1/2 -translate-x-1/2 [mask-image:radial-gradient(65%_38%_at_50%_52%,black,black_55%,transparent)] xl:w-[1560px] xl:-top-2 lg:[mask-image:radial-gradient(57%_63%_at_50%_52%,black,black_35%,transparent_70%,transparent)] md:aspect-[1.5193] md:w-[1024px] md:[mask-image:radial-gradient(53%_63%_at_50%_52%,black,black_56%,transparent_86%,transparent)] sm:w-[800px]">
      <img
        className="relative z-0 top-0 left-0 w-full max-w-none shrink-0 md:hidden"
        src={bg}
        width={1920}
        height={1219}
        alt=""
        loading="lazy"
        aria-hidden
      />
      <img
        className="relative z-0 top-0 left-0 w-full max-w-none shrink-0 hidden md:block"
        src={bgMd}
        width={1024}
        height={674}
        alt=""
        loading="lazy"
        aria-hidden
      />
      <ul className="absolute inset-0 z-0">
        {items.slice(0, 22).map((contributor, index) => {
          const { size, className, borderClassName, lightsTheme } = AVARS_STYLES[index];
          return (
            <li
              className={clsx(
                'flex flex-col items-center absolute',
                className,
                size === 'lg' && 'w-[92px]',
                size === 'md' && 'w-[72px]',
                size === 'sm' && 'w-14',
                index > 16 && 'md:hidden'
              )}
              key={contributor.id}
            >
              <Avatar
                borderClassName={borderClassName}
                lightsTheme={AVATARS_LIGHTS[lightsTheme]}
                size={size}
                {...contributor}
              />
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
