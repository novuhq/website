import React, { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';

const Tooltip = () => {
  const [isTooltipVisible, setTooltipVisibility] = useState(false);

  useEffect(() => {
    setTooltipVisibility(true);
  }, []);

  return (
    isTooltipVisible && (
      <ReactTooltip
        className="z-10 max-w-[248px] !rounded-lg bg-gradient-to-b from-gray-2 to-[rgba(26,26,26,0.7)] !p-4 text-sm font-light leading-tight"
        place="top"
        effect="solid"
        offset={{ top: 10 }}
        multiline
      />
    )
  );
};

export default Tooltip;
