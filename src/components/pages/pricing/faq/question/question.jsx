import clsx from 'clsx';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

import ChevronIcon from 'icons/chevron.inline.svg';
import { buttonClick } from 'utils/use-landing-simple-tracking';

const ANIMATION_DURATION = 0.3;

const variantsAnimation = {
  hidden: { height: 0 },
  visible: { height: 'auto' },
};

const Question = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleButtonClick = () => {
    setIsOpen((currentState) => !currentState);
    buttonClick('faq_read', { type: 'faq_read' });
    window?.analytics?.track('Pricing Event: Click on an item in the FAQ section', {
      item: question,
    });
  };
  return (
    <li>
      <button
        className="inline-flex w-full items-center justify-between pb-4 pt-5 sm:space-x-10"
        type="button"
        onClick={handleButtonClick}
      >
        <span className="text-left text-2xl leading-denser md:text-[22px] sm:text-lg sm:leading-tight">
          {question}
        </span>
        <ChevronIcon
          className={clsx(
            'h-auto w-4 shrink-0 transition-transform duration-200 md:w-3 2xs:w-2.5',
            isOpen && '-rotate-180'
          )}
        />
      </button>
      <motion.div
        className="overflow-hidden"
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        variants={variantsAnimation}
        transition={{ duration: ANIMATION_DURATION }}
      >
        <div className="pb-5 pt-3 text-left text-lg font-book text-gray-10 md:mr-14 sm:mr-7 sm:text-base">
          {answer}
        </div>
      </motion.div>
    </li>
  );
};

export default Question;
