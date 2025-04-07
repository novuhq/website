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
    <div className="aspect-[220/124] overflow-hidden rounded-md border border-[#333347]/50 bg-[linear-gradient(294deg,rgba(0,0,0,0)_45.36%,rgba(0,0,0,0.7)_126.53%),linear-gradient(120deg,rgba(0,0,0,0)_54.73%,rgba(0,0,0,0.8)_112.66%),linear-gradient(73deg,rgba(0,0,0,0)_17.56%,rgba(27,64,79,0.2)_79.95%),linear-gradient(252deg,rgba(29,23,50,0)_-8.69%,rgba(46,37,83,0.2)_100%),linear-gradient(180deg,#111427_0%,#0F122D_43.27%,#0F1223_100%)]">
      <img src={image} alt="" loading="eager" fetchPriority="high" decoding="sync" />
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
          <ul className="relative z-20 -mt-1 pb-5 sm:mt-1">
            {openMenu?.content.map(({ type, items, content }, index) => (
              <li key={index}>
                {items && items.length > 0 && (
                  <ul className="mt-auto flex flex-col gap-y-3">
                    {items.map(({ text, ...linkProps }, index) => (
                      <li key={index}>
                        <Link
                          className="font-light leading-none opacity-90 hover:opacity-100 focus-visible:opacity-100"
                          size="base"
                          theme="gray-11"
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
