import PropTypes from 'prop-types';
import React from 'react';

const ProviderLabel = ({ tagName, children }) => {
  const Tag = tagName;
  return (
    <Tag className="flex gap-x-1.5 rounded bg-gray-3 px-2.5 pb-1.5 pt-1 text-xs leading-none tracking-[0.01em] text-gray-9">
      {children}
    </Tag>
  );
};

ProviderLabel.propTypes = {
  tagName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ProviderLabel;
