import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

const TableHeader = ({ title, linkText, linkUrl, activeTier }) => {
  const isActive = activeTier === title.toLowerCase();
  return (
    <div className="col-span-2 justify-between text-left md:text-center">
      <Heading className="font-medium" tag="h3" size="2xs">
        {title}
      </Heading>
      {linkText && linkUrl && (
        <Button
          className="relative mt-5 min-w-[140px] md:mt-3"
          theme={isActive ? 'pink-to-yellow-gradient' : 'gray-outline'}
          size="xs"
          to={linkUrl}
        >
          <span className="absolute top-1/2 left-1/2 z-50 -translate-y-1/2 -translate-x-1/2">
            {linkText}
          </span>
        </Button>
      )}
    </div>
  );
};

TableHeader.propTypes = {
  title: PropTypes.string.isRequired,
  linkText: PropTypes.string,
  linkUrl: PropTypes.string,
};

TableHeader.defaultProps = {
  linkText: null,
  linkUrl: null,
};

export default TableHeader;
