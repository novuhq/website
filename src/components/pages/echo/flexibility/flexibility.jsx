import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Button from 'components/shared/button';

const Flexibility = () => (
  <section className="flexibility mt-[245px]">
    <div className="container-2xl relative flex justify-end">
      <div className="max-w-96 pb-[267px]">
        <h2 className="text-[44px] leading-denser tracking-snug font-medium max-w-4xl">
          Complete control and flexibility
        </h2>
        <p className="text-[17px] leading-snug font-book text-gray-9 mt-3">
          Redesigned local experience to author configurable workflows tailored to optimize
          Developer Experience, with a matching interface for Non-Technical users.
        </p>
        <Button
          className="mt-7 text-sm h-14 min-w-[142px]"
          theme="gray-outline"
          to="https://novu.mintlify.app/echo/quickstart"
        >
          Read docs
        </Button>
      </div>
      <StaticImage
        className="!absolute left-[-43px] bottom-0 pointer-events-none -z-10"
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
