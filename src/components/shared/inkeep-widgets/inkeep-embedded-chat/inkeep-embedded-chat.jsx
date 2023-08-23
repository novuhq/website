import { InkeepEmbeddedChat } from '@inkeep/widgets';
import React, { useState, useEffect } from 'react';

import { baseSettings, aiChatSettings } from '../shared-settings';

const chatButtonProps = {
  baseSettings,
  aiChatSettings,
};

const InkeepEmbeddedChatWidget = () => {
  const [isBrowser, setIsBrowser] = useState(false);
  console.log(aiChatSettings);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) {
    return null;
  }
  return (
    <main className="flex h-[600px] items-center pt-32">
      <InkeepEmbeddedChat {...chatButtonProps} />
    </main>
  );
};

export default InkeepEmbeddedChatWidget;
