import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const styles = {
  base: 'relative after:absolute after:z-10 after:w-full after:border-t after:border-dashed after:border-gray-4',
  backgroundColor: {
    black: 'after:border-gray-4',
    gray: 'after:border-gray-5',
  },
};

const Separator = ({ backgroundColor }) => (
  <div className="separator container">
    <div className={clsx(styles.base, styles.backgroundColor[backgroundColor])} />
  </div>
);

Separator.propTypes = {
  backgroundColor: PropTypes.oneOf(Object.keys(styles.backgroundColor)).isRequired,
};

export default Separator;
