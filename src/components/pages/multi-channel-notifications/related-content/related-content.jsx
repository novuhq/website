import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link/link';

import relatedContentItems from './data';

const RelatedContent = () => (
  <section className="safe-paddings relative overflow-hidden py-40 lg:pb-16 lg:pt-32 md:pt-[104px] sm:pb-10 sm:pt-[95px]">
    <div className="container-lg relative z-10">
      <Heading
        className="mx-auto text-center text-8xl font-normal leading-denser lg:text-6xl md:text-4xl sm:text-[32px]"
        size="1xl"
        tag="h1"
        theme="white"
        asHTML
      >
        Related Content
      </Heading>
      <ul className="mt-24 grid auto-rows-fr grid-cols-12 gap-8 lg:mt-16 lg:gap-7 md:mt-14 md:gap-5 sm:mt-12 sm:auto-rows-min">
        {relatedContentItems.map(({ name, description, linkUrl }, index) => (
          <li className="col-span-4 md:col-span-6 sm:col-span-full" key={index}>
            <article className="flex h-full flex-col justify-between rounded-[20px] bg-gradient-to-b from-gray-2 to-[rgba(26,26,26,.7)] p-8 lg:rounded-2xl lg:px-5 lg:pb-6 lg:pt-5">
              <div>
                <header className="flex items-center gap-x-[18px] sm:gap-x-3">
                  <h3 className="text-3xl leading-snug lg:text-2xl">{name}</h3>
                </header>
                <p className="mt-5 font-light leading-snug text-gray-9 sm:mt-3">{description}</p>
              </div>
              <Link
                className="mt-7 w-fit !pb-1.5 text-[13px] font-medium leading-none !tracking-[0.01em] lg:mt-6 sm:mt-5"
                to={linkUrl}
                theme="primary-underline"
                target="_blank"
              >
                Learn More
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default RelatedContent;
