import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

const BUTTON_CLASSNAME = 'h-14 px-6 text-sm min-w-[142px]';

const TextWithPicture = ({ title, description, image, button, theme }) => (
  <section className="text-with-picture safe-paddings mt-40 lg:mt-36 md:mt-[104px] sm:mt-14">
    <div className={clsx('container-lg', { 'max-w-6xl': theme === 'imageFullWidth' })}>
      <div
        className={clsx(
          'grid items-center justify-items-center sm:grid-cols-1',
          theme === 'imageFullWidth' ? 'grid-cols-1' : 'grid-cols-2'
        )}
      >
        <div
          className={clsx('sm:order-first sm:pl-0 sm:mb-6 sm:text-center', {
            'text-center max-w-[688px] mb-12 lg:mb-10 md:mb-8 sm:mb-6': theme === 'imageFullWidth',
            'pl-24 order-last lg:pl-16 md:pl-8': theme === 'imageLeft',
            'pr-24 order-first lg:pr-16 md:pr-8': theme === 'imageRight',
          })}
        >
          <Heading
            className="font-medium leading-denser tracking-snug lg:text-5xl md:text-[32px] sm:text-3xl"
            tag="h2"
            size="44"
          >
            {title}
          </Heading>
          <p className="mt-3 text-[17px] leading-snug md:text-sm">{description}</p>
          {button && theme !== 'imageFullWidth' && (
            <Button
              className={clsx(BUTTON_CLASSNAME, 'mt-7 md:mt-5')}
              theme="gray-outline"
              to={button.link}
            >
              {button.label}
            </Button>
          )}
        </div>
        <div className="overflow-hidden rounded-2xl lg:rounded-xl md:rounded-2xl sm:rounded-lg">
          {image}
        </div>
        {button && theme === 'imageFullWidth' && (
          <Button
            className={clsx(BUTTON_CLASSNAME, 'mt-12 lg:mt-10 md:mt-8 sm:mt-6')}
            theme="gray-outline"
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
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
  button: PropTypes.shape({
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    rel: PropTypes.string,
    target: PropTypes.string,
  }),
  theme: PropTypes.oneOf(['imageLeft', 'imageRight', 'imageFullWidth']),
};

TextWithPicture.defaultProps = {
  button: null,
  theme: 'imageLeft',
};

export default TextWithPicture;
