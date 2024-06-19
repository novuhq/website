import React, { useState, useEffect } from 'react';

import Channels from 'components/pages/use-cases/channels';
import Content from 'components/pages/use-cases/content';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

const UseCasesPage = ({ pageContext: { title, description, useCases } }) => {
  const [selectedChannels, setSelectedChannels] = useState([]);
  const [filteredItems, setFilteredItems] = useState(useCases);

  useEffect(() => {
    if (selectedChannels.length) {
      const filteredItems = useCases.filter((item) =>
        item.channels.some((channel) => selectedChannels.includes(channel.value))
      );
      setFilteredItems(filteredItems);
    } else {
      setFilteredItems(useCases);
    }
  }, [selectedChannels, useCases]);

  const channelsWithItems = useCases.reduce((acc, item) => {
    item?.channels?.forEach((channel) => {
      if (!acc.some((item) => item.value === channel.value)) {
        acc.push({
          ...channel,
          numberOfItems: 1,
        });
      } else {
        const index = acc.findIndex((item) => item.value === channel.value);
        acc[index].numberOfItems += 1;
      }
    });
    return acc;
  }, []);

  return (
    <Layout backgroundColor="gray-1" headerWithBorder footerWithBorder>
      <div className="safe-paddings pb-40 pt-32 sm:pt-20">
        <div className="container">
          <div className="grid-gap-x grid grid-cols-12 md:block md:gap-0">
            <Channels
              className="col-span-3 md:hidden"
              items={channelsWithItems}
              numberOfItems={useCases.length}
              selectedChannels={selectedChannels}
              setSelectedChannels={setSelectedChannels}
            />
            <Content
              className="col-span-7 lg:col-span-9"
              title={title}
              description={description}
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

export default UseCasesPage;

export const Head = ({ pageContext }) => <SEO {...pageContext.pageMetadata} />;
