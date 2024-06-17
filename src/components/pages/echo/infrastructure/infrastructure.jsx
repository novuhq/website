import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import glow from './images/glow.svg';

const CARDS_IMAGE_CLASS_NAME_DESKTOP =
  '!absolute w-fit h-fit inset-0 z-0 rounded-xl lg:h-full lg:w-auto [&_img]:lg:!w-auto [&_img]:lg:!-translate-x-1/2 [&_img]:lg:!left-1/2 sm:!hidden';

const CARDS_IMAGE_CLASS_NAME_MOBILE =
  '!hidden !absolute w-fit h-fit inset-0 z-0 rounded-xl sm:!inline-block';

const CARDS = [
  {
    title: 'Bring your own code',
    description:
      'Define workflows as code, re-use components, and deploy confidently while developing in your IDE of choice.',
    className:
      'order-1 bg-[radial-gradient(60.42%_86.05%_at_24.74%_100%,_#1B2637_0%,_#27222F_100%)]',
    image: (
      <StaticImage
        className={CARDS_IMAGE_CLASS_NAME_DESKTOP}
        src="./images/code.png"
        alt=""
        width={768}
        height={380}
        loading="lazy"
        quality={100}
      />
    ),
    imageMobile: (
      <StaticImage
        className={CARDS_IMAGE_CLASS_NAME_MOBILE}
        src="./images/code-mobile.jpg"
        alt=""
        width={320}
        height={250}
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
        className={CARDS_IMAGE_CLASS_NAME_DESKTOP}
        src="./images/type-safe.png"
        alt=""
        width={416}
        height={380}
        loading="lazy"
        quality={100}
      />
    ),
    imageMobile: (
      <StaticImage
        className={CARDS_IMAGE_CLASS_NAME_MOBILE}
        src="./images/type-safe-mobile.jpg"
        alt=""
        width={320}
        height={250}
        loading="lazy"
        quality={100}
      />
    ),
  },
  {
    title: 'Powerful debugging',
    description:
      'Rapidly identify and solve previously complicated content hydrating and notification routing issues.',
    className: 'order-4 bg-[#27222F] sm:order-3',
    image: (
      <StaticImage
        className={CARDS_IMAGE_CLASS_NAME_DESKTOP}
        src="./images/debug.png"
        alt=""
        width={768}
        height={380}
        loading="lazy"
        quality={100}
      />
    ),
    imageMobile: (
      <StaticImage
        className={CARDS_IMAGE_CLASS_NAME_MOBILE}
        src="./images/debug-mobile.jpg"
        alt=""
        width={320}
        height={250}
        loading="lazy"
        quality={100}
      />
    ),
  },
  {
    title: 'GitOps Notifications',
    description: 'Experience seamless GitOps Notifications revolutionizing workflow management.',
    className:
      'order-3 bg-[radial-gradient(100%_100%_at_67.91%_0%,#243349_9.84%,#1E2334_22.52%)] sm:order-4',
    image: (
      <StaticImage
        className={CARDS_IMAGE_CLASS_NAME_DESKTOP}
        src="./images/git-notification.png"
        alt=""
        width={416}
        height={380}
        loading="lazy"
        quality={100}
      />
    ),
    imageMobile: (
      <StaticImage
        className={CARDS_IMAGE_CLASS_NAME_MOBILE}
        src="./images/git-notification-mobile.jpg"
        alt=""
        width={320}
        height={250}
        loading="lazy"
        quality={100}
      />
    ),
  },
];

const Infrastructure = () => (
  <section className="infrastructure md:mt-[130px] sm:mt-[88px]">
    <div className="container-lg relative lg:!max-w-5xl">
      <h2 className="text-6xl leading-denser tracking-snug font-medium max-w-3xl lg:text-4xl lg:max-w-xl md:text-[32px] md:max-w-lg sm:text-3xl">
        Code-based notification infrastructure for modern teams
      </h2>
      <ul className="flex flex-wrap gap-7 mt-12 lg:mt-11 lg:gap-6 md:gap-[18px] md:mt-9 sm:justify-center sm:mt-8">
        {CARDS.map(({ title, description, className, image, imageMobile }, index) => (
          <li
            className={clsx(
              'relative h-[382px] rounded-xl bg-clip-border border border-transparent lg:h-[322px] md:h-[252px] sm:w-[320px] sm:h-[250px]',
              className,
              {
                'w-[770px] lg:w-[608px] md:w-[446px]': index % 2 === 0,
                'w-[418px] lg:w-[328px] md:w-[240px]': index % 2 === 1,
              }
            )}
            key={index}
          >
            <div
              className={clsx(
                'relative z-10 w-full h-full p-[30px] lg:p-[26px] md:p-[18px] sm:p-4',
                {
                  'max-w-md lg:max-w-[330px] md:max-w-[300px] sm:flex sm:flex-col sm:justify-end sm:max-w-none':
                    index % 2 === 0,
                  'flex flex-col justify-end': index % 2 === 1,
                }
              )}
            >
              <h3 className="text-xl font-medium leading-snug tracking-snug lg:text-lg md:text-[15px] sm:text-sm">
                {title}
              </h3>
              <p
                className="text-[15px] font-light leading-snug text-gray-9 mt-1.5 md:text-sm md:mt-1"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
            {image && image}
            {imageMobile && imageMobile}
          </li>
        ))}
      </ul>
      <img
        className="absolute top-[-205px] left-[-400px] w-[1920px] max-w-none h-auto -z-10 lg:w-[1300px]"
        src={glow}
        alt=""
        loading="lazy"
        aria-hidden
      />
    </div>
  </section>
);

export default Infrastructure;
