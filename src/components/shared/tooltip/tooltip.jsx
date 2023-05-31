import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';

const themeStyles = {
  gray: '!bg-gradient-to-b !from-gray-2 !to-gray-2 font-light text-sm leading-tight',
  'gray-2': '!bg-gray-gradient-4 !text-gray-9 font-light text-xs leading-snug',
  white: '!text-black !bg-gradient-to-b !from-gray-11 !to-gray-9 text-xs !opacity-100 leading-snug',
};

const Tooltip = ({ className, id, theme }) => {
  const [isTooltipVisible, setTooltipVisibility] = useState(false);

  useEffect(() => {
    setTooltipVisibility(true);
  }, []);

  return (
    isTooltipVisible && (
      <ReactTooltip
        className={clsx('z-10 !rounded-lg !p-4 before:hidden', className, themeStyles[theme])}
        place="top"
        effect="solid"
        id={id}
        arrowColor={theme === 'gray' ? '#1A1A1A' : '#CCCCCC'}
        multiline
      />
    )
  );
};

Tooltip.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  theme: PropTypes.oneOf(Object.keys(themeStyles)),
};

Tooltip.defaultProps = {
  className: null,
  id: 'tooltip',
  theme: 'gray',
};

export default Tooltip;
