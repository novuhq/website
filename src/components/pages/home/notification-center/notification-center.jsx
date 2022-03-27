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
  <section className="notification-center safe-paddings bg-gray-2 pt-40 pb-28">
    <div className="container flex items-center justify-between lg:flex-col">
      <div className="max-w-[464px] xl:max-w-[525px] lg:max-w-[782px] lg:text-center md:max-w-[712px] sm:w-full sm:max-w-none">
        <Heading size="xl" tag="h2" className="leading-tight xl:text-5xl sm:text-3xl">
          {TITLE}
        </Heading>
        <p className="mt-5 text-lg font-light text-gray-8 sm:text-base">{DESCRIPTION}</p>
        <Button className="mt-7" to={BUTTON_URL} size="sm" theme="gray-outline">
          {BUTTON_TEXT}
        </Button>
      </div>
      <div className="order-first lg:order-last lg:mt-6" aria-hidden>
        <img
          className="xl:max-w-[600px] lg:max-w-[782px] md:max-w-[712px] sm:max-w-full"
          src={illustration}
          alt=""
          loading="lazy"
          width={842}
          height={560}
        />
      </div>
    </div>
  </section>
);

export default NotificationCenter;
