import { motion, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import Link from 'components/shared/link';
import MENUS from 'constants/menus';

const ANIMATION_DURATION = 0.2;

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
    } else {
      controls.start('from');
    }
  }, [isOpen, controls]);

  return (
    <motion.nav
      // TODO: these styles are set as an example, please contact the design department to apply the desired design
      className="absolute right-8 top-20 left-8 z-[-1] hidden rounded-md bg-white px-8 pt-4 pb-7 lg:block md:right-4 md:left-4"
      initial="from"
      animate={controls}
      variants={variants}
    >
      <ul className="flex flex-col text-center">
        {MENUS.header.map(({ text, to }, index) => (
          <li key={index}>
            {/* TODO: Add needed props so the link would have styles */}
            <Link className="block py-4" to={to}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
      {/* TODO: Add a button if needed */}
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
