import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Button from 'components/shared/button';

const TITLE = 'Complete control and flexibility';

const DESCRIPTION =
  'Development teams have complete flexibility and control over notifications. Product teams maintain seamless input and control over content, messaging, and brand so they can iterate quickly—all without developer input, and by using an intuitive and capable UI.';

const LINK = {
  text: 'Read docs',
  url: 'https://docs.novu.co/',
};

const Flexibility = () => (
  <section className="flexibility mt-[245px] lg:mt-[207px] md:mt-28 sm:mt-20">
    <div className="container-2xl relative flex justify-end xl:px-10 lg:max-w-none lg:px-8 sm:flex-col sm:px-5">
      <div className="relative z-10 min-h-[558px] max-w-96 lg:min-h-[425px] lg:max-w-72 md:min-h-[305px] md:max-w-64 sm:min-h-fit sm:max-w-none">
        <h2 className="max-w-4xl text-[44px] font-medium leading-denser tracking-snug lg:text-[34px] md:text-[30px]">
          {TITLE}
        </h2>
        <p className="mt-3 text-[17px] font-book leading-snug text-gray-9 lg:mt-2.5 md:mt-3 md:text-base">
          {DESCRIPTION}
        </p>
        <Button
          className="mt-[26px] h-14 min-w-[142px] text-sm lg:mt-6 lg:h-12 md:mt-7"
          theme="gray-outline"
          to={LINK.url}
        >
          {LINK.text}
        </Button>
      </div>
      <StaticImage
        className="pointer-events-none !absolute bottom-0 right-[30px] z-0 w-[1555px] lg:right-[43px] lg:w-[1181px] md:right-[87px] md:w-[830px] sm:!relative sm:right-[32.5%] sm:mt-[-36.824%] sm:w-[183.75%]"
        src="./images/background.png"
        width={1555}
        height={1048}
        alt=""
        loading="lazy"
        aria-hidden
      />
    </div>
  </section>
);

export default Flexibility;
