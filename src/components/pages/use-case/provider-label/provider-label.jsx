import PropTypes from 'prop-types';
import React from 'react';

const ProviderLabel = ({ tagName, children }) => {
  const Tag = tagName;
  return (
    <Tag className="flex h-[22px] items-center rounded bg-gray-3 px-2.5 text-xs leading-none tracking-[0.01em] text-gray-9">
      {children}
    </Tag>
  );
};

ProviderLabel.propTypes = {
  tagName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ProviderLabel;
