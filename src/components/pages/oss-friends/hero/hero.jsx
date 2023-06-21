import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link/link';

import bgSm from './images/bg-sm.svg';
import bg from './images/bg.svg';

const Hero = ({ items }) => (
  <section className="safe-paddings relative overflow-hidden pb-20 pt-36 lg:pb-16 lg:pt-32 md:pt-[104px] sm:pb-10 sm:pt-[95px]">
    <div className="container-lg relative z-10">
      <Heading
        className="mx-auto text-center text-8xl font-bold leading-denser lg:text-6xl md:text-4xl sm:text-[32px]"
        size="3xl"
        tag="h1"
        theme="white"
        asHTML
      >
        Our Open-source Friends
      </Heading>
      <p className="mx-auto mt-4 max-w-[800px] text-center text-lg leading-tight opacity-70 lg:mt-5 lg:max-w-[676px] md:mt-4 md:max-w-[590px] md:text-base sm:mt-3">
        In Novu, we are proud to collaborate with a diverse group of partners to promote open-source
        software and the values of transparency, collaboration, and community that it represents.
      </p>
      <ul className="mt-24 grid auto-rows-fr grid-cols-12 gap-8 lg:mt-16 lg:gap-7 md:mt-14 md:gap-5 sm:mt-12 sm:auto-rows-min">
        {items.map(({ title, description, link }, index) => (
          <li className="col-span-4 md:col-span-6 sm:col-span-full" key={index}>
            <article className="flex h-full flex-col justify-between rounded-[20px] bg-gradient-to-t from-gray-2 to-gray-2 p-8 lg:rounded-2xl lg:px-5 lg:pb-6 lg:pt-5">
              <div className="">
                <header className="flex items-center gap-x-[18px] sm:gap-x-3">
                  <span className="h-10 w-10 bg-gray-8 lg:h-9 lg:w-9" />
                  <h3 className="text-3xl leading-snug lg:text-2xl">{title}</h3>
                </header>
                <p className="mt-5 font-light leading-snug text-gray-9 sm:mt-3">{description}</p>
              </div>
              <Link
                className="mt-7 w-fit !pb-1.5 text-[13px] font-medium leading-none !tracking-[0.01em] lg:mt-6 sm:mt-5"
                to={link}
                theme="primary-underline"
              >
                Visit {title}
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </div>
    <img
      className="absolute left-1/2 top-0 min-w-[1920px] -translate-x-1/2 sm:hidden sm:min-w-[360px]"
      src={bg}
      loading="eager"
      alt=""
      aria-hidden
    />
    <img
      className="absolute left-1/2 top-0 hidden min-w-[360px] -translate-x-1/2 sm:block"
      src={bgSm}
      loading="eager"
      alt=""
      aria-hidden
    />
  </section>
);

export default Hero;
