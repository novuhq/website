import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Button from 'components/shared/button';

const Flexibility = () => (
  <section className="flexibility mt-[245px] lg:mt-[207px] md:mt-[180px] sm:mt-[100px]">
    <div className="container-2xl relative flex justify-end sm:flex-col">
      <div className="max-w-96 pb-[267px] lg:max-w-72 lg:pb-[150px] md:max-w-64 md:pb-[39px] sm:max-w-none sm:pb-0">
        <h2 className="text-[44px] leading-denser tracking-snug font-medium max-w-4xl lg:text-[34px] md:text-[30px]">
          Complete control and flexibility
        </h2>
        <p className="text-[17px] leading-snug font-book text-gray-9 mt-3 lg:mt-2.5 md:text-base md:mt-3">
          Redesigned local experience to author configurable workflows tailored to optimize
          Developer Experience, with a matching interface for Non-Technical users.
        </p>
        <Button
          className="mt-7 text-sm h-14 min-w-[142px] lg:h-12 lg:mt-6 md:mt-7"
          theme="gray-outline"
          to="https://novu.mintlify.app/echo/quickstart"
        >
          Read docs
        </Button>
      </div>
      <StaticImage
        className="!absolute bottom-[3px] right-[30px] w-[1549px] pointer-events-none -z-10 lg:w-[1178px] lg:right-[43px] md:w-[830px] md:right-[87px] sm:!relative sm:w-[183.75%] sm:right-[32.5%] sm:bottom-0 sm:mt-[-36.824%]"
        src="./images/background.png"
        width={1549}
        height={1043}
        alt=""
        loading="lazy"
      />
    </div>
  </section>
);

export default Flexibility;
