import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

import InboxComponent from '../inbox-component';

const InboxWrapper = ({ sectionOffsets, title, description, button, inboxPosition }) => (
  <section
    className={clsx(
      'inbox safe-paddings mt-40 pb-[52px] text-white lg:mt-36 md:mt-[104px] sm:mt-14',
      sectionOffsets
    )}
  >
    <div className="container-lg">
      <div
        className={clsx(
          'flex items-center gap-x-24 md:gap-x-18 sm:flex-col sm:gap-y-12',
          inboxPosition === 'right'
            ? 'flex-row-reverse justify-end md:justify-center'
            : 'flex-row justify-start'
        )}
      >
        <InboxComponent sectionOffsets={sectionOffsets} />
        <div
          className={clsx(
            'relative z-10 sm:max-w-lg sm:text-center',
            inboxPosition === 'right' && 'max-w-[480px] xl:max-w-full md:max-w-[380px]'
          )}
        >
          <Heading
            className="font-medium leading-denser tracking-snug lg:text-5xl md:text-[32px] sm:text-3xl"
            tag="h2"
            size="xl"
          >
            {title}
          </Heading>
          <p className="mt-4 text-pretty text-lg font-book tracking-snug text-gray-8 md:text-sm">
            {description}
          </p>
          {button && (
            <Button
              className="mt-8"
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
    </div>
  </section>
);

InboxWrapper.propTypes = {
  sectionOffsets: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.shape({
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    rel: PropTypes.string,
    target: PropTypes.string,
  }),
  inboxPosition: PropTypes.oneOf(['right', 'left']),
};

InboxWrapper.defaultProps = {
  inboxPosition: 'left',
  sectionOffsets: '',
  button: null,
};

export default InboxWrapper;
