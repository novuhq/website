import clsx from 'clsx';
import { motion, useMotionValue, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

import AdaptiveStatic from './adaptive-static';
import Container from './container';
import inboxData from './data';
import arrowNext from './images/arrow-next.svg';

const LABEL_WIDTH = 115;
const OFFSET_WIDTH = 4;

const Inbox = ({ sectionOffsets, title, description, button }) => {
  const [activeTheme, setActiveTheme] = useState(0);

  const labelsOffset = useMotionValue((LABEL_WIDTH + OFFSET_WIDTH) * activeTheme);

  const handlePreviousTheme = () => {
    setActiveTheme((prev) => {
      if (prev > 0) {
        labelsOffset.set(-(LABEL_WIDTH + OFFSET_WIDTH) * (prev - 1));
        return prev - 1;
      }

      return prev;
    });
  };

  const handleNextTheme = () => {
    setActiveTheme((prev) => {
      if (prev < inboxData.length - 1) {
        labelsOffset.set(-(LABEL_WIDTH + OFFSET_WIDTH) * (prev + 1));
        return prev + 1;
      }

      return prev;
    });
  };

  return (
    <section
      className={clsx(
        'inbox safe-paddings mt-40 pb-8 text-white lg:mt-36 md:mt-[104px] md:pb-0 sm:mt-14',
        sectionOffsets
      )}
    >
      <div className="container-lg">
        <div className="flex items-center justify-center pl-8 md:pl-0 sm:flex-col">
          <div className="relative h-[639px] w-[608px] shrink-0 lg:h-[558px] lg:w-[531px] md:h-[398px] md:w-[380px] sm:order-last sm:aspect-[380/398] sm:h-auto sm:w-full sm:max-w-[380px]">
            <LazyMotion features={domAnimation}>
              {inboxData.map((data, index) => (
                <AnimatePresence mode="wait">
                  {index === activeTheme && (
                    <>
                      <Container
                        theme={data.theme}
                        categories={data.categories}
                        messages={data.messages}
                      />
                      <AdaptiveStatic className="hidden md:block" theme={data.theme} />
                    </>
                  )}
                </AnimatePresence>
              ))}
            </LazyMotion>
            <div className="absolute -bottom-8 left-0 right-0 flex items-center justify-center sm:-bottom-14">
              <button
                className="px-2.5 opacity-90 transition-opacity duration-300 hover:opacity-100 disabled:opacity-30"
                type="button"
                disabled={activeTheme === 0}
                onClick={handlePreviousTheme}
              >
                <img className="rotate-180" src={arrowNext} alt="" width={10} height={16} />
                <span className="sr-only">Previous</span>
              </button>
              <div className="relative w-[115px] overflow-hidden">
                <motion.ul
                  className="relative flex gap-x-1 transition-transform duration-300"
                  style={{ x: labelsOffset }}
                >
                  {inboxData.map((data, index) => (
                    <li
                      className="h-full w-[115px] shrink-0 whitespace-nowrap text-center text-sm font-medium uppercase leading-none text-gray-9"
                      key={index}
                    >
                      {data.title}
                    </li>
                  ))}
                </motion.ul>
              </div>
              <button
                className="px-2.5 opacity-90 transition-opacity duration-300 hover:opacity-100 disabled:opacity-30"
                type="button"
                disabled={activeTheme === inboxData.length - 1}
                onClick={handleNextTheme}
              >
                <img src={arrowNext} alt="" width={10} height={16} />
                <span className="sr-only">Next</span>
              </button>
            </div>
          </div>
          <div className="relative z-10 mb-[18px] pl-24 pr-3 xl:pl-20 xl:pr-0 md:pl-18 sm:mb-6 sm:max-w-lg sm:pl-0 sm:text-center">
            <Heading
              className="font-medium leading-denser tracking-snug lg:text-5xl md:text-[32px] sm:text-3xl"
              tag="h2"
              size="xl"
            >
              {title}
            </Heading>
            <p className="mt-4 text-pretty text-lg font-book tracking-snug text-gray-8 md:text-sm">
              {description}
            </p>
            {button && (
              <Button
                className="mt-8"
                theme="gray-outline"
                size="sm"
                to={button.link}
                rel={button.rel}
                target={button.target}
              >
                {button.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

Inbox.propTypes = {
  sectionOffsets: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.shape({
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    rel: PropTypes.string,
    target: PropTypes.string,
  }),
};

Inbox.defaultProps = {
  sectionOffsets: '',
  button: null,
};

export default Inbox;
