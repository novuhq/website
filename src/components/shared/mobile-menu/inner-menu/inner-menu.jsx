import { AnimatePresence, m, LazyMotion, domAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

const ANIMATION_DURATION = 0.2;

const variants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
};

const InnerContent = ({ title, description, url, image }) => (
  <Link
    className="group mt-8 block w-full max-w-[257px] sm-xs:max-w-none"
    to={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="aspect-[220/124] overflow-hidden rounded-md border border-[#333347]/50">
      <img className="" src={image} alt="" />
    </div>
    <p className="mt-3 line-clamp-2 font-medium leading-tight text-white group-hover:text-primary-1 group-focus-visible:text-primary-1">
      {title}
    </p>
    <p className="mt-1.5 line-clamp-3 text-sm font-light leading-tight text-[#909090]">
      {description}
    </p>
  </Link>
);

const InnerMenu = ({ openMenu, label, changelog, post }) => (
  <LazyMotion features={domAnimation}>
    <AnimatePresence>
      {openMenu?.label === label && (
        <m.div initial="hidden" animate="visible" exit="hidden" variants={variants}>
          <ul className="relative z-20 -mt-1 pb-5 sm-xs:mt-1.5">
            {openMenu?.content.map(({ type, items, content }, index) => (
              <li key={index}>
                {items && items.length > 0 && (
                  <ul className="mt-auto flex flex-col gap-y-3">
                    {items.map(({ text, ...linkProps }, index) => (
                      <li key={index}>
                        <Link
                          className="font-light leading-none"
                          size="base"
                          theme="white"
                          {...linkProps}
                          tabIndex={0}
                        >
                          {text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                {type === 'changelog' && <InnerContent {...changelog} />}
                {type === 'post' && <InnerContent {...post} />}
                {type === 'link' && <InnerContent {...content} />}
              </li>
            ))}
          </ul>
        </m.div>
      )}
    </AnimatePresence>
  </LazyMotion>
);

InnerMenu.propTypes = {
  openMenu: PropTypes.shape({
    items: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      icon: PropTypes.string,
      image: PropTypes.string,
      to: PropTypes.string,
      items: PropTypes.array,
    }),
    label: PropTypes.string,
  }),
  label: PropTypes.string,
  changelog: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  post: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

InnerMenu.defaultProps = {
  openMenu: '',
  label: '',
};

export default InnerMenu;
