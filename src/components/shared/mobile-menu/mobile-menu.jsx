import { motion, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import Button from 'components/shared/button/button';
import Link from 'components/shared/link';
import GITHUB from 'constants/github';
import MENUS from 'constants/menus';
import GitHubLogo from 'images/logo-github.inline.svg';

const ANIMATION_DURATION = 0.2;
const RIGHT_BUTTON_TEXT = 'Get Started';
const RIGHT_BUTTON_URL = '/';

const variants = {
  from: {
    opacity: 0,
    translateY: 30,
    transition: {
      duration: ANIMATION_DURATION,
    },
    transitionEnd: {
      zIndex: -1,
    },
  },
  to: {
    zIndex: 999,
    opacity: 1,
    translateY: 0,
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
};

const MobileMenu = ({ isOpen }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isOpen) {
      controls.start('to');
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      controls.start('from');
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
  }, [isOpen, controls]);

  return (
    <motion.nav
      className="fixed top-20 z-10 h-screen w-full min-w-[360px] rounded-md bg-mobile-menu-gradient pt-4 pb-7 lg:block"
      initial="from"
      animate={controls}
      variants={variants}
    >
      <ul className="mx-9 flex flex-col pt-[120px] pb-[180px] text-center">
        {MENUS.header.map(({ to, title }, index) => (
          <li
            key={index}
            className="even:border-b-[1px] even:border-t-[1px] even:border-dashed even:border-white  even:border-opacity-20"
          >
            <Link
              className="block w-full py-6 text-center text-2xl"
              theme="white"
              size="xl"
              to={to}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex w-full justify-between px-4 pb-4">
        <Button
          className="mr-4 flex-auto"
          to={GITHUB.repoUrl}
          target="_blank"
          size="xs"
          theme="gray-outline"
        >
          <GitHubLogo className="mr-2 h-[26px] w-[26px]" />
          <span>Star us</span>
        </Button>

        <Button
          className="flex-auto sm:h-10 sm:text-xs"
          to={RIGHT_BUTTON_URL}
          size="xs"
          theme="white-filled"
        >
          {RIGHT_BUTTON_TEXT}
        </Button>
      </div>
    </motion.nav>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool,
};

MobileMenu.defaultProps = {
  isOpen: false,
};

export default MobileMenu;
