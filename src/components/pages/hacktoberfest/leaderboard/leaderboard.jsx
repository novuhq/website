// import { graphql, useStaticQuery } from 'gatsby';
import React, { useState, useMemo } from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

const TITLE = 'Leaderboard';
const DESCRIPTION =
  "Track the top contributors by their number of pull requests. Join the competition and see who's making a difference!";
const HEADER = ['Place', 'Name', 'Score'];

const Leaderboard = () => {
  const [isShownMore, setIsShownMore] = useState(false);

  const participants = useMemo(() => [], []);
  // FIXME: If necessary - To get this data it is necessary to uncomment a part of the code that fetches and organizes this data at the gatsby-node file level.
  // const {
  //   participants: { data: participants },
  // } = useStaticQuery(graphql`
  //   {
  //     participants: hacktoberfestAuthorsMergedPRs {
  //       data {
  //         author {
  //           login
  //           html_url
  //           avatar_url
  //         }
  //         scoreByYear {
  //           _2023
  //         }
  //       }
  //     }
  //   }
  // `);

  const participantsIsCurrentYear = useMemo(
    () =>
      participants
        .filter(({ scoreByYear }) => scoreByYear._2023 > 0)
        .sort((a, b) => b.scoreByYear._2023 - a.scoreByYear._2023),
    [participants]
  );

  const list = useMemo(
    () => (isShownMore ? participantsIsCurrentYear : participantsIsCurrentYear.slice(0, 10)),
    [isShownMore, participantsIsCurrentYear]
  );
  return (
    <section className="leaderboard safe-paddings bg-gray-2 py-20 sm:py-16">
      <div className="container-md">
        <Heading
          className="text-center leading-tight md:text-5xl sm:text-4xl"
          tag="h2"
          theme="white"
          size="xl"
        >
          {TITLE}
        </Heading>
        <p className="mx-auto mt-11 max-w-[716px] text-center text-lg text-gray-9 md:mt-8 md:max-w-none md:text-base">
          {DESCRIPTION}
        </p>

        <div className="mx-auto max-w-[904px]">
          <div className="grid-gap-x mt-16 grid grid-cols-8 border-b border-gray-4 pb-4 sm:grid-cols-[60px,1fr,1fr,65px]">
            {HEADER.map((header) => (
              <span className="text-2xl font-medium leading-tight sm:text-xl [&:nth-child(2)]:col-span-6 [&:nth-child(2)]:sm:col-span-2">
                {header}
              </span>
            ))}
          </div>
          {list?.length ? (
            <ul>
              {list.map(({ author: { login, html_url, avatar_url }, scoreByYear }, index) => (
                <li
                  className="grid-gap-x group grid grid-cols-8 items-center border-b border-gray-4 py-4 sm:grid-cols-[60px,1fr,1fr,65px]"
                  key={index}
                >
                  <div className="relative flex items-center px-4">
                    <span className="text-lg font-medium leading-none">{index + 1}</span>
                  </div>

                  <Link
                    className="col-span-6 flex items-center gap-x-5 sm:col-span-2 sm:gap-x-2.5"
                    to={html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="rounded-full grayscale transition-all duration-200 group-hover:grayscale-0"
                      src={avatar_url}
                      width={36}
                      height={36}
                      alt={login || ''}
                    />
                    <span className="truncate text-lg font-book leading-tight">{login}</span>
                  </Link>

                  <div className="text-highlighting-blue-gradient2">
                    <span className="block text-2xl font-medium leading-none">
                      {scoreByYear._2023}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col items-center border-b border-gray-4 pb-10 pt-8">
              <span className="block text-5xl font-medium leading-tight">No results yet</span>
              <p className="mt-3.5 max-w-[510px] text-center text-lg leading-tight text-gray-8">
                Register, contribute, and win SWAG with three merged PRs! Join now and aim for the
                top spot!
              </p>
            </div>
          )}
          {!isShownMore && list.length !== participantsIsCurrentYear.length && (
            <div className="mt-8 text-center">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link
                className="sm:text-sm"
                type="button"
                size="base"
                theme="primary-underline"
                tag="button"
                onClick={() => setIsShownMore(true)}
              >
                Load more
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
