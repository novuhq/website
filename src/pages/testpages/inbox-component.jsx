import React from 'react';

import Layout from 'components/shared/layout';
import Inbox from 'components/shared/reusable-sections/inbox';

const InboxComponent = () => (
  <Layout mainClassName="reusable-components overflow-hidden pt-16 pb-16 bg-[#05050B]">
    <Inbox
      title="Fully featured Notification Inbox in minutes"
      description="Include a real-time Notification Center using our embeddable components or connect your custom UI with our notification feed API."
      button={{
        label: 'READ DOCS',
        link: 'https://docs.novu.co/getting-started/introduction',
      }}
    />
  </Layout>
);

export default InboxComponent;
