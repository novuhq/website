import React from 'react';

import InkeepEmbeddedChatWidget from 'components/shared/inkeep-widgets/inkeep-embedded-chat/inkeep-embedded-chat';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

const ChatPage = () => (
  <Layout>
    <InkeepEmbeddedChatWidget />
  </Layout>
);

export default ChatPage;

export const Head = () => {
  const pageMetadata = {
    slug: '/chat/',
    title: 'Novu - Chat With Our AI Assistant',
    description: 'Chat with our AI assistant',
  };
  return <SEO {...pageMetadata} />;
};
