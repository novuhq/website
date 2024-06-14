import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import glow from './images/glow.svg';

const CARDS_IMAGE_CLASS_NAME = '!absolute w-full h-full inset-0 z-0 rounded-xl';

const CARDS = [
  {
    title: 'Bring your own code',
    description:
      'Define workflows as code, re-use components, and deploy confidently while developing in your IDE of choice.',
    className:
      'order-1 bg-[radial-gradient(60.42%_86.05%_at_24.74%_100%,_#1B2637_0%,_#27222F_100%)]',
    image: (
      <StaticImage
        className={CARDS_IMAGE_CLASS_NAME}
        src="./images/code.jpg"
        alt=""
        width={768}
        height={380}
        loading="lazy"
        quality={100}
      />
    ),
  },
  {
    title: 'Type Safe',
    description:
      'Bring your own JSON schemas for full end&#8209;to&#8209;end validation across all your team members.',
    className: 'order-2 bg-[#27222F]',
    image: (
      <StaticImage
        className={CARDS_IMAGE_CLASS_NAME}
        src="./images/type-safe.jpg"
        alt=""
        width={416}
        height={380}
        loading="lazy"
        quality={100}
      />
    ),
  },
  {
    title: 'Powerful debugging',
    description:
      'Rapidly identify and solve previously complicated content hydrating and notification routing issues.',
    className: 'order-4 bg-[#27222F]',
    image: (
      <StaticImage
        className={CARDS_IMAGE_CLASS_NAME}
        src="./images/debug.jpg"
        alt=""
        width={768}
        height={380}
        loading="lazy"
        quality={100}
      />
    ),
  },
  {
    title: 'GitOps Notifications',
    description: 'Experience seamless GitOps Notifications revolutionizing workflow management.',
    className: 'order-3 bg-[radial-gradient(100%_100%_at_67.91%_0%,#243349_9.84%,#1E2334_22.52%)]',
    image: (
      <StaticImage
        className={CARDS_IMAGE_CLASS_NAME}
        src="./images/git-notification.jpg"
        alt=""
        width={416}
        height={380}
        loading="lazy"
        quality={100}
      />
    ),
  },
];

const Infrastructure = () => (
  <section className="infrastructure">
    <div className="container-lg relative">
      <h2 className="text-6xl leading-denser tracking-snug font-medium max-w-3xl">
        Code-based notification infrastructure for modern teams
      </h2>
      <ul className="flex flex-wrap gap-8 mt-12">
        {CARDS.map(({ title, description, className, image }, index) => (
          <li
            className={clsx(
              'relative h-[380px] rounded-xl bg-clip-border border border-transparent',
              className,
              {
                'w-[768px] lg:w-[608px] md:w-[446px]': index % 2 === 0,
                'w-[416px] lg:w-[308px] md:w-[252px]': index % 2 === 1,
              }
            )}
            key={index}
          >
            <div
              className={clsx('relative z-10 w-full h-full p-[30px]', {
                'max-w-md': index % 2 === 0,
                'flex flex-col justify-end': index % 2 === 1,
              })}
            >
              <h3 className="text-xl font-medium leading-snug tracking-snug">{title}</h3>
              <p
                className="text-[15px] font-light leading-snug text-gray-9 mt-1.5"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
            {image && image}
          </li>
        ))}
      </ul>
      <img
        className="absolute top-[-205px] left-[-400px] min-w-[1920px] h-auto -z-10"
        src={glow}
        alt=""
        loading="lazy"
        aria-hidden
      />
    </div>
  </section>
);

export default Infrastructure;
