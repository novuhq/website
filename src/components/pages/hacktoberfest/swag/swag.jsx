import { AnimatePresence, m, LazyMotion, domAnimation } from 'framer-motion';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';

import Heading from 'components/shared/heading';

const TITLE = 'Win a swag pack for just 3 merged PRs!';

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
  const [activeItem] = useState(0);
  const {
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
            gatsbyImageData(width: 842, quality: 95)
          }
        }
      }
    }
  `);
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
        <div className="mt-16 flex items-center justify-center">
          <div className="col-span-7 sm:col-span-full ">
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
        </div>
      </div>
    </section>
  );
};

export default Swag;
