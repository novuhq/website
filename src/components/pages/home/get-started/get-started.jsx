import React from 'react';

import Button from 'components/shared/button/button';
import Heading from 'components/shared/heading/heading';

import bg from './images/bg.svg';

const TITLE = 'Ready to send your first notification?';

const LEFT_TITLE = 'Self-Hosted';
const LEFT_DESCRIPTION = 'Run locally with docker-compose';
const LEFT_BUTTON_TEXT = 'Read Docs';
const LEFT_BUTTON_URL = '/';

const RIGHT_TITLE = 'Cloud';
const RIGHT_DESCRIPTION = 'Use our free serverless solution';
const RIGHT_BUTTON_TEXT = 'Get Started';
const RIGHT_BUTTON_URL = '/';

const GetStarted = () => (
  <section className="get-started safe-paddings relative overflow-hidden bg-black pt-40 pb-40">
    <div className="container relative z-10">
      <Heading size="md" tag="h2" className="text-center leading-tight sm:text-3xl" theme="white">
        {TITLE}
      </Heading>

      <div className="mx-auto mt-16 grid max-w-[968px] grid-cols-2 gap-x-10 sm:block sm:gap-0 sm:space-y-7">
        <div
          className="flex flex-col items-center rounded-[20px] p-8 pb-10"
          style={{ background: 'linear-gradient(180deg, #1A1A1A 0%, rgba(26, 26, 26, 0.7) 100%)' }}
        >
          <Heading size="sm" tag="h4" className="leading-tight" theme="white">
            {LEFT_TITLE}
          </Heading>
          <p className="mt-3 font-light text-gray-8 sm:text-base">{LEFT_DESCRIPTION}</p>
          <Button className="mt-7" to={LEFT_BUTTON_URL} size="sm" theme="gray-outline">
            {LEFT_BUTTON_TEXT}
          </Button>
        </div>

        <div
          className="flex flex-col items-center rounded-[20px] p-8 pb-10"
          style={{
            background:
              'linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), linear-gradient(257.22deg, #33FFFF 0%, #FFFFFF 46.28%, #FF33BB 100%)',
          }}
        >
          <Heading size="sm" tag="h4" className="leading-tight" theme="black">
            {RIGHT_TITLE}
          </Heading>
          <p className="mt-3 font-light text-black sm:text-base">{RIGHT_DESCRIPTION}</p>
          <Button className="mt-7" to={RIGHT_BUTTON_URL} size="sm" theme="black-filled">
            {RIGHT_BUTTON_TEXT}
          </Button>
        </div>
      </div>
    </div>

    <img
      className="absolute top-1/2 left-1/2 min-w-[1920px] -translate-x-1/2 -translate-y-1/2"
      src={bg}
      loading="lazy"
      alt=""
      aria-hidden
    />
  </section>
);

export default GetStarted;
