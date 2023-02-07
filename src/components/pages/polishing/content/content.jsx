import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

import BacklogIcon from './images/backlog.inline.svg';
import CompletedIcon from './images/completed.inline.svg';
import PolishingIcon from './images/polishing.inline.svg';

const TITLE = `Polishing <br/> Season`;

const getCleanedTitle = (value) => {
  const type =
    value.match(/(Feature|Bug Report|Improvement|Polishing):/gi)?.[0].replace(/:/gi, '') || null;
  const title = value
    .replace(/(🐛|🚀|✨|)/gu, '')
    .replace(/:[a-z_]+:/gi, '')
    .replace(/\[NV-\d+\]/gi, '')
    .replace(/(Feature|Bug Report|Improvement|Polishing):/gi, '')
    .trim();

  return {
    type,
    title,
  };
};

const Content = ({ issues }) => {
  const backlogIssues = issues.filter(
    (issue) => issue.state === 'OPEN' && issue.assignees.nodes.length === 0
  );
  const polishingIssues = issues.filter(
    (issue) => issue.state === 'OPEN' && issue.assignees.nodes.length > 0
  );
  const completedIssues = issues.filter((issue) => issue.state === 'CLOSED');

  return (
    <section className="safe-paddings relative py-40 lg:py-36 md:pt-28 md:pb-10 sm:pt-18">
      <div className="container grid-gap-x relative grid grid-cols-12 md:flex md:flex-col">
        <div className="relative col-start-1 col-end-6">
          <div className="sticky top-10 md:static md:text-center">
            <div>
              <Heading
                className="inline text-[72px] font-bold leading-denser lg:text-6xl md:text-5xl"
                tag="h1"
                size="3xl"
                theme="white"
                asHTML
              >
                {TITLE}
              </Heading>
              <div className="text-highlighting-gray-gradient ml-2.5 inline-flex rounded-[50px] border border-gray-5 bg-gray-gradient px-2.5 py-1">
                <span className="text-3xl font-medium leading-none">2023</span>
              </div>
            </div>
            <div className="mt-12 space-y-4 text-lg text-gray-9 md:mt-10 md:space-y-3.5 md:text-base">
              <p>
                2022 has been amazing - we were able to launch our first version of Novu ever, and
                delivery the features you wanted the most such as Digest, User Preferences, Delays
                and so much more. It was fast. Fast has its price - loose ties, paper-cuts,
                unresolved flows.
              </p>
              <p>
                The objective of the Polishing Season is to prioritize the quality of work and
                transform what has been mentioned as "one day" into what our product is. The focus
                of this period will be dedicated to enhancing the product's overall aesthetic and
                user experience.
              </p>
              <p>
                Our product is led by our community needs and shaped by our community’s feedback. We
                are excited to learn what will be the features you need most!
              </p>
            </div>
            <Button
              className="mt-12 md:mt-10"
              to="https://github.com/novuhq/novu/issues/new?assignees=&labels=polishing&template=polishing.yml&title=%E2%9C%A8+Polishing%3A+"
              target="_blank"
              rel="noreferrer"
              size="sm"
              theme="pink-to-yellow-gradient"
              onClick={() => {
                window.analytics.track(
                  'Polishing Event: Click the CTA Button on the page to create issue'
                );
              }}
            >
              Submit an issue
            </Button>
          </div>
        </div>

        <div className="col-start-7 col-end-13 md:mt-20 sm:mt-16">
          <div className="flex w-fit space-x-3 rounded-[36px] border border-gray-3 bg-gray-1 p-1.5 md:mx-auto sm:w-full sm-xs:flex-col sm-xs:space-y-3 sm-xs:space-x-0 sm-xs:rounded-[26px]">
            <a
              className="group flex items-center space-x-1.5 rounded-[64px] bg-gray-2 px-5 py-3.5 transition-colors duration-200 hover:bg-white sm:flex-1 sm:justify-center"
              href="#backlogIssues"
            >
              <BacklogIcon className="h-3.5 text-gray-8" />
              <span className="text-sm font-medium uppercase leading-none transition-colors duration-200 group-hover:text-black">
                Backlog
              </span>
            </a>
            <a
              className="group flex items-center space-x-1.5 rounded-[64px] bg-gray-2 px-5 py-3.5 transition-colors duration-200 hover:bg-white sm:flex-1 sm:justify-center"
              href="#polishingIssues"
            >
              <PolishingIcon className="h-3.5 text-secondary-2" />
              <span className="text-sm font-medium uppercase leading-none group-hover:text-black">
                Polishing
              </span>
            </a>
            <a
              className="group flex items-center space-x-1.5 rounded-[64px] bg-gray-2 px-5 py-3.5 transition-colors duration-200 hover:bg-white sm:flex-1 sm:justify-center"
              href="#completedIssues"
            >
              <CompletedIcon className="h-3.5 text-secondary-3" />
              <span className="text-sm font-medium uppercase leading-none group-hover:text-black">
                Completed
              </span>
            </a>
          </div>

          <div className="relative before:absolute before:top-11 before:-left-20 before:h-[calc(100%+98px)] before:border-l-2 before:border-dashed before:border-gray-2 before:lg:-left-16 before:md:hidden">
            <div className="pt-10" id="backlogIssues">
              <div className="after:md:hiddden relative flex items-center space-x-2 pl-3 before:absolute before:left-[-84px] before:top-[3px] before:h-2.5 before:w-2.5 before:rounded-full before:bg-white before:blur after:absolute after:left-[-83px] after:top-1 after:h-2 after:w-2 after:rounded-full after:bg-white before:lg:left-[-68px] after:lg:left-[-67px] before:md:hidden">
                <BacklogIcon className="h-3.5 text-gray-8" />
                <span className="text-xs font-medium uppercase leading-none">Backlog</span>
                <span className="text-xs font-medium leading-none text-gray-6">
                  {backlogIssues.length}
                </span>
              </div>
              <ul className="mt-6 space-y-4">
                {backlogIssues.map((issue, index) => (
                  <li
                    className="relative rounded-2xl border border-gray-2 bg-gradient-to-b from-gray-2 to-[rgba(26,26,26,0.7)] p-3 transition-colors duration-200 before:absolute before:left-[-84px] before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:border before:border-gray-6 before:bg-black before:transition-colors before:duration-200 hover:from-black hover:before:bg-white before:lg:left-[-68px] before:md:hidden"
                    key={index}
                  >
                    <a href={issue.url} target="_blank" rel="noreferrer">
                      <div className="space-x-1.5">
                        <span className="inline text-gray-8">#{issue.number}</span>
                        <span>{getCleanedTitle(issue.title).title}</span>
                      </div>
                      <div className="mt-6 flex justify-between">
                        {getCleanedTitle(issue.title).type && (
                          <span className="flex h-6 items-center rounded-[50px] bg-gray-3 px-2 text-xs leading-none text-gray-8">
                            {getCleanedTitle(issue.title).type}
                          </span>
                        )}
                        <span className="ml-auto text-xs text-gray-8">
                          Requested by {issue.author.login}
                        </span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-16" id="polishingIssues">
              <div className="after:md:hiddden relative flex items-center space-x-2 pl-3 before:absolute before:left-[-84px] before:top-[3px] before:h-2.5 before:w-2.5 before:rounded-full before:bg-white before:blur after:absolute after:left-[-83px] after:top-1 after:h-2 after:w-2 after:rounded-full after:bg-white before:lg:left-[-68px] after:lg:left-[-67px] before:md:hidden">
                <PolishingIcon className="h-3.5 text-secondary-2" />
                <span className="text-xs font-medium uppercase leading-none">Polishing</span>
                <span className="text-xs font-medium leading-none text-gray-6">
                  {polishingIssues.length}
                </span>
              </div>
              <ul className="mt-6 space-y-4">
                {polishingIssues.map((issue, index) => (
                  <li
                    className="relative rounded-2xl border border-gray-2 bg-gradient-to-b from-gray-2 to-[rgba(26,26,26,0.7)] p-3 before:absolute before:left-[-84px] before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:border before:border-gray-6 before:bg-black before:transition-colors before:duration-200 hover:before:bg-white before:lg:left-[-68px] before:md:hidden"
                    key={index}
                  >
                    <a href={issue.url} target="_blank" rel="noreferrer">
                      <div className="space-x-1.5">
                        <span className="inline text-gray-8">#{issue.number}</span>
                        <span>{getCleanedTitle(issue.title).title}</span>
                      </div>
                      <div className="mt-6 flex justify-between">
                        {getCleanedTitle(issue.title).type && (
                          <span className="flex h-6 items-center rounded-[50px] bg-gray-3 px-2 text-xs leading-none text-gray-8">
                            {getCleanedTitle(issue.title).type}
                          </span>
                        )}
                        <div className="ml-auto flex items-center space-x-2">
                          {issue.assignees.nodes[0]?.avatarUrl && (
                            <img
                              className="h-6 rounded-full"
                              src={issue.assignees.nodes[0].avatarUrl}
                              height={24}
                              width={24}
                              alt=""
                            />
                          )}
                          <span className="text-xs text-gray-8">
                            Polishing by{' '}
                            {issue.assignees.nodes[0]?.login || issue.assignees.nodes[0]?.name}
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-16" id="completedIssues">
              <div className="after:md:hiddden relative flex items-center space-x-2 pl-3 before:absolute before:left-[-84px] before:top-[3px] before:h-2.5 before:w-2.5 before:rounded-full before:bg-white before:blur after:absolute after:left-[-83px] after:top-1 after:h-2 after:w-2 after:rounded-full after:bg-white before:lg:left-[-68px] after:lg:left-[-67px] before:md:hidden">
                <CompletedIcon className="h-3.5 text-secondary-3" />
                <span className="text-xs font-medium uppercase leading-none">Completed</span>
                <span className="text-xs font-medium leading-none text-gray-6">
                  {completedIssues.length}
                </span>
              </div>
              <ul className="mt-6 space-y-4">
                {completedIssues.map((issue, index) => (
                  <li
                    className="relative rounded-2xl border border-gray-2 bg-gradient-to-b from-gray-2 to-[rgba(26,26,26,0.7)] p-3 before:absolute before:left-[-84px] before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:border before:border-gray-6 before:bg-black before:transition-colors before:duration-200 hover:before:bg-white before:lg:left-[-68px] before:md:hidden"
                    key={index}
                  >
                    <a href={issue.url} target="_blank" rel="noreferrer">
                      <div className="space-x-1.5">
                        <span className="inline text-gray-8">#{issue.number}</span>
                        <span>{getCleanedTitle(issue.title).title}</span>
                      </div>
                      <div className="mt-6 flex justify-between">
                        {getCleanedTitle(issue.title).type && (
                          <span className="flex h-6 items-center rounded-[50px] bg-gray-3 px-2 text-xs leading-none text-gray-8">
                            {getCleanedTitle(issue.title).type}
                          </span>
                        )}
                        <span className="ml-auto text-xs text-gray-8">
                          Polished by{' '}
                          {issue.assignees.nodes[0]?.login ||
                            issue.assignees.nodes[0]?.name ||
                            issue.author.login}
                        </span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  issues: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      assignees: PropTypes.any,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
      author: PropTypes.shape({
        login: PropTypes.string,
        avatarUrl: PropTypes.string,
      }).isRequired,
      state: PropTypes.oneOf(['OPEN', 'CLOSED']).isRequired,
    })
  ).isRequired,
};

export default Content;
