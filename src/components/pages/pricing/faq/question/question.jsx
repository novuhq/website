import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
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
        className="inline-flex w-full items-center justify-between pb-5 pt-6 sm:gap-x-6 sm:pb-4 sm:pt-5"
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="overflow-hidden"
            initial="hidden"
            animate={isOpen ? 'visible' : 'hidden'}
            variants={variantsAnimation}
            exit="hidden"
            transition={{ duration: ANIMATION_DURATION }}
          >
            <div className="max-w-[752px] pb-8 pt-2 text-[18px] font-book leading-relaxed tracking-snug text-gray-8 md:mr-14 sm:mr-7 sm:pb-6 sm:text-[16px] sm:leading-normal [&_br]:mb-3 [&_br]:block">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export default Question;
