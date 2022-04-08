import React from 'react';

import Button from 'components/shared/button/button';
import Heading from 'components/shared/heading/heading';

import illustration from './images/illustration.svg';

const TITLE = 'Fully featured notification center in minutes';
const DESCRIPTION =
  'Build a real-time notification center using our embeddable components or connect your custom UI with our notification feed API.';
const BUTTON_TEXT = 'Read Docs';
const BUTTON_URL = '/';

const NotificationCenter = () => (
  <section className="notification-center safe-paddings bg-gray-2 pb-30 pt-40 lg:pt-32 lg:pb-24 md:pt-28 md:pb-18 sm:pt-18 sm:pb-12">
    <div className="container grid-gap-x grid grid-cols-12 items-center md:flex md:flex-col md:items-start">
      <div className="col-start-1 col-end-8 md:order-2 md:mt-11 md:w-full sm:mt-8" aria-hidden>
        <img
          className="md:w-full"
          src={illustration}
          alt=""
          loading="lazy"
          width={842}
          height={560}
        />
      </div>

      <div className="col-start-9 col-end-13 xl:col-start-8 md:order-1">
        <Heading size="lg" tag="h2" className="leading-tight lg:text-4xl sm:text-3xl" theme="white">
          {TITLE}
        </Heading>
        <p className="mt-5 text-lg font-light leading-snug text-gray-8 lg:mt-3 lg:text-base">
          {DESCRIPTION}
        </p>
        <Button className="mt-7 md:mt-6" to={BUTTON_URL} size="sm" theme="gray-outline">
          {BUTTON_TEXT}
        </Button>
      </div>
    </div>
  </section>
);

export default NotificationCenter;
