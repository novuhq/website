import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';
import React from 'react';

import Button from 'components/shared/button';
import ChevronIcon from 'icons/chevron-small.inline.svg';

const SubMenu = ({ children, isOpen, setIsOpen }) => {
  const handleCloseButton = () => {
    setIsOpen(false);
  };

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {isOpen && (
          <m.div
            className="absolute inset-0 z-50"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.4,
            }}
          >
            <Button
              className="absolute top-[-65px] left-7 h-16 w-28 flex items-center !justify-start gap-x-1 !normal-case text-xl font-normal bg-black sm:top-[-61px] sm:h-[60px] sm:left-4 sm:text-[15px]"
              type="button"
              onClick={handleCloseButton}
            >
              <ChevronIcon className="w-4 h-4 rotate-90" />
              Back
            </Button>
            <ul className="h-full bg-black overflow-x-hidden overflow-y-scroll">{children}</ul>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
};

export default SubMenu;
