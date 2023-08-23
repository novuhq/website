import { InkeepChatButton } from '@inkeep/widgets';
import React, { useState, useEffect } from 'react';

import { baseSettings, searchSettings, aiChatSettings } from '../shared-settings';

const chatButtonProps = {
  chatButtonType: 'ICON_TEXT_SHORTCUT',
  fixedPositionXOffset: '2em',
  baseSettings,
  searchSettings,
  aiChatSettings,
};

const InkeepWidget = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) {
    return null;
  }
  return <InkeepChatButton {...chatButtonProps} />;
};

export default InkeepWidget;
