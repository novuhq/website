import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Benefits_imgOnLeftSide from 'components/pages/multi-channel-notifications/benefits/benefit_imgOnLeftSide/benefit_imgOnLeftSide';
import Heading from 'components/shared/heading';

const TITLE = 'All of the flexibility of DIY, \nnone of the hassle';
const SUBTITLE =
  'Increase end user engagement with multi-channel notifications and centralized content.';

const Benefits = () => {
  const Benefit_1_Props = {
    title: 'Engage end-users regardless of channel',
    description:
      'Easily implement multi-channel notifications and flexible provider management, boosting platform user engagement.',
    image: (
      <StaticImage
        className="rounded-[20px]"
        src="./images/engage-end-users.jpg"
        alt=""
        width={842}
        height={532}
      />
    ),
  };

  const Benefit_2_Props = {
    title: 'Improve app experience and retention',
    description:
      'Personalized, real-time in-app notifications notifications with a convenient Inbox component.',
    image: (
      <StaticImage
        className="rounded-[20px]"
        src="./images/personalized-messages.jpg"
        alt=""
        width={842}
        height={495}
      />
    ),
  };

  const Benefit_3_Props = {
    title: 'Reduce friction between development and product teams',
    description:
      'Eliminate productivity barriers when developers provide notifications infrastructure to product teams. Development teams focus on core app value while product iterates.',
    image: (
      <StaticImage
        className="rounded-[20px]"
        src="./images/reduce-distractions.jpg"
        alt=""
        width={842}
        height={495}
      />
    ),
  };

  return (
    <section className="benefits bg-gray-2 pb-40 pt-40 lg:pb-32 lg:pt-24 md:pb-28 md:pt-18 sm:pb-18 sm:pt-12">
      <Heading
        size="xl"
        tag="h1"
        className="mx-auto text-center leading-tight sm:text-3xl"
        theme="white"
      >
        {TITLE}
      </Heading>
      <p className="mx-auto mt-4 max-w-[900px] text-center text-lg leading-tight opacity-70 lg:mt-5 lg:max-w-[676px] md:mt-4 md:max-w-[590px] md:text-base sm:mt-3">
        {SUBTITLE}
      </p>
      <section className="container grid-gap-x grid grid-cols-12 items-center py-30 lg:py-20 md:flex md:flex-col md:py-16 sm:py-6">
        <div className="md:text-center col-start-1 col-end-6">
          <Heading
            size="xl"
            tag="h2"
            className="leading-tight lg:text-4xl sm:text-3xl"
            theme="white"
          >
            {Benefit_1_Props.title}
          </Heading>
          <p className="mt-5 text-lg font-book leading-snug text-gray-9 xl:max-w-[464px] lg:mt-3 lg:max-w-[296px] lg:text-base md:max-w-full">
            {Benefit_1_Props.description}
          </p>
        </div>

        <div className="relative md:mt-11 md:w-full md:flex md:justify-center sm:mt-8 col-start-7 col-end-13 lg:col-start-6">
          {Benefit_1_Props.image}
        </div>
      </section>
      <Benefits_imgOnLeftSide {...Benefit_2_Props} />
      <section className="container grid-gap-x grid grid-cols-12 items-center py-30 lg:py-20 md:flex md:flex-col md:py-16 sm:py-6">
        <div className="md:text-center col-start-1 col-end-6">
          <Heading
            size="xl"
            tag="h2"
            className="leading-tight lg:text-4xl sm:text-3xl"
            theme="white"
          >
            {Benefit_3_Props.title}
          </Heading>
          <p className="mt-5 text-lg font-book leading-snug text-gray-9 xl:max-w-[464px] lg:mt-3 lg:max-w-[296px] lg:text-base md:max-w-full">
            {Benefit_3_Props.description}
          </p>
        </div>

        <div className="relative md:mt-11 md:w-full md:flex md:justify-center sm:mt-8 col-start-7 col-end-13 lg:col-start-6">
          {Benefit_3_Props.image}
        </div>
      </section>
    </section>
  );
};

export default Benefits;
