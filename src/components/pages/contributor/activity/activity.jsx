import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import Separator from 'components/shared/separator';
import LINKS from 'constants/links';

import ArrowIcon from './images/arrow.inline.svg';
import branchIcon from './images/branch.svg';
import commitIcon from './images/commit.svg';
import pullRequestIcon from './images/pull-request.svg';

const TITLE = 'Contribution activity';

const activityIcons = {
  branch: branchIcon,
  commit: commitIcon,
  pullRequest: pullRequestIcon,
};
const Activity = ({ contributor }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const emoji = useMemo(() => {
    if (!isClient) return null;
    // eslint-disable-next-line global-require
    const EmojiConvertor = require('emoji-js');
    const EmojiCtor = EmojiConvertor?.default ?? EmojiConvertor;
    return new EmojiCtor();
  }, [isClient]);
  const [isShownMore, setIsShownMore] = useState(false);

  const pulls = useMemo(
    () => (isShownMore ? contributor.pulls : contributor.pulls.slice(0, 3)),
    [isShownMore, contributor]
  );

  return (
    <section className="activity">
      <Heading className="leading-denser md:text-[30px]" tag="h2" size="md" theme="white">
        {TITLE}
      </Heading>

      <ul className="mt-10 space-y-8">
        {pulls.map(({ title, html_url, merged_at }, index) => {
          const icon = activityIcons.pullRequest;
          return (
            <li className="flex" key={index}>
              <div className="mr-3.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-white to-[rgba(255,255,255,0.6)]">
                <img src={icon} loading="lazy" alt="pullRequest icon" aria-hidden />
              </div>
              <div className="flex w-full flex-col">
                <div className="flex items-center justify-between pt-2">
                  <p className="font-light leading-snug">Pull Request</p>
                  <span className="whitespace-nowrap text-sm font-light leading-none">
                    {moment(merged_at).format('DD/MM/YYYY')}
                  </span>
                </div>
                <div className="mt-4 rounded-md border border-gray-3 px-4 py-3.5">
                  <p className="text-lg sm:text-base">
                    <a href={html_url} target="_blank" rel="noreferrer">
                      {emoji ? emoji.replace_colons(title || '') : title || ''}
                    </a>
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {!isShownMore && pulls.length !== contributor.pulls.length && (
        <div className="mt-8 md:text-center">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link
            className="ml-[54px] md:ml-0 sm:text-sm"
            type="button"
            size="base"
            theme="primary-underline"
            tag="button"
            onClick={() => setIsShownMore(true)}
          >
            Show more activity
          </Link>
        </div>
      )}

      <Separator className="px-0 pb-8 pt-14 sm:pt-9" backgroundColor="black" />
      <Link className="flex items-center space-x-2.5" theme="white" {...LINKS.contributors}>
        <ArrowIcon className="h-2" /> <span>Back to Contributors page</span>
      </Link>
    </section>
  );
};

export default Activity;
