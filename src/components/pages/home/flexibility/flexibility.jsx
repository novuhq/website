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
  <section className="flexibility mt-[245px] lg:mt-[207px] md:mt-[180px] sm:mt-[100px]">
    <div className="container-2xl relative flex justify-end xl:px-10 lg:px-8 lg:max-w-none sm:px-5 sm:flex-col">
      <div className="relative z-10 max-w-96 min-h-[558px] lg:max-w-72 lg:min-h-[425px] md:max-w-64 md:min-h-[305px] sm:max-w-none sm:min-h-fit">
        <h2 className="text-[44px] leading-denser tracking-snug font-medium max-w-4xl lg:text-[34px] md:text-[30px]">
          {TITLE}
        </h2>
        <p className="text-[17px] leading-snug font-book text-gray-9 mt-3 lg:mt-2.5 md:text-base md:mt-3">
          {DESCRIPTION}
        </p>
        <Button
          className="mt-[26px] text-sm h-14 min-w-[142px] lg:h-12 lg:mt-6 md:mt-7"
          theme="gray-outline"
          to={LINK.url}
        >
          {LINK.text}
        </Button>
      </div>
      <StaticImage
        className="!absolute bottom-0 right-[30px] w-[1555px] pointer-events-none z-0 lg:w-[1181px] lg:right-[43px] md:w-[830px] md:right-[87px] sm:!relative sm:w-[183.75%] sm:right-[32.5%] sm:mt-[-36.824%]"
        src="./images/background.png"
        width={1555}
        height={1048}
        alt=""
        loading="lazy"
      />
    </div>
  </section>
);

export default Flexibility;
