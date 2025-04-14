import React from 'react';

import ArrowIcon from './images/arrow.inline.svg';
import MoreIcon from './images/more.inline.svg';
import SettingsIcon from './images/settings.inline.svg';

const NovuHeader = () => (
  <div className="relative z-20 mt-3.5 flex shrink-0 items-center justify-between px-[18px]">
    <div className="flex items-center">
      <span className="font-inter text-xl font-medium leading-none text-white">Inbox</span>
      <ArrowIcon className="ml-2 mr-auto mt-1.5 w-2.5" />
    </div>
    <div className="flex items-center">
      <MoreIcon className="mr-3.5 size-[26px]" />
      <SettingsIcon className="size-7" />
    </div>
  </div>
);

export default NovuHeader;
