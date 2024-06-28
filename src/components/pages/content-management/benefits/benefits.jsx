import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Benefits_imgOnLeftSide from 'components/pages/content-management/benefits/benefit_imgOnLeftSide/benefit_imgOnLeftSide';
import Benefits_imgOnRightSide from 'components/pages/content-management/benefits/benefit_imgOnRightSide/benefits_imgOnRightSide';
import Heading from 'components/shared/heading';

const TITLE = 'Never build notifications again';
const SUBTITLE = "We've built it, so you don't have to.";

const Benefits = () => {
  const Benefit_1_Props = {
    title: 'Effortless collaboration',
    description:
      'Developers and product teams work together on a platform that unifies all notifications content and logic.',
  };
  const Benefit_2_Props = {
    title: 'Reduce engineering interrupts',
    description:
      'Developers specify editable fields, show/hide toggles, and dropdown selectors for properties, empowering product teams to iterate faster.',
    image: (
      <StaticImage
        className="rounded-[20px]"
        src="./images/reduce-engineering-interrupts.jpg"
        alt=""
        width={842}
        height={560}
      />
    ),
  };
  const Benefit_3_Props = {
    title: 'Consistent user experience',
    description:
      'Product and marketing teams maintain ownership of messaging and branding, and can interate as fast as they need to.',
    image: (
      <StaticImage
        className="rounded-[20px]"
        src="./images/consistent-user-experience.png"
        alt=""
        width={842}
        height={532}
      />
    ),
  };
  const Benefit_4_Props = {
    title: 'Personalized notifications',
    description:
      'Deliver rich, personalized notifications across any channel, ensuring seamless content updates without disrupting workflow logic.',
  };
  const Benefit_5_Props = {
    title: 'Reuse existing and familiar content',
    description:
      'Bring your own content, no matter the format. Novu supports popular frameworks including React, Vue-email, MJML, and more.',
    image: (
      <StaticImage
        className="rounded-[20px]"
        src="./images/reuse-content.jpg"
        alt=""
        width={842}
        height={560}
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
      <Benefits_imgOnRightSide {...Benefit_1_Props} />
      <section className="container grid-gap-x grid grid-cols-12 items-center py-30 lg:py-20 md:flex md:flex-col md:py-16 sm:py-6">
        <div className="md:text-center col-start-8 col-end-13">
          <Heading
            size="xl"
            tag="h2"
            className="leading-tight lg:text-4xl sm:text-3xl"
            theme="white"
          >
            {Benefit_2_Props.title}
          </Heading>
          <p className="mt-5 text-lg font-book leading-snug text-gray-9 xl:max-w-[464px] lg:mt-3 lg:max-w-[296px] lg:text-base md:max-w-full">
            {Benefit_2_Props.description}
          </p>
        </div>

        <div className="relative md:mt-11 md:w-full md:flex md:justify-center sm:mt-8 col-start-1 col-end-7 row-start-1 lg:col-end-8">
          {Benefit_2_Props.image}
        </div>
      </section>
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
      <Benefits_imgOnLeftSide {...Benefit_4_Props} />
      <section className="container grid-gap-x grid grid-cols-12 items-center py-30 lg:py-20 md:flex md:flex-col md:py-16 sm:py-6">
        <div className="md:text-center col-start-1 col-end-6">
          <Heading
            size="xl"
            tag="h2"
            className="leading-tight lg:text-4xl sm:text-3xl"
            theme="white"
          >
            {Benefit_5_Props.title}
          </Heading>
          <p className="mt-5 text-lg font-book leading-snug text-gray-9 xl:max-w-[464px] lg:mt-3 lg:max-w-[296px] lg:text-base md:max-w-full">
            {Benefit_5_Props.description}
          </p>
        </div>

        <div className="relative md:mt-11 md:w-full md:flex md:justify-center sm:mt-8 col-start-7 col-end-13 lg:col-start-6">
          {Benefit_5_Props.image}
        </div>
      </section>
    </section>
  );
};

export default Benefits;
