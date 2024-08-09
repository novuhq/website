import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const TITLE = 'Confidently reach end users through notifications ';
const DESCRIPTION =
  'Developers build capable, functional workflows using the frameworks and content components they love. Product and non-technical teams easily update content and messaging, and will never break prod.';

const CARDS_IMAGE_CLASS_NAME_DESKTOP =
  '!absolute w-fit h-fit inset-0 z-0 rounded-xl lg:h-full lg:w-auto [&_img]:lg:!w-auto [&_img]:lg:!-translate-x-1/2 [&_img]:lg:!left-1/2 sm:!hidden';

const CARDS_IMAGE_CLASS_NAME_MOBILE =
  '!hidden !absolute w-full inset-0 z-0 rounded-xl sm:!inline-block';

const CARDS = [
  {
    title: 'As flexible as in-house built',
    description: 'All of the power of your custom-built solution, none of the hassle.',
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
        aria-hidden
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
        aria-hidden
      />
    ),
  },
  {
    title: 'Type-Safe',
    description:
      'Bring your own JSON schemas for full end-to-end validation across all your team members.',
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
        aria-hidden
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
        aria-hidden
      />
    ),
  },
  {
    title: 'Observable and Scalable',
    description:
      'Novu handles any volume, any channel, and any team for mission-critical notifications.',
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
        aria-hidden
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
        aria-hidden
      />
    ),
  },
  {
    title: 'Consistent',
    description: 'Notification infrastructure belongs in your CI/CD release cycle.',
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
        aria-hidden
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
        aria-hidden
      />
    ),
  },
];

const Infrastructure = () => (
  <section className="infrastructure mt-40 md:mt-[88px]">
    <div className="container-lg relative xl:px-0 lg:px-8 lg:w-full lg:max-w-5xl md:max-w-3xl sm:px-5">
      <h2 className="relative z-10 text-6xl leading-denser tracking-snug font-medium max-w-3xl lg:text-4xl lg:max-w-xl md:text-[32px] md:max-w-lg sm:text-3xl">
        {TITLE}
      </h2>
      <p className="text-[17px] leading-snug font-book text-gray-9 mt-3 max-w-xl lg:mt-2.5 md:text-base md:mt-3">
        {DESCRIPTION}
      </p>
      <ul className="relative z-10 flex flex-wrap gap-7 mt-12 lg:mt-11 lg:gap-6 md:gap-[18px] md:mt-9 sm:justify-center sm:mt-8">
        {CARDS.map(({ title, description, className, image, imageMobile }, index) => (
          <li
            className={clsx(
              'relative h-[382px] rounded-xl bg-clip-border border border-transparent lg:h-[322px] md:h-[252px] sm:max-w-[380px] sm:w-full sm:h-[250px]',
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
      <div className="absolute z-0 top-20 -right-36 w-[564px] h-[420px] rounded-[50%] bg-[radial-gradient(88.94%_88.94%_at_62.86%_11.06%,#D886FF_27.2%,#EA69FF_80.5%,#A347FF_100%)] opacity-10 blur-3xl lg:w-[508px] lg:h-[378px] md:-right-9 md:w-[377px] md:h-[281px] sm:top-64 sm:-right-28" />
      <div className="absolute z-0 -left-44 -bottom-12 w-[553px] h-[394px] rounded-[50%] bg-[radial-gradient(88.94%_88.94%_at_62.86%_11.06%,#6789FF_27.2%,#69B7FF_80.5%,#4786FF_100%)] opacity-10 blur-3xl lg:w-[522px] lg:h-[372px] md:-left-10 md:w-[372px] md:h-[265px] sm:-left-36" />
    </div>
  </section>
);

export default Infrastructure;
