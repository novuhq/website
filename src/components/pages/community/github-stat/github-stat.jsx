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
      'relative bg-[#E8F4FF] text-white overflow-hidden bg-opacity-[0.08] rounded-xl shrink-0 lg:rounded-[10px]',
      className
    )}
    aria-hidden={hidden}
  >
    {children}
    <div
      className="border border-white border-opacity-[0.03] rounded-[inherit] absolute inset-0 pointer-events-none"
      aria-hidden
    />
    <div
      className={clsx('border-gradient absolute inset-0 pointer-events-none', borderClassName)}
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
  <section className="get-involved safe-paddings relative z-10 mt-40 lg:mt-[120px] md:mt-[100px] sm:mt-20">
    <div className="container grid grid-cols-12 grid-gap-x relative z-10">
      <Heading
        className="font-medium col-span-full text-[44px] text-center leading-tight lg:text-5xl md:text-[32px] sm:text-3xl"
        tag="h2"
        theme="white"
      >
        Built by a community of {formatNumbers(contributors)} contributors
      </Heading>
      {/* <div className="relative flex flex-wrap col-span-10 text-black col-start-2 gap-3 mt-12 md:mt-11 sm:mt-8"> */}
      <div className="relative flex flex-wrap col-span-10 text-black col-start-2 gap-3 mt-12 max-w-[1220px] mx-auto xl:col-span-full md:mt-11 md:gap-2.5 sm:mt-8">
        <img
          className="absolute left-[12%] -z-10 top-1/2 -translate-y-1/2 pointer-events-none"
          src={light}
          alt=""
          width={1004}
          height={944}
          loading="lazy"
        />
        <Card
          className="aspect-[1.734] w-[calc(58%-6px)] flex flex-col justify-center pl-[84px] lg:pl-16 md:w-[calc(69.4%-5px)] md:pl-[58px] sm:pl-10 sm:w-full"
          borderClassName="border-image-community-card-stars-border-gradient"
        >
          <img
            className="absolute z-0 inset-0 w-full h-full object-cover pointer-events-none"
            src={starsBg}
            alt=""
            width={704}
            height={506}
            loading="lazy"
          />
          <span className="relative z-10 font-medium uppercase leading-denser text-[84px] bg-clip-text bg-[linear-gradient(87.48deg,#B7E3F0_21.47%,rgba(255,255,255,.7)_82.02%)] w-fit text-transparent lg:text-[65px] md:text-[58px] sm-xs:text-5xl">
            {formatNumbers(count)}
          </span>
          <span className="relative z-10 mt-1 text-4xl font-medium leading-denser bg-[linear-gradient(87.48deg,#FFFFFF_21.47%,rgba(255,255,255,.6)_82.02%)] w-fit bg-clip-text text-transparent lg:text-3xl md:text-[25px] sm-xs:mt-0.5 sm-xs:text-base">
            GitHub stars
          </span>
        </Card>
        <div className="grid gap-3 grid-cols-2 w-[calc(42%-6px)] md:grid-cols-1 md:w-[calc(30.6%-5px)] sm:w-full sm:grid-cols-2">
          <Card
            className="aspect-[246/168] w-full pt-9 flex flex-col items-center lg:pt-7 md:pt-8 sm:aspect-auto sm:pt-5 sm:h-[100px]"
            borderClassName="border-image-community-card-open-issues-border-gradient"
          >
            <span className="font-medium leading-denser text-7xl bg-[linear-gradient(87.48deg,#FFCEE6_21.47%,rgba(255,255,255,.7)_82.02%)] w-fit bg-clip-text text-transparent lg:text-[44px] sm:text-[32px]">
              {formatNumbers(openIssues)}
            </span>
            <span className="mt-1 font-light text-gray-9 leading-snug lg:text-sm lg:mt-1.5 sm:mt-0.5">
              Open Issues
            </span>
          </Card>
          <Card
            className="aspect-[246/168] w-full pt-9 flex flex-col items-center lg:pt-7 md:pt-8 sm:aspect-auto sm:pt-5 sm:h-[100px]"
            borderClassName="border-image-community-card-closed-issues-border-gradient"
          >
            <span className="font-medium leading-denser text-7xl bg-[linear-gradient(87.48deg,#B7E3F0_21.47%,rgba(255,255,255,.7)_82.02%)] w-fit bg-clip-text text-transparent lg:text-[44px] sm:text-[32px]">
              {formatNumbers(closedIssues)}
            </span>
            <span className="mt-1 font-light text-gray-9 leading-snug lg:text-sm lg:mt-1.5 sm:mt-0.5">
              Closed Issues
            </span>
          </Card>
          <Card
            className="aspect-[504/226] col-span-2 pb-7 flex flex-col items-center justify-end lg:pb-6 md:hidden"
            borderClassName="border-image-community-card-contributors-border-gradient"
          >
            <img
              className="absolute z-0 inset-0 w-full h-full object-cover pointer-events-none"
              src={contributorsBg}
              alt=""
              width={504}
              height={226}
              loading="lazy"
            />
            <span className="relative z-10 text-4xl font-medium leading-denser bg-[linear-gradient(87.48deg,#FFFFFF_21.47%,rgba(255,255,255,.6)_82.02%)] w-fit bg-clip-text text-transparent lg:text-3xl">
              {formatNumbers(contributors)} Contributors
            </span>
          </Card>
        </div>
        <Card
          className="w-[calc(30.6%-5px)] h-[145px] pt-8 hidden flex-col items-center md:flex sm:w-full sm:h-[100px] sm:pt-5"
          borderClassName="border-image-community-card-commits-border-gradient"
          hidden
        >
          <span className="font-medium leading-denser text-[44px] bg-[linear-gradient(87.48deg,#FFCEE6_21.47%,rgba(255,255,255,.7)_82.02%)] w-fit bg-clip-text text-transparent sm:text-[32px]">
            {formatNumbers(commits)}
          </span>
          <span className="font-light text-gray-9 leading-snug text-sm mt-1.5 sm:mt-0.5">
            Commits
          </span>
        </Card>
        <Card
          className="hidden w-[calc(69.4%-5px)] h-[145px] p-5 flex-col md:flex sm:items-center sm:w-full sm:justify-end sm:h-40"
          borderClassName="border-image-community-card-contributors-border-gradient"
          hidden
        >
          <img
            className="absolute z-0 -right-3.5 top-2.5 w-[400px] max-w-none pointer-events-none sm:left-1/2 sm:-translate-x-1/2 sm:top-auto sm:-bottom-1 sm:w-[354px]"
            src={contributorsBg}
            alt=""
            width={400}
            height={180}
            loading="lazy"
          />
          <span className="relative z-10 text-2xl font-medium leading-denser bg-[linear-gradient(87.48deg,#FFFFFF_21.47%,rgba(255,255,255,.6)_82.02%)] w-fit bg-clip-text text-transparent">
            {formatNumbers(contributors)}
            {` `}
            <br className="sm:hidden" />
            Contributors
          </span>
        </Card>
        <Card
          className="aspect-[475/168] w-[calc(39.5%-8px)] flex items-center justify-center md:w-[calc(50%-5px)] md:aspect-auto md:h-[138px] sm:w-full sm:h-[100px]"
          borderClassName="border-image-community-card-pr-border-gradient"
        >
          <img
            className="mr-3 shrink-0 h-9 lg:h-8 lg:mr-2.5"
            src={prIcon}
            width={31}
            height={36}
            alt=""
            loading="lazy"
          />
          <span className="text-4xl font-medium leading-denser bg-[linear-gradient(87.48deg,#FFCEE6_21.47%,rgba(255,255,255,.7)_82.02%)] w-fit bg-clip-text text-transparent lg:text-3xl sm:text-[27px]">
            {formatNumbers(pullRequests)} Pull Requests
          </span>
        </Card>
        <Card
          className="aspect-[475/168] w-[calc(39.5%-8px)] flex items-center justify-center md:w-[calc(50%-5px)] md:aspect-auto md:h-[138px] sm:w-full sm:h-[100px]"
          borderClassName="border-image-community-card-forks-border-gradient"
        >
          <img
            className="mr-3 shrink-0 h-9 lg:h-8 lg:mr-2.5"
            src={forkIcon}
            width={31}
            height={36}
            alt=""
            loading="lazy"
          />
          <span className="text-4xl font-medium leading-denser bg-clip-text bg-[linear-gradient(87.48deg,#B7E3F0_21.47%,rgba(255,255,255,.7)_82.02%)] w-fit text-transparent lg:text-3xl sm:text-[27px]">
            {formatNumbers(forks)} forks
          </span>
        </Card>
        <Card
          className="aspect-[246/168] w-[calc(21%-8px)] pt-9 flex flex-col items-center md:hidden"
          borderClassName="border-image-community-card-commits-border-gradient"
        >
          <span className="font-medium leading-denser text-7xl bg-[linear-gradient(87.48deg,#FFCEE6_21.47%,rgba(255,255,255,.7)_82.02%)] w-fit bg-clip-text text-transparent lg:text-[44px]">
            {formatNumbers(commits)}
          </span>
          <span className="mt-1 font-light text-gray-9 leading-snug lg:text-sm lg:mt-1.5">
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
