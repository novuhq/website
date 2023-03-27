import React, { useState, useEffect } from 'react';

import Channels from 'components/pages/use-cases/channels';
import Content from 'components/pages/use-cases/content';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

const channels = [
  {
    name: 'Email',
    value: 'email',
  },
  {
    name: 'In-app',
    value: 'in-app',
  },
  {
    name: 'Push',
    value: 'push',
  },
  {
    name: 'SMS',
    value: 'sms',
  },
  {
    name: 'Chat',
    value: 'chat',
  },
];

const content = {
  title: 'Technical Use Cases',
  description:
    'Simple components and APIs for managing all communication channels  in one place: Email, SMS, Direct, and Push',
  items: [
    {
      title: 'Implement In-App + User preferences',
      channels: [
        {
          name: 'In-app',
          value: 'in-app',
        },
      ],
      url: '/',
    },
    {
      title: 'Implement In-App + User preferences + 4 hours email digest',
      channels: [
        {
          name: 'In-app',
          value: 'in-app',
        },
      ],
      url: '/',
    },
    {
      title: 'Implement email+Chat',
      channels: [
        {
          name: 'Email',
          value: 'email',
        },
        {
          name: 'Chat',
          value: 'chat',
        },
      ],
      url: '/',
    },
    {
      title: 'Implement Push + Email with Translations and Timezone',
      channels: [
        {
          name: 'Email',
          value: 'email',
        },
        {
          name: 'Push',
          value: 'push',
        },
      ],
      url: '/',
    },
    {
      title: 'In-app + delay + email notifications',
      channels: [
        {
          name: 'In-app',
          value: 'in-app',
        },
      ],
      url: '/',
    },
    {
      title: 'Email + SMS',
      channels: [
        {
          name: 'Email',
          value: 'email',
        },
        {
          name: 'SMS',
          value: 'sms',
        },
      ],
      url: '/',
    },
    {
      title: 'Implement Push + Email with Translations and Timezone',
      channels: [
        {
          name: 'Email',
          value: 'email',
        },
        {
          name: 'Push',
          value: 'push',
        },
      ],
      url: '/',
    },
    {
      title: 'Email + SMS',
      channels: [
        {
          name: 'Email',
          value: 'email',
        },
        {
          name: 'SMS',
          value: 'sms',
        },
      ],
      url: '/',
    },
    {
      title: 'Implement Push + Email with Translations and Timezone',
      channels: [
        {
          name: 'Email',
          value: 'email',
        },
        {
          name: 'Push',
          value: 'push',
        },
      ],
      url: '/',
    },
  ],
};

const TechnicalUseCasesPage = () => {
  const [selectedChannels, setSelectedChannels] = useState([]);
  const [filteredItems, setFilteredItems] = useState(content.items);

  useEffect(() => {
    if (selectedChannels.length) {
      const filteredItems = content.items.filter((item) =>
        item.channels.some((channel) => selectedChannels.includes(channel.value))
      );
      setFilteredItems(filteredItems);
    } else {
      setFilteredItems(content.items);
    }
  }, [selectedChannels]);

  const channelsWithItems = channels.map((channel) => {
    const items = content.items.filter((item) =>
      item.channels.some((itemChannel) => itemChannel.value === channel.value)
    );
    return {
      ...channel,
      numberOfItems: items.length,
    };
  });

  return (
    <Layout>
      <div className="safe-paddings pt-24 sm:pt-20">
        <div className="container">
          <div className="grid-gap-x grid grid-cols-12">
            <Channels
              className="col-span-3"
              items={channelsWithItems}
              numberOfItems={content.items.length}
              selectedChannels={selectedChannels}
              setSelectedChannels={setSelectedChannels}
            />
            <Content className="col-span-7" {...content} items={filteredItems} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TechnicalUseCasesPage;

export const Head = () => {
  const pageMetadata = {
    slug: '/polishing/',
    title: 'Polishing Season - Novu',
    description:
      'Polishing season is about turning that “someday” into “today”. It’s about dedicating time to quality work. To replace flaws and friction with polish and delight.',
    ogImage: `/images/social-preview-polishing.jpg`,
  };
  return <SEO {...pageMetadata} />;
};
