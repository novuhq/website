import clsx from 'clsx';
import { AnimatePresence, m, LazyMotion, domAnimation } from 'framer-motion';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

const TITLE = 'Win a swag pack for just 3 merged PRs!';
const SUBTITLE = 'Very special Novu T-shirts + Stickers pack';
const BUTTON_TEXT = "CLAIM YOUR NOVU'S SWAG 🎉";
const BUTTON_URL = 'https://hacksquad.dev/novu';

const swagAnimationProps = {
  initial: {
    opacity: 0,
    translateY: 20,
  },
  animate: {
    opacity: 1,
    translateY: 0,
    transition: { ease: [0.25, 0.1, 0, 1], duration: 1 },
  },
  exit: {
    opacity: 0,
    transition: { ease: [0.25, 0.1, 0, 1], duration: 0.3 },
  },
};

const Swag = () => {
  const [activeItem, setActiveItem] = useState(0);
  const {
    thumbnails: { nodes: thumbnails },
    swagPacks: { nodes: swagPacks },
  } = useStaticQuery(graphql`
    query {
      thumbnails: allFile(
        filter: { relativePath: { regex: "/hacktoberfest/swag/image/" } }
        sort: { fields: name, order: ASC }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData(width: 86)
          }
        }
      }
      swagPacks: allFile(
        filter: { relativePath: { regex: "/hacktoberfest/swag/swag/" } }
        sort: { fields: name, order: ASC }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData(width: 842, quality: 95)
          }
        }
      }
    }
  `);
  const handleClickButton = (index) => {
    setActiveItem(index);
  };
  return (
    <section className="swag safe-paddings mt-32 lg:mt-24 md:mt-20 sm:mt-16">
      <div className="container-lg max-w-[1220px]">
        <Heading
          className="text-center leading-tight md:text-5xl sm:text-4xl"
          tag="h2"
          size="xl"
          theme="white"
        >
          {TITLE}
        </Heading>
        <div className="mt-16 grid grid-cols-10 gap-x-10 md:mt-12 md:gap-x-8 sm:mt-10 sm:gap-y-8">
          <div className="col-span-7 sm:col-span-full">
            <LazyMotion features={domAnimation}>
              <AnimatePresence initial={false} exitBeforeEnter>
                {swagPacks.map(({ childImageSharp }, index) =>
                  index === activeItem ? (
                    <m.div key={index} {...swagAnimationProps}>
                      <GatsbyImage
                        className="rounded-[20px] md:rounded-2xl"
                        imgClassName="rounded-[20px] md:rounded-2xl"
                        image={getImage(childImageSharp)}
                        alt={`Swag pack ${index + 1}`}
                        loading="lazy"
                      />
                    </m.div>
                  ) : null
                )}
              </AnimatePresence>
            </LazyMotion>
          </div>
          <div className="col-span-3 flex flex-col sm:col-span-full sm:items-center">
            <Heading
              className="leading-tight lg:text-xl md:text-lg"
              theme="white"
              size="xs"
              tag="h3"
            >
              {SUBTITLE}
            </Heading>
            <div className="mt-11 grid grid-cols-3 gap-10 lg:mt-8 md:mt-5 md:gap-4 sm:flex sm:flex-wrap sm:justify-center sm:gap-3">
              {thumbnails.map(({ childImageSharp }, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Choose swag pack ${index + 1}`}
                  onClick={() => handleClickButton(index)}
                >
                  <GatsbyImage
                    className={clsx(
                      'rounded-[10px] transition-[box-shadow] duration-300 ease-in-out md:rounded-lg',
                      index === activeItem ? 'shadow-[0_0_0_2px_#FFE14D]' : 'shadow-transparent'
                    )}
                    imgClassName="rounded-[10px] md:rounded-lg"
                    image={getImage(childImageSharp)}
                    alt={`Swag pack ${index + 1}`}
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
            <Button
              className="mt-auto md:h-10 sm:mt-6"
              theme="white-filled"
              size="sm"
              to={BUTTON_URL}
            >
              {BUTTON_TEXT}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Swag;
