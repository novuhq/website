import clsx from 'clsx';
import React from 'react';

import contributors from './images/contributors.png';
import stars from './images/stars.png';

const TITLE = 'The power of open source community';

const Community = () => (
  <section className="community safe-paddings relative z-30 mt-[244px] lg:mt-[224px] md:mt-[120px] sm:mt-[160px]">
    <div className="container-md relative flex flex-col items-center text-center md:px-8 sm:w-full sm:px-5">
      <h3 className="w-fit max-w-4xl text-[20px] leading-snug text-white [mask-image:radial-gradient(34%_361.31%_at_50.23%_-67.39%,#FFFFFF_50%,rgba(255,255,255,0.5)_150%)] md:text-[18px] sm-xs:max-w-[216px]">
        {TITLE}
      </h3>
      <ul
        className={clsx(
          'relative z-10 mt-9 grid w-full max-w-[578px] grid-cols-2 items-end pt-[176px] font-book leading-normal tracking-snug text-gray-8 md:mt-[18px] md:text-[15px] sm:mt-10 sm:grid-cols-1 sm:pt-0',
          'after:absolute after:inset-y-0 after:left-1/2 after:w-px after:-translate-x-1/2 after:bg-[linear-gradient(0deg,rgba(48,37,65,0.00)_0%,#302541_20%,#302541_80%,rgba(48,37,65,0.00)_100%)] sm:after:inset-y-[initial] sm:after:left-1/2 sm:after:top-1/2 sm:after:h-px sm:after:w-full sm:after:max-w-[440px] sm:after:-translate-y-[calc(50%+12px)] sm:after:bg-[linear-gradient(90deg,rgba(48,37,65,0.00)_0%,#302541_20%,#302541_80%,rgba(48,37,65,0.00)_100%)]'
        )}
      >
        <li className="relative flex flex-col items-center gap-y-3 sm:pt-[102px]">
          <img
            className="pointer-events-none !absolute -right-7 bottom-[-50px] w-[392px] max-w-none sm:left-1/2 sm:right-[initial] sm:w-[354px] sm:-translate-x-[calc(50%+24px)]"
            src={stars}
            alt=""
            width={392}
            height={320}
            loading="lazy"
          />
          <p className="z-10">36k GitHub stars</p>
        </li>
        <li className="flex flex-col items-center gap-y-3 sm:pt-[188px]">
          <img
            className="pointer-events-none !absolute -bottom-[76px] -right-[101px] w-[478px] max-w-none sm:-bottom-16 sm:left-1/2 sm:right-[initial] sm:w-[414px] sm:-translate-x-[calc(50%-4px)]"
            src={contributors}
            alt=""
            width={478}
            height={346}
            loading="lazy"
          />
          <p className="z-10">400+ contributors</p>
        </li>
      </ul>
    </div>
  </section>
);

export default Community;
