import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

const CTA = ({ title, leftCard, rightCard, theme }) => (
  <section className="cta safe-paddings relative mt-40 lg:mt-[120px] md:mt-[100px] sm:mt-20">
    <div className="container relative z-10 max-w-[960px]">
      <Heading
        className="mx-auto max-w-xl text-center font-medium leading-denser tracking-snug lg:text-5xl lg:leading-tight md:max-w-lg md:text-[32px] sm:text-3xl"
        tag="h2"
        size="44"
        theme="white"
      >
        {title}
      </Heading>
      <ul className="mt-10 grid grid-cols-2 gap-x-8 sm:grid-cols-1 sm:justify-items-center sm:gap-y-6">
        <li className="rounded-xl bg-common-card-border">
          <div className="m-px h-full rounded-xl bg-[#14141F] px-5 py-9 text-center md:py-7">
            <Heading
              tag="h3"
              className="text-[32px] font-medium leading-denser tracking-snug lg:text-3xl md:text-2xl"
            >
              {leftCard.title}
            </Heading>
            <p className="mx-auto mt-3 max-w-80 leading-snug tracking-snug text-gray-8">
              {leftCard.description}
            </p>
            <Button
              className="mt-6 before:bg-[#14141F]"
              theme="gray-outline"
              size="sm"
              to={leftCard.buttonLink}
              rel={leftCard.rel}
              target={leftCard.target}
            >
              {leftCard.buttonText}
            </Button>
          </div>
        </li>
        <li
          className={clsx('relative rounded-xl', {
            'bg-blue-card-border': theme === 'blue',
            'bg-purple-card-border': theme === 'purple',
            'bg-green-card-border': theme === 'green',
          })}
        >
          <div className="relative z-30 m-px h-full rounded-xl px-5 py-9 text-center md:py-7">
            <Heading
              tag="h3"
              className="text-[32px] font-medium leading-denser tracking-snug lg:text-3xl md:text-2xl"
            >
              {rightCard.title}
            </Heading>
            <p className="mx-auto mt-3 max-w-80 leading-snug tracking-snug text-gray-8">
              {rightCard.description}
            </p>
            <Button
              className="mt-6"
              theme="white-filled"
              size="sm"
              to={rightCard.buttonLink}
              rel={rightCard.rel}
              target={rightCard.target}
            >
              {rightCard.buttonText}
            </Button>
          </div>
          {theme === 'blue' && (
            <StaticImage
              className="pointer-events-none !absolute left-px top-px z-20 h-full w-full rounded-xl"
              src="./images/dots-blue.jpg"
              alt=""
              width={464}
              height={237}
              quality={100}
            />
          )}
          {theme === 'purple' && (
            <StaticImage
              className="pointer-events-none !absolute left-px top-px z-20 h-full w-full rounded-xl"
              src="./images/dots-purple.jpg"
              alt=""
              width={464}
              height={237}
              quality={100}
            />
          )}
          {theme === 'green' && (
            <StaticImage
              className="pointer-events-none !absolute left-px top-px z-20 h-full w-full rounded-xl"
              src="./images/dots-green.jpg"
              alt=""
              width={464}
              height={237}
              quality={100}
            />
          )}
          <StaticImage
            className="pointer-events-none !absolute left-[185px] top-[-305px] z-10 h-[553px] w-[717px] sm:!hidden"
            src="./images/dots.png"
            alt=""
            width={717}
            height={553}
            quality={100}
          />
          <div
            className="pointer-events-none absolute -top-px right-1 z-10 h-4 w-[194px] rounded-[50%] bg-white mix-blend-plus-lighter blur-sm sm:hidden"
            aria-hidden
          />
          <div
            className={clsx(
              'pointer-events-none absolute right-[-135px] top-[-150px] z-0 h-[382px] w-[370px] rounded-[50%] opacity-10 blur-3xl sm:hidden',
              {
                'bg-blue-card-light': theme === 'blue',
                'bg-purple-card-light': theme === 'purple',
                'bg-green-card-light': theme === 'green',
              }
            )}
            aria-hidden
          />
        </li>
      </ul>
    </div>
    <div
      className={clsx(
        'absolute -top-4 left-1/2 h-[490px] w-[1136px] -translate-x-1/2 rounded-[50%] opacity-[0.03] blur-3xl sm:top-24',
        {
          'bg-[linear-gradient(171.41deg,#F575E0_21.93%,#7599F5_84.89%)]': theme === 'purple',
          'bg-[linear-gradient(171.41deg,#7595F5_21.93%,#7599F5_84.89%)]': theme === 'blue',
          'bg-[linear-gradient(168.68deg,#75E0F5_7.69%,#9575F5_45.98%)]': theme === 'green',
        }
      )}
    />
    <div
      className={clsx(
        'absolute -top-14 left-1/2 h-[572px] w-[1472px] -translate-x-1/2 rounded-[50%] opacity-[0.03] blur-3xl sm:top-14',
        {
          'bg-[linear-gradient(171.41deg,#F575E0_21.93%,rgba(117,153,245,0.7)_84.89%)]':
            theme === 'purple',
          'bg-[linear-gradient(171.41deg,#7595F5_21.93%,rgba(117,153,245,0.7)_84.89%)]':
            theme === 'blue',
          'bg-[linear-gradient(344.86deg,#9575F5_47.69%,rgba(117,224,245,0.7)_73.74%)]':
            theme === 'green',
        }
      )}
    />
  </section>
);

CTA.propTypes = {
  title: PropTypes.string.isRequired,
  leftCard: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string,
    rel: PropTypes.string,
    target: PropTypes.string,
  }).isRequired,
  rightCard: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string,
    rel: PropTypes.string,
    target: PropTypes.string,
  }).isRequired,
  theme: PropTypes.oneOf(['blue', 'purple', 'green']),
};

CTA.defaultProps = {
  theme: 'purple',
};

export default CTA;
