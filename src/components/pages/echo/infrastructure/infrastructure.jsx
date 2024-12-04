import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const TITLE = 'Code-based notification infrastructure for modern teams';

const CARDS_IMAGE_CLASS_NAME_DESKTOP =
  '!absolute w-fit h-fit inset-0 z-0 rounded-xl lg:h-full lg:w-auto [&_img]:lg:!w-auto [&_img]:lg:!-translate-x-1/2 [&_img]:lg:!left-1/2 sm:!hidden';

const CARDS_IMAGE_CLASS_NAME_MOBILE =
  '!hidden !absolute w-full h-full inset-0 z-0 rounded-xl sm:!inline-block';

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
        loading="eager"
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
        loading="eager"
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
        loading="eager"
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
    <div className="container-lg relative xl:px-0 lg:w-full lg:max-w-5xl lg:px-8 md:max-w-3xl sm:px-5">
      <h2 className="relative z-10 max-w-3xl text-6xl font-medium leading-denser tracking-snug lg:max-w-xl lg:text-4xl md:max-w-lg md:text-[32px] sm:text-3xl [@media(max-width:614px)]:mx-auto [@media(max-width:614px)]:max-w-[460px]">
        {TITLE}
      </h2>
      <ul className="relative z-10 mt-12 flex flex-wrap gap-7 lg:mt-11 lg:gap-6 md:mt-9 md:gap-[18px] sm:mt-8 sm:grid sm:grid-cols-2 sm:justify-items-center [@media(max-width:614px)]:grid-cols-1">
        {CARDS.map(({ title, description, className, image, imageMobile }, index) => (
          <li
            className={clsx(
              'relative h-[382px] rounded-xl border border-transparent bg-clip-border lg:h-[322px] md:h-[252px] sm:aspect-[32/25] sm:h-auto sm:w-full sm:max-w-[460px]',
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
                'relative z-10 h-full w-full p-[30px] lg:p-[26px] md:p-[18px] sm:p-4',
                {
                  'max-w-md lg:max-w-[330px] md:max-w-[300px] sm:flex sm:max-w-none sm:flex-col sm:justify-end':
                    index % 2 === 0,
                  'flex flex-col justify-end': index % 2 === 1,
                }
              )}
            >
              <h3 className="text-xl font-medium leading-snug tracking-snug lg:text-lg md:text-[15px] sm:text-sm">
                {title}
              </h3>
              <p
                className="mt-1.5 text-[15px] font-light leading-snug text-gray-9 md:mt-1 md:text-sm"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
            {image && image}
            {imageMobile && imageMobile}
          </li>
        ))}
      </ul>
      <div className="absolute -right-36 top-20 z-0 h-[420px] w-[564px] rounded-[50%] bg-[radial-gradient(88.94%_88.94%_at_62.86%_11.06%,#D886FF_27.2%,#EA69FF_80.5%,#A347FF_100%)] opacity-10 blur-3xl lg:h-[378px] lg:w-[508px] md:-right-9 md:h-[281px] md:w-[377px] sm:-right-28 sm:top-64" />
      <div className="absolute -bottom-12 -left-44 z-0 h-[394px] w-[553px] rounded-[50%] bg-[radial-gradient(88.94%_88.94%_at_62.86%_11.06%,#6789FF_27.2%,#69B7FF_80.5%,#4786FF_100%)] opacity-10 blur-3xl lg:h-[372px] lg:w-[522px] md:-left-10 md:h-[265px] md:w-[372px] sm:-left-36" />
    </div>
  </section>
);

export default Infrastructure;
