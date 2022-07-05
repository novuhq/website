import copyToClipboard from 'copy-to-clipboard';
import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { LinkedinShareButton, TwitterShareButton, FacebookMessengerShareButton } from 'react-share';

import FacebookIcon from 'icons/facebook.inline.svg';

import LinkIcon from './images/link.inline.svg';
import LinkedinIcon from './images/linkedin.inline.svg';
import TwitterIcon from './images/twitter.inline.svg';

const ANIMATION_DURATION = 0.2;
const MOTION_EASY = [0.25, 0.1, 0.25, 1];

const variants = {
  hidden: {
    opacity: 0,

    transition: {
      duration: ANIMATION_DURATION,
      ease: MOTION_EASY,
    },
  },
  visible: {
    opacity: 1,

    transition: {
      duration: ANIMATION_DURATION,
      ease: MOTION_EASY,
    },
  },
};

const Share = ({ url }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (text) => () => {
    if (!isCopied) {
      copyToClipboard(text, { onCopy: setIsCopied(true) });
    }
  };

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    }
  }, [isCopied]);

  return (
    <div className="flex justify-center space-x-3 md:space-x-2 sm:space-x-3">
      <TwitterShareButton
        className="flex h-9 w-14 items-center justify-center rounded-md border border-gray-4 md:h-8 md:w-[46px] sm:w-14"
        url={url}
        resetButtonStyle={false}
      >
        <TwitterIcon className="h-5 transition-opacity duration-200 hover:opacity-80" />
      </TwitterShareButton>
      <FacebookMessengerShareButton
        className="flex h-9 w-14 items-center justify-center rounded-md border border-gray-4 md:h-8 md:w-[46px] sm:w-14"
        url={url}
        resetButtonStyle={false}
      >
        <FacebookIcon className="h-5 transition-opacity duration-200 hover:opacity-80" />
      </FacebookMessengerShareButton>
      <LinkedinShareButton
        className="flex h-9 w-14 items-center justify-center rounded-md border border-gray-4 md:h-8 md:w-[46px] sm:w-14"
        url={url}
        resetButtonStyle={false}
      >
        <LinkedinIcon className="h-5 transition-opacity duration-200 hover:opacity-80" />
      </LinkedinShareButton>
      <button
        className="group relative flex h-9 w-14 items-center justify-center rounded-md border border-gray-4 md:h-8 md:w-[46px] sm:w-14"
        type="button"
        onClick={handleCopy(url)}
      >
        <AnimatePresence>
          {isCopied && (
            <motion.span
              className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded bg-black py-1 px-1.5 text-xs font-normal capitalize text-white opacity-50 md:-ml-2"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
            >
              Copied!
            </motion.span>
          )}
        </AnimatePresence>

        <LinkIcon className="h-5 transition-opacity duration-200 group-hover:opacity-80" />
      </button>
    </div>
  );
};

Share.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Share;
