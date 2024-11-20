import React from 'react';

import ArrowIcon from './images/arrow.inline.svg';
import InboxText from './images/inbox-text.inline.svg';
import MoreIcon from './images/more.inline.svg';
import SettingsIcon from './images/settings.inline.svg';

const NovuHeader = () => (
  <div className="relative z-20 flex items-center justify-between h-14 px-[22px] shrink-0">
    <div className="flex items-center">
      <InboxText className="w-14 h-7" />
      <ArrowIcon className="w-2.5 mt-1.5 ml-2 mr-auto" />
    </div>
    <div className="flex items-center">
      <MoreIcon className="size-5 mr-4" />
      <SettingsIcon className="size-5" />
    </div>
  </div>
);

export default NovuHeader;
