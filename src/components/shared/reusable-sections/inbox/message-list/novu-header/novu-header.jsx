import React from 'react';

import ArrowIcon from './images/arrow.inline.svg';
import InboxText from './images/inbox-text.inline.svg';
import MoreIcon from './images/more.inline.svg';
import SettingsIcon from './images/settings.inline.svg';

const NovuHeader = () => (
  <div className="relative z-20 flex h-14 shrink-0 items-center justify-between px-[22px]">
    <div className="flex items-center">
      <InboxText className="h-7 w-14" />
      <ArrowIcon className="ml-2 mr-auto mt-1.5 w-2.5" />
    </div>
    <div className="flex items-center">
      <MoreIcon className="mr-4 size-5" />
      <SettingsIcon className="size-5" />
    </div>
  </div>
);

export default NovuHeader;
