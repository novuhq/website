import React from 'react';

import Button from 'components/shared/button';
import Link from 'components/shared/link';
import CheckIcon from 'images/check.inline.svg';

import { buttonClick } from '../../../../../utils/use-landing-simple-tracking';

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
      onClick={() => window?.analytics?.track('Pricing Event: Click on the link Read Docs')}
    >
      Read docs
    </Link>

    <div className="relative mx-auto mt-12 w-full max-w-[338px] overflow-hidden rounded-xl p-px text-center after:absolute after:inset-0 after:-z-10 after:rounded-xl after:bg-pink-yellow-gradient lg:max-w-[380px]">
      <div className="flex h-full flex-col items-center justify-between rounded-xl bg-active-gray-gradient p-8 text-center xl:px-4 lg:px-3 md:px-6">
        <div className="flex-flex-col space-y-5">
          <span className="text-lg font-medium uppercase leading-none">On-premises</span>
          <p className="text-sm leading-snug text-gray-8">Run Novu on your own servers.</p>
        </div>
        <span className="mb-16 mt-12 text-6xl font-medium leading-none xl:text-5xl lg:text-4xl md:mt-5 md:text-6xl sm:text-5xl">
          Contact us
        </span>

        <div className="mt-auto flex w-full flex-col justify-between space-y-8">
          <ul className="flex flex-col space-y-2 leading-tight">
            <li className="flex items-center space-x-3">
              <CheckIcon className="h-2 w-3 shrink-0 text-primary-1" />
              <span>Unlimited Events</span>
            </li>
            <li className="flex items-center space-x-3">
              <CheckIcon className="h-2 w-3 shrink-0 text-primary-1" />
              <span>MIT license</span>
            </li>
            <li className="flex items-center space-x-3">
              <CheckIcon className="h-2 w-3 shrink-0 text-primary-1" />
              <span>Free</span>
            </li>
          </ul>
          <Button
            className="w-full"
            to="https://calendly.com/novuhq/novu-meeting?utm_campaign=pricing-onpremise&utm_source=website"
            target="_blank"
            theme="gray-outline"
            size="sm"
            onClick={() => {
              buttonClick('book_a_call', { type: 'self_hosted' });
              window?.analytics?.track('Pricing Event: Click the CTA Button on the card', {
                packageType: 'On-premises',
              });
            }}
          >
            Contact us
          </Button>
        </div>
      </div>
    </div>
  </div>
);

SelfHosted.propTypes = {};

SelfHosted.defaultProps = {};

export default SelfHosted;
