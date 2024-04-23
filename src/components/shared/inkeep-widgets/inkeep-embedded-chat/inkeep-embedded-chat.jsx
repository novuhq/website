import React, { useState, useEffect } from 'react';

import { baseSettings, aiChatSettings } from '../shared-settings';

const widgetProps = {
  baseSettings,
  aiChatSettings,
};

const InkeepEmbeddedChatWidget = () => {
  const [EmbeddedChat, setEmbeddedChat] = useState(null);

  useEffect(() => {
    (async () => {
      const { InkeepEmbeddedChat } = await import('@inkeep/widgets');
      setEmbeddedChat(() => InkeepEmbeddedChat);
    })();
  }, []);

  return (
    <main className="flex items-center justify-center pt-32">
      <div className="h-[768px]">{EmbeddedChat ? <EmbeddedChat {...widgetProps} /> : <div />}</div>
    </main>
  );
};

export default InkeepEmbeddedChatWidget;
