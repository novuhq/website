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
  <section className="notification-center safe-paddings bg-gray-2 pb-30 pt-40 lg:pt-32 lg:pb-24 md:pt-20 md:pb-14 sm:pt-10 sm:pb-8">
    <div className="container grid-gap-x grid grid-cols-12 items-center md:flex md:flex-col">
      <div className="col-start-1 col-end-8 md:order-2 md:mt-6" aria-hidden>
        <img
          className="md:max-w-[712px] sm:max-w-full"
          src={illustration}
          alt=""
          loading="lazy"
          width={842}
          height={560}
        />
      </div>

      <div className="col-start-9 col-end-13 xl:col-start-8 md:order-1 md:max-w-[590px] md:text-center">
        <Heading size="lg" tag="h2" className="leading-tight lg:text-4xl sm:text-3xl" theme="white">
          {TITLE}
        </Heading>
        <p className="mt-5 text-lg font-light leading-snug text-gray-8 lg:mt-3 lg:text-base">
          {DESCRIPTION}
        </p>
        <Button className="mt-7" to={BUTTON_URL} size="sm" theme="gray-outline">
          {BUTTON_TEXT}
        </Button>
      </div>
    </div>
  </section>
);

export default NotificationCenter;
