import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

const CTA = ({ title, leftCard, rightCard, theme }) => (
  <section className="cta relative safe-paddings mt-40 lg:mt-[120px] md:mt-[100px] sm:mt-20">
    <div className="container relative z-10 max-w-[960px]">
      <Heading
        tag="h2"
        size="lg"
        className="max-w-[575px] mx-auto text-center lg:text-[32px] md:text-3xl"
      >
        {title}
      </Heading>
      <ul className="grid grid-cols-2 gap-x-8 mt-11 sm:grid-cols-1 sm:gap-y-6 sm:justify-items-center">
        <li className="bg-common-card-border rounded-xl">
          <div className="bg-[#14141F] h-full m-px pt-10 pb-[43px] px-5 text-center rounded-xl lg:py-9 md:py-7">
            <Heading tag="h3" className="text-[32px] leading-snug lg:text-3xl md:text-2xl">
              {leftCard.title}
            </Heading>
            <p className="leading-snug text-white/60 max-w-80 mx-auto mt-1.5">
              {leftCard.description}
            </p>
            <Button
              className="mt-5 h-10 text-sm px-6"
              theme="gray-outline"
              to={leftCard.buttonLink}
            >
              {leftCard.buttonText}
            </Button>
          </div>
        </li>
        <li
          className={clsx('rounded-xl relative', {
            'bg-blue-card-border': theme === 'blue',
            'bg-purple-card-border': theme === 'purple',
            'bg-green-card-border': theme === 'green',
          })}
        >
          <div className="m-px h-full pt-10 pb-[43px] px-5 text-center rounded-xl relative z-30 lg:py-9 md:py-7">
            <Heading tag="h3" className="text-[32px] leading-snug lg:text-3xl md:text-2xl">
              {rightCard.title}
            </Heading>
            <p className="leading-snug text-white/60 max-w-80 mx-auto mt-1.5">
              {rightCard.description}
            </p>
            <Button
              className="mt-5 h-10 text-sm px-6"
              theme="gray-outline"
              to={rightCard.buttonLink}
            >
              {rightCard.buttonText}
            </Button>
          </div>
          {theme === 'blue' && (
            <StaticImage
              className="!absolute top-px left-px rounded-xl z-20 h-full w-full"
              src="./images/dots-blue.jpg"
              alt=""
              width={464}
              height={237}
              quality={100}
            />
          )}
          {theme === 'purple' && (
            <StaticImage
              className="!absolute top-px left-px rounded-xl z-20 h-full w-full"
              src="./images/dots-purple.jpg"
              alt=""
              width={464}
              height={237}
              quality={100}
            />
          )}
          {theme === 'green' && (
            <StaticImage
              className="!absolute top-px left-px rounded-xl z-20 h-full w-full"
              src="./images/dots-green.jpg"
              alt=""
              width={464}
              height={237}
              quality={100}
            />
          )}
          <StaticImage
            className="!absolute w-[717px] h-[553px] z-10 top-[-305px] left-[185px] sm:!hidden"
            src="./images/dots.png"
            alt=""
            width={717}
            height={553}
            quality={100}
          />
          <div
            className="absolute z-10 w-[194px] h-4 blur-sm bg-white rounded-[50%] -top-px right-1 mix-blend-plus-lighter sm:hidden"
            aria-hidden
          />
          <div
            className={clsx(
              'absolute pointer-events-none w-[370px] h-[382px] z-0 rounded-[50%] opacity-10 right-[-135px] top-[-150px] blur-3xl sm:hidden',
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
        'absolute w-[1136px] h-[490px] left-1/2 -translate-x-1/2 -top-4 rounded-[50%] blur-3xl opacity-[0.03] sm:top-24',
        {
          'bg-[linear-gradient(171.41deg,#F575E0_21.93%,#7599F5_84.89%)]': theme === 'purple',
          'bg-[linear-gradient(171.41deg,#7595F5_21.93%,#7599F5_84.89%)]': theme === 'blue',
          'bg-[linear-gradient(168.68deg,#75E0F5_7.69%,#9575F5_45.98%)]': theme === 'green',
        }
      )}
    />
    <div
      className={clsx(
        'absolute w-[1472px] h-[572px] left-1/2 -translate-x-1/2 -top-14 rounded-[50%] blur-3xl opacity-[0.03] sm:top-14',
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
  }).isRequired,
  rightCard: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string,
  }).isRequired,
  theme: PropTypes.oneOf(['blue', 'purple', 'green']),
};

CTA.defaultProps = {
  theme: 'purple',
};

export default CTA;
