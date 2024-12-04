import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';

import contributorsBg from './images/contributors-bg.png';
import forkIcon from './images/fork.svg';
import light from './images/light.svg';
import prIcon from './images/pr.svg';
import starsBg from './images/stars-bg.png';

const formatNumbers = (count) => {
  if (count < 950) {
    return `${Math.floor(count / 100) * 100}+`;
  }

  const fixedThousands = (count / 1000).toFixed(1);
  if (fixedThousands.endsWith('.0')) {
    return `${fixedThousands.replace('.0', '')}k+`;
  }

  return `${fixedThousands}k+`;
};

const Card = ({ className, borderClassName, children, hidden = false }) => (
  <div
    className={clsx(
      'relative shrink-0 overflow-hidden rounded-xl bg-[#E8F4FF] bg-opacity-[0.08] text-white lg:rounded-[10px]',
      className
    )}
    aria-hidden={hidden}
  >
    {children}
    <div
      className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white border-opacity-[0.03]"
      aria-hidden
    />
    <div
      className={clsx('border-gradient pointer-events-none absolute inset-0', borderClassName)}
      aria-hidden
    />
  </div>
);

const GitHubStat = ({
  count,
  commits,
  closedIssues,
  openIssues,
  contributors,
  forks,
  pullRequests,
}) => (
  <section className="github-stat safe-paddings relative z-10 mt-40 lg:mt-[120px] md:mt-[100px] sm:mt-20">
    <div className="container grid-gap-x relative z-10 grid grid-cols-12">
      <Heading
        className="col-span-full text-center font-medium leading-tight lg:text-5xl md:text-[32px] sm:text-3xl"
        tag="h2"
        size="44"
        theme="white"
      >
        Built by a community of {formatNumbers(contributors)} contributors
      </Heading>
      <div className="relative col-span-10 col-start-2 mx-auto mt-12 flex max-w-[1220px] flex-wrap gap-3 text-black xl:col-span-full md:mt-11 md:gap-2.5 sm:mt-8">
        <img
          className="pointer-events-none absolute left-[53%] top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 lg:left-[52%] lg:top-[53%] md:left-[65%] md:top-[42%] sm:bottom-[300px] sm:left-[45%] sm:top-auto sm:w-[600px] sm:max-w-none sm:translate-y-0"
          src={light}
          alt=""
          width={1004}
          height={944}
          loading="lazy"
        />
        <Card
          className="flex aspect-[1.734] w-[calc(58%-6px)] flex-col justify-center pl-[84px] lg:pl-16 md:w-[calc(69.4%-5px)] md:pl-[58px] sm:w-full sm:pl-10"
          borderClassName="border-image-community-card-stars-border-gradient"
        >
          <img
            className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
            src={starsBg}
            alt=""
            width={704}
            height={506}
            loading="lazy"
          />
          <span className="relative z-10 w-fit bg-[linear-gradient(87.48deg,#B7E3F0_21.47%,rgba(255,255,255,.7)_82.02%)] bg-clip-text text-[84px] font-medium uppercase leading-denser text-transparent lg:text-[65px] md:text-[58px] sm-xs:text-5xl">
            {formatNumbers(count)}
          </span>
          <span className="relative z-10 mt-1 w-fit bg-[linear-gradient(87.48deg,#FFFFFF_21.47%,rgba(255,255,255,.6)_82.02%)] bg-clip-text text-4xl font-medium leading-denser text-transparent lg:text-3xl md:text-[25px] sm-xs:mt-0.5 sm-xs:text-base">
            GitHub stars
          </span>
        </Card>
        <div className="grid w-[calc(42%-6px)] grid-cols-2 gap-3 md:w-[calc(30.6%-5px)] md:grid-cols-1 sm:w-full sm:grid-cols-2">
          <Card
            className="flex aspect-[246/168] w-full flex-col items-center pt-9 lg:pt-7 md:pt-8 sm:aspect-auto sm:h-[100px] sm:pt-5"
            borderClassName="border-image-community-card-open-issues-border-gradient sm:border-image-community-card-open-issues-sm-border-gradient"
          >
            <span className="w-fit bg-[linear-gradient(87.48deg,#FFCEE6_21.47%,rgba(255,255,255,.7)_82.02%)] bg-clip-text text-7xl font-medium leading-denser text-transparent lg:text-[44px] sm:text-[32px]">
              {formatNumbers(openIssues)}
            </span>
            <span className="mt-1 font-light leading-snug text-gray-9 lg:mt-1.5 lg:text-sm sm:mt-0.5">
              Open Issues
            </span>
          </Card>
          <Card
            className="flex aspect-[246/168] w-full flex-col items-center pt-9 lg:pt-7 md:pt-8 sm:aspect-auto sm:h-[100px] sm:pt-5"
            borderClassName="border-image-community-card-closed-issues-border-gradient sm:border-image-community-card-open-issues-sm-border-gradient"
          >
            <span className="w-fit bg-[linear-gradient(87.48deg,#B7E3F0_21.47%,rgba(255,255,255,.7)_82.02%)] bg-clip-text text-7xl font-medium leading-denser text-transparent lg:text-[44px] sm:text-[32px]">
              {formatNumbers(closedIssues)}
            </span>
            <span className="mt-1 font-light leading-snug text-gray-9 lg:mt-1.5 lg:text-sm sm:mt-0.5">
              Closed Issues
            </span>
          </Card>
          <Card
            className="col-span-2 flex aspect-[504/226] flex-col items-center justify-end pb-7 lg:pb-6 md:hidden"
            borderClassName="border-image-community-card-contributors-border-gradient"
          >
            <img
              className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
              src={contributorsBg}
              alt=""
              width={504}
              height={226}
              loading="lazy"
            />
            <span className="relative z-10 w-fit bg-[linear-gradient(87.48deg,#FFFFFF_21.47%,rgba(255,255,255,.6)_82.02%)] bg-clip-text text-4xl font-medium leading-denser text-transparent lg:text-3xl">
              {formatNumbers(contributors)} Contributors
            </span>
          </Card>
        </div>
        <Card
          className="hidden h-[145px] w-[calc(30.6%-5px)] flex-col items-center pt-8 md:flex sm:h-[100px] sm:w-full sm:pt-5"
          borderClassName="border-image-community-card-commits-border-gradient sm:hidden"
          hidden
        >
          <span className="w-fit bg-[linear-gradient(87.48deg,#FFCEE6_21.47%,rgba(255,255,255,.7)_82.02%)] bg-clip-text text-[44px] font-medium leading-denser text-transparent sm:text-[32px]">
            {formatNumbers(commits)}
          </span>
          <span className="mt-1.5 text-sm font-light leading-snug text-gray-9 sm:mt-0.5">
            Commits
          </span>
        </Card>
        <Card
          className="hidden h-[145px] w-[calc(69.4%-5px)] flex-col p-5 md:flex sm:h-40 sm:w-full sm:items-center sm:justify-end"
          borderClassName="border-image-community-card-contributors-border-gradient sm:hidden"
          hidden
        >
          <img
            className="pointer-events-none absolute -right-3.5 top-2.5 z-0 w-[400px] max-w-none sm:-bottom-1 sm:left-1/2 sm:top-auto sm:w-[354px] sm:-translate-x-1/2"
            src={contributorsBg}
            alt=""
            width={400}
            height={180}
            loading="lazy"
          />
          <span className="relative z-10 w-fit bg-[linear-gradient(87.48deg,#FFFFFF_21.47%,rgba(255,255,255,.6)_82.02%)] bg-clip-text text-2xl font-medium leading-denser text-transparent">
            {formatNumbers(contributors)}
            {` `}
            <br className="sm:hidden" />
            Contributors
          </span>
        </Card>
        <Card
          className="flex aspect-[475/168] w-[calc(39.5%-8px)] items-center justify-center md:aspect-auto md:h-[138px] md:w-[calc(50%-5px)] sm:h-[100px] sm:w-full"
          borderClassName="border-image-community-card-pr-border-gradient sm:hidden"
        >
          <img
            className="mr-3 h-9 shrink-0 lg:mr-2.5 lg:h-8"
            src={prIcon}
            width={31}
            height={36}
            alt=""
            loading="lazy"
          />
          <span className="w-fit bg-[linear-gradient(87.48deg,#FFCEE6_21.47%,rgba(255,255,255,.7)_82.02%)] bg-clip-text text-4xl font-medium leading-denser text-transparent lg:text-3xl sm:text-[27px]">
            {formatNumbers(pullRequests)} Pull Requests
          </span>
        </Card>
        <Card
          className="flex aspect-[475/168] w-[calc(39.5%-8px)] items-center justify-center md:aspect-auto md:h-[138px] md:w-[calc(50%-5px)] sm:h-[100px] sm:w-full"
          borderClassName="border-image-community-card-forks-border-gradient sm:hidden"
        >
          <img
            className="mr-3 h-9 shrink-0 lg:mr-2.5 lg:h-8"
            src={forkIcon}
            width={31}
            height={36}
            alt=""
            loading="lazy"
          />
          <span className="w-fit bg-[linear-gradient(87.48deg,#B7E3F0_21.47%,rgba(255,255,255,.7)_82.02%)] bg-clip-text text-4xl font-medium leading-denser text-transparent lg:text-3xl sm:text-[27px]">
            {formatNumbers(forks)} forks
          </span>
        </Card>
        <Card
          className="flex aspect-[246/168] w-[calc(21%-8px)] flex-col items-center pt-9 md:hidden"
          borderClassName="border-image-community-card-commits-border-gradient"
        >
          <span className="w-fit bg-[linear-gradient(87.48deg,#FFCEE6_21.47%,rgba(255,255,255,.7)_82.02%)] bg-clip-text text-7xl font-medium leading-denser text-transparent lg:text-[44px]">
            {formatNumbers(commits)}
          </span>
          <span className="mt-1 font-light leading-snug text-gray-9 lg:mt-1.5 lg:text-sm">
            Commits
          </span>
        </Card>
      </div>
    </div>
  </section>
);

GitHubStat.propTypes = {
  count: PropTypes.number.isRequired,
  commits: PropTypes.number.isRequired,
  closedIssues: PropTypes.number.isRequired,
  openIssues: PropTypes.number.isRequired,
  contributors: PropTypes.number.isRequired,
  forks: PropTypes.number.isRequired,
  pullRequests: PropTypes.number.isRequired,
};

export default GitHubStat;
