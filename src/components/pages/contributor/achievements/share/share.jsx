import clsx from 'clsx';
import copyToClipboard from 'copy-to-clipboard';
import { AnimatePresence, m, LazyMotion, domAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { LinkedinShareButton, TwitterShareButton, FacebookShareButton } from 'react-share';

import Button from 'components/shared/button';
import Modal from 'components/shared/modal';
import FacebookIcon from 'icons/facebook.inline.svg';

import EmbedIcon from './images/embed.inline.svg';
import LinkIcon from './images/link.inline.svg';
import LinkedinIcon from './images/linkedin.inline.svg';
import ShareIcon from './images/share.inline.svg';
import TwitterIcon from './images/twitter.inline.svg';

export const SHARE_TYPES = {
  social: 'social',
  embed: 'embed',
};

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

export const Share = ({ type, imageUrl, url }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const isSocialType = type === SHARE_TYPES.social;

  const buttonText = isSocialType ? 'Share' : 'Embed';
  const Icon = isSocialType ? ShareIcon : EmbedIcon;

  const EMBED_CODE = `<a href="${url}"><img src="${imageUrl}" height="170" width="450" alt="" /></a>`;

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModal = () => setIsOpen(true);

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
    <>
      <button
        className="flex items-center space-x-1.5 text-sm font-light"
        type="button"
        onClick={handleOpenModal}
      >
        <Icon className="h-2.5" />
        <span>{buttonText}</span>
      </button>
      <Modal isOpen={isOpen} closeModal={handleCloseModal}>
        <img
          className="rounded-md"
          src={imageUrl}
          width={476}
          height={isSocialType ? 234 : 180}
          loading="eager"
          alt=""
          aria-hidden
        />

        {isSocialType ? (
          <div className="mt-4 flex justify-center space-x-5">
            <TwitterShareButton url={url} resetButtonStyle={false}>
              <TwitterIcon className="h-5 transition-opacity duration-200 hover:opacity-80" />
            </TwitterShareButton>
            <FacebookShareButton url={url} resetButtonStyle={false}>
              <FacebookIcon className="h-5 transition-opacity duration-200 hover:opacity-80" />
            </FacebookShareButton>
            <LinkedinShareButton url={url} resetButtonStyle={false}>
              <LinkedinIcon className="h-5 transition-opacity duration-200 hover:opacity-80" />
            </LinkedinShareButton>
            <button className="group relative" type="button" onClick={handleCopy(url)}>
              {isCopied && (
                <LazyMotion features={domAnimation}>
                  <AnimatePresence>
                    <m.span
                      className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded bg-black px-1.5 py-1 text-xs font-normal capitalize text-white opacity-50 md:-ml-2"
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={variants}
                    >
                      Copied!
                    </m.span>
                  </AnimatePresence>
                </LazyMotion>
              )}

              <LinkIcon className="h-5 transition-opacity duration-200 group-hover:opacity-80" />
            </button>
          </div>
        ) : (
          <div className="relative mt-4 flex h-12 w-full items-center justify-between rounded-md bg-black pl-4 pr-32">
            <span className="scrollbar-hidden max-w-full overflow-x-scroll whitespace-nowrap font-mono text-sm text-white">
              {EMBED_CODE}
            </span>

            <Button
              className="absolute right-1.5 h-9"
              size="xs"
              theme="white-filled"
              onClick={handleCopy(EMBED_CODE)}
            >
              <span className={clsx({ 'opacity-0': isCopied })}>Copy Code</span>
              <span
                className={clsx(
                  'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0',
                  { 'opacity-100': isCopied }
                )}
              >
                Copied!
              </span>
            </Button>
          </div>
        )}
      </Modal>
    </>
  );
};

Share.propTypes = {
  type: PropTypes.oneOf(Object.keys(SHARE_TYPES)).isRequired,
  imageUrl: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
