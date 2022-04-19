import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';

import Form from './form';
import bg from './images/bg.svg';

const TITLE = 'Subscribe to the blog updates';
const DESCRIPTION =
  "Novu's latest articles, right in your inbox. Keep in touch with our news and updates.";

const Subscribe = ({ className }) => (
  <section
    className={clsx(
      'subscribe safe-paddings relative overflow-hidden bg-black pt-24 pb-24',
      className
    )}
  >
    <div className="container relative z-10 flex flex-col items-center">
      <Heading
        className="max-w-[789px] text-center font-normal leading-tight"
        size="xl"
        tag="h2"
        theme="white"
      >
        {TITLE}
      </Heading>
      <p className="mt-5 text-center text-lg font-light text-gray-8 lg:max-w-[716px]">
        {DESCRIPTION}
      </p>
      <Form />
    </div>

    <img
      className="absolute top-1/2 left-1/2 min-w-[1920px] -translate-x-1/2 -translate-y-1/2"
      src={bg}
      loading="lazy"
      alt=""
      aria-hidden
    />
  </section>
);

Subscribe.propTypes = {
  className: PropTypes.string,
};

Subscribe.defaultProps = {
  className: null,
};

export default Subscribe;
