import React, { useState, useEffect } from 'react';

import { baseSettings, searchSettings, aiChatSettings } from '../shared-settings';

const chatButtonProps = {
  chatButtonType: 'ICON_TEXT',
  fixedPositionXOffset: '2em',
  baseSettings,
  searchSettings,
  aiChatSettings,
};

const InkeepWidget = () => {
  const [ChatButton, setChatButton] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    (async () => {
      const { InkeepChatButton } = await import('@inkeep/widgets');
      setChatButton(() => InkeepChatButton);
    })();
  }, []);

  if (!ChatButton) return null;

  return <ChatButton {...chatButtonProps} />;
};

export default InkeepWidget;
