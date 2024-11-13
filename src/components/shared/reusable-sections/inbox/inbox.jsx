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

const Inbox = ({ title, description, button }) => {
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
    <section className="inbox safe-paddings pb-8 mt-40 lg:mt-36 md:pb-0 md:mt-[104px] sm:mt-14 text-white">
      <div className="container-lg">
        <div className="flex items-center justify-center pl-8 sm:flex-col md:pl-0">
          <div className="relative h-[639px] w-[608px] shrink-0 lg:w-[531px] lg:h-[558px] md:w-[380px] md:h-[398px] sm:order-last">
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
            <div className="absolute left-0 right-0 -bottom-8 flex justify-center items-center sm:-bottom-14">
              <button
                className="opacity-90 transition-opacity duration-300 hover:opacity-100 disabled:opacity-30 px-2.5"
                type="button"
                disabled={activeTheme === 0}
                onClick={handlePreviousTheme}
              >
                <img className="rotate-180" src={arrowNext} alt="" width={10} height={16} />
                <span className="sr-only">Previous</span>
              </button>
              <div className="overflow-hidden relative w-[115px]">
                <motion.ul
                  className="relative flex transition-transform duration-300 gap-x-1"
                  style={{ x: labelsOffset }}
                >
                  {inboxData.map((data, index) => (
                    <li
                      className="w-[115px] h-full shrink-0 text-center text-sm font-medium leading-none text-gray-9 uppercase whitespace-nowrap"
                      key={index}
                    >
                      {data.title}
                    </li>
                  ))}
                </motion.ul>
              </div>
              <button
                className="opacity-90 transition-opacity duration-300 hover:opacity-100 disabled:opacity-30 px-2.5"
                type="button"
                disabled={activeTheme === inboxData.length - 1}
                onClick={handleNextTheme}
              >
                <img src={arrowNext} alt="" width={10} height={16} />
                <span className="sr-only">Next</span>
              </button>
            </div>
          </div>
          <div className="relative z-10 pl-32 pr-3 mb-[18px] xl:pl-20 xl:pr-0 md:pl-18 sm:pl-0 sm:mb-6 sm:text-center">
            <Heading
              className="font-medium leading-denser tracking-snug lg:text-5xl md:text-[32px] sm:text-3xl"
              tag="h2"
              size="xl"
            >
              {title}
            </Heading>
            <p className="mt-3 text-[17px] leading-snug md:text-sm font-book sm:max-w-[600px]">
              {description}
            </p>
            {button && (
              <Button
                className="h-14 px-6 text-sm min-w-[142px] mt-7 md:mt-5"
                theme="gray-outline"
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
  button: null,
};

export default Inbox;
