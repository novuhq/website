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
              className="fixed left-7 top-0 flex h-16 w-28 items-center !justify-start gap-x-1 bg-black text-xl font-normal !normal-case sm:left-4 sm:h-[56px] sm:text-[15px]"
              type="button"
              onClick={handleCloseButton}
            >
              <ChevronIcon className="h-3.5 w-3.5 rotate-90" />
              Back
            </Button>
            <ul className="h-full overflow-x-hidden overflow-y-scroll bg-black">{children}</ul>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
};

export default SubMenu;
