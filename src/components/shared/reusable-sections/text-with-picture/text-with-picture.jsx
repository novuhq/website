import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

const TextWithPicture = ({
  className,
  title,
  description,
  image,
  imageClassName,
  button,
  theme,
}) => (
  <section
    className={clsx(
      'text-with-picture safe-paddings mt-40 lg:mt-36 md:mt-[104px] sm:mt-14',
      className
    )}
  >
    <div className="container-lg px-8 md:px-7 sm:px-4">
      <div
        className={clsx(
          'grid items-center justify-items-center sm:grid-cols-1',
          theme === 'imageFullWidth' ? 'grid-cols-1' : 'grid-cols-2'
        )}
      >
        <div
          className={clsx('relative z-10 sm:order-first sm:mb-6 sm:pl-0 sm:pr-0 sm:text-center', {
            'mb-12 max-w-[704px] text-center lg:mb-10 md:mb-8 md:max-w-lg sm:mb-6':
              theme === 'imageFullWidth',
            'order-last pl-24 lg:pl-16 md:pl-8': theme === 'imageLeft',
            'order-first pr-24 lg:pr-16 md:pr-8': theme === 'imageRight',
          })}
        >
          <Heading
            className="font-medium leading-denser tracking-snug lg:text-5xl md:text-[32px] sm:text-3xl"
            tag="h2"
            size="xl"
          >
            {title}
          </Heading>
          <p
            className={clsx(
              'mt-4 text-lg font-book tracking-snug text-gray-8',
              theme === 'imageFullWidth' ? 'sm:text-sm' : 'md:text-sm'
            )}
          >
            {description}
          </p>
          {button && theme !== 'imageFullWidth' && (
            <Button
              className="mt-8 md:mt-6 sm:mt-5"
              theme="gray-outline"
              size="sm"
              to={button.link}
              rel={button.rel}
              target={button.target}
            >
              {button.label}
            </Button>
          )}
        </div>
        <div className={clsx('overflow-hidden rounded-lg', imageClassName)}>{image}</div>
        {button && theme === 'imageFullWidth' && (
          <Button
            className="mt-9 md:mt-8 sm:mt-6"
            theme="gray-outline"
            size="sm"
            to={button.link}
            rel={button.rel}
            target={button.target}
          >
            {button.label}
          </Button>
        )}
      </div>
    </div>
  </section>
);

TextWithPicture.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
  imageClassName: PropTypes.string,
  button: PropTypes.shape({
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    rel: PropTypes.string,
    target: PropTypes.string,
  }),
  theme: PropTypes.oneOf(['imageLeft', 'imageRight', 'imageFullWidth']),
};

TextWithPicture.defaultProps = {
  className: '',
  button: null,
  theme: 'imageLeft',
  imageClassName: '',
};

export default TextWithPicture;
