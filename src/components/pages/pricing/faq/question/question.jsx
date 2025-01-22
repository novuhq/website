import clsx from 'clsx';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

import ChevronIcon from 'icons/faq-arrow.inline.svg';
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
        className="inline-flex w-full items-center justify-between pb-4 pt-5 sm:gap-x-6 sm:pt-[18px]"
        type="button"
        onClick={handleButtonClick}
      >
        <span className="text-start text-[20px] font-medium leading-snug tracking-snug sm:text-[18px]">
          {question}
        </span>
        <ChevronIcon
          className={clsx(
            'mr-1.5 h-auto w-4 shrink-0 transition-transform duration-200 md:mr-3 sm:mr-[5px]',
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
        <div className="max-w-[752px] pb-7 pt-0 text-[18px] font-book leading-normal tracking-snug text-gray-8 md:mr-14 sm:mr-7 sm:pb-[22px] sm:text-[16px]">
          {answer}
        </div>
      </motion.div>
    </li>
  );
};

export default Question;
