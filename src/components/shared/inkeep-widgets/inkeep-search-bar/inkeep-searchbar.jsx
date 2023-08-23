import { InkeepSearchBar } from '@inkeep/widgets';
import React, { useState, useEffect } from 'react';

import { baseSettings, searchSettings, aiChatSettings } from '../shared-settings';

const searchBarProps = {
  baseSettings,
  modalSettings: {
    areOpenHotKeysDisabled: true,
  },
  searchSettings: {
    ...searchSettings,
    placeholder: 'Search...',
  },
  aiChatSettings,
};

const InkeepSearchBarWidget = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) {
    return null;
  }
  return <InkeepSearchBar {...searchBarProps} />;
};

export default InkeepSearchBarWidget;
