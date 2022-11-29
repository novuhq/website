import React from 'react';

import Button from 'components/shared/button';
import Link from 'components/shared/link';
import CheckIcon from 'images/check.inline.svg';

const SelfHosted = () => (
  <div className="container pb-32 text-center xl:pb-28 lg:pb-24 md:pb-20">
    <p className="mt-12 text-center text-2xl font-book md:mt-14 sm:mt-11">
      Run locally with docker-compose
    </p>
    <Link
      className="mt-4"
      theme="primary-underline"
      size="sm"
      to="https://docs.novu.co/overview/docker-deploy/"
      target="_blank"
    >
      Read docs
    </Link>

    <div className="mx-auto mt-12 flex max-w-[338px] flex-col items-center justify-between rounded-xl bg-gray-gradient p-8 text-center sm:max-w-none">
      <div className="flex-flex-col space-y-5">
        <span className="text-lg font-medium uppercase leading-none">On-premises</span>
        <p className="min-h-[57px] text-sm leading-snug text-gray-8 xl:min-h-0">
          {/* TODO: add real description */}
          Lorem ipsum dolor sit amet consectetur. Odio mi ac dui tristique ipsum. A netus est tempus
          purus ut at nisl id sit mattis.
        </p>
      </div>
      <span className="mt-12 mb-16 text-6xl font-medium leading-none xl:text-5xl lg:text-4xl">
        Contact us
      </span>

      <div className="mt-auto flex w-full flex-col justify-between space-y-8">
        <ul className="flex flex-col space-y-2 leading-tight">
          <li className="flex items-center space-x-3">
            <CheckIcon className="h-2 w-3 shrink-0 text-primary-1" />
            <span>1M events/month included</span>
          </li>
          <li className="flex items-center space-x-3">
            <CheckIcon className="h-2 w-3 shrink-0 text-primary-1" />
            <span>Unlimited events</span>
          </li>
          <li className="flex items-center space-x-3">
            <CheckIcon className="h-2 w-3 shrink-0 text-primary-1" />
            <span>Unlimited events</span>
          </li>
        </ul>
        <Button
          className="w-full"
          to="https://discord.gg/9wcGSf22PM"
          target="_blank"
          theme="gray-outline"
          size="sm"
        >
          Contact us
        </Button>
      </div>
    </div>
  </div>
);

SelfHosted.propTypes = {};

SelfHosted.defaultProps = {};

export default SelfHosted;
