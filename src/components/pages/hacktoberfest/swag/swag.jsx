import clsx from 'clsx';
import { AnimatePresence, m, LazyMotion, domAnimation } from 'framer-motion';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';

// import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

const TITLE = 'Win a swag pack for just 3 merged PRs!';
const SUBTITLE = 'Very special Novu T-shirts + Stickers pack';
// const BUTTON_TEXT = "CLAIM YOUR NOVU'S SWAG 🎉";
// const BUTTON_URL = 'https://hacksquad.dev/novu';

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
    {
      thumbnails: allFile(
        filter: { relativePath: { regex: "/hacktoberfest/swag/image/" } }
        sort: { name: ASC }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData(width: 86)
          }
        }
      }
      swagPacks: allFile(
        filter: { relativePath: { regex: "/hacktoberfest/swag/swag/" } }
        sort: { name: ASC }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData(width: 842, quality: 99)
          }
        }
      }
    }
  `);
  const handleClickButton = (index) => {
    setActiveItem(index);
  };

  const thumbnailsNormal = thumbnails.slice(0, 6);
  const thumbnailsPremium = thumbnails.slice(6, 12);

  return (
    <section className="swag safe-paddings py-32 lg:py-24 md:py-20 sm:py-16">
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
              <AnimatePresence initial={false} mode="wait">
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
              {thumbnailsNormal.map(({ childImageSharp }, index) => (
                <button
                  key={`${index}-button`}
                  type="button"
                  aria-label={`Choose swag pack ${index + 1}`}
                  onClick={() => handleClickButton(index)}
                >
                  <GatsbyImage
                    className={clsx(
                      'relative rounded-[10px] before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:rounded-[10px] before:border-2 before:border-transparent before:transition-colors before:duration-300 before:ease-in-out md:rounded-lg',
                      {
                        'before:!border-purple': index === activeItem,
                      }
                    )}
                    imgClassName="rounded-[10px] md:rounded-lg"
                    image={getImage(childImageSharp)}
                    alt={`Swag pack ${index + 1}`}
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
            <div className="mt-8">
              <div className="flex items-center">
                <div className="block h-0.5 flex-1 bg-yellow" />
                <div className="text-highlighting-yellow-gradient">
                  <span className="px-2.5 text-lg font-medium uppercase">premium</span>
                </div>
                <div className="block h-0.5 flex-1 bg-yellow" />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-10 md:gap-4 sm:flex sm:flex-wrap sm:justify-center sm:gap-3">
                {thumbnailsPremium.map(({ childImageSharp }, index) => {
                  const premiumIndex = index + thumbnailsNormal.length;

                  return (
                    <button
                      key={`${index}-button`}
                      type="button"
                      aria-label={`Choose swag pack ${premiumIndex}`}
                      onClick={() => handleClickButton(premiumIndex)}
                    >
                      <GatsbyImage
                        className={clsx(
                          'relative rounded-[10px] shadow-[0px_0px_30px_rgba(255,226,125,0.50),0px_0px_10px_rgba(255,226,125,0.40),0px_0px_3px_rgba(255,226,125,0.60)] before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:rounded-[10px] before:border-2 before:border-transparent before:transition-colors before:duration-300 before:ease-in-out md:rounded-lg',
                          {
                            'before:!border-yellow': premiumIndex === activeItem,
                          }
                        )}
                        imgClassName="rounded-[10px] md:rounded-lg"
                        image={getImage(childImageSharp)}
                        alt={`Swag pack ${premiumIndex}`}
                        loading="lazy"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
            {/* <Button
              className="mt-auto md:h-10 sm:mt-6"
              theme="white-filled"
              size="sm"
              to={BUTTON_URL}
            >
              {BUTTON_TEXT}
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Swag;
