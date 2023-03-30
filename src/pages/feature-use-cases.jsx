import { graphql } from 'gatsby';
import React, { useState, useEffect } from 'react';

import Channels from 'components/pages/use-cases/channels';
import Content from 'components/pages/use-cases/content';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

const FeatureUseCasesPage = ({ data: { channels, useCases } }) => {
  const [selectedChannels, setSelectedChannels] = useState([]);
  const [filteredItems, setFilteredItems] = useState(useCases.nodes);

  useEffect(() => {
    if (selectedChannels.length) {
      const filteredItems = useCases.nodes.filter((item) =>
        item.channels.some((channel) => selectedChannels.includes(channel.channel.value.current))
      );
      setFilteredItems(filteredItems);
    } else {
      setFilteredItems(useCases.nodes);
    }
  }, [selectedChannels, useCases.nodes]);

  const channelsWithItems = channels.nodes.map((channel) => {
    const items = useCases.nodes.filter((item) =>
      item.channels.some(
        (itemChannel) => itemChannel.channel.value.current === channel.value.current
      )
    );
    return {
      ...channel,
      numberOfItems: items.length,
    };
  });

  return (
    <Layout backgroundColor="gray-1" headerWithBorder footerWithBorder>
      <div className="safe-paddings pb-40 pt-32 sm:pt-20">
        <div className="container">
          <div className="grid-gap-x grid grid-cols-12 md:block md:gap-0">
            <Channels
              className="col-span-3 md:hidden"
              items={channelsWithItems}
              numberOfItems={useCases.nodes.length}
              selectedChannels={selectedChannels}
              setSelectedChannels={setSelectedChannels}
            />
            <Content
              className="col-span-7 lg:col-span-9"
              title="Feature Use Cases"
              description="Simple components and APIs for managing all communication channels  in one place: Email, SMS, Direct, and Push"
              items={filteredItems}
              channels={channelsWithItems}
              selectedChannels={selectedChannels}
              setSelectedChannels={setSelectedChannels}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FeatureUseCasesPage;

export const pageQuery = graphql`
  query {
    channels: allSanityChannel {
      nodes {
        name
        value {
          current
        }
      }
    }

    useCases: allSanityFeatureUseCase(sort: { fields: _createdAt, order: DESC }) {
      nodes {
        title
        slug {
          current
        }
        channels {
          channel {
            name
            value {
              current
            }
          }
        }
      }
    }
  }
`;

export const Head = () => {
  const pageMetadata = {
    slug: '/feature-use-cases/',
    title: 'Feature Use Cases - Novu',
  };
  return <SEO {...pageMetadata} />;
};
