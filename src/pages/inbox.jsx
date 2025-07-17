import React from 'react';

import BentoFiveBlocks from 'components/pages/inbox/bento-five-blocks';
import Hero from 'components/pages/inbox/hero';
import Layout from 'components/shared/layout';
import CodeSectionNew from 'components/shared/reusable-sections/code-section-new';
import CtaWithForm from 'components/shared/reusable-sections/cta-with-form/cta-with-form';
import Inbox from 'components/shared/reusable-sections/inbox';
import SectionWithBigIcons from 'components/shared/reusable-sections/section-with-big-icons';
import SEO from 'components/shared/seo';
import DATA from 'data/pages/inbox';

const InboxPage = () => (
  <Layout mainClassName="overflow-hidden pt-16 bg-[#05050B]">
    <h1 className="sr-only">Inbox</h1>
    <Hero {...DATA.hero} />
    <SectionWithBigIcons {...DATA.features} />
    <Inbox {...DATA.inboxExample} sectionOffsets="mt-[286px]" />
    <CodeSectionNew {...DATA.code} />
    <BentoFiveBlocks {...DATA.components} className="mt-[192px] md:mt-[88px]" />
    <SectionWithBigIcons {...DATA.readySetGo} />
    <CtaWithForm {...DATA.cta} className="mb-[207px] mt-[220px] md:mt-[140px]" />
  </Layout>
);

export default InboxPage;

export const Head = () => {
  const pageMetadata = {
    title: 'Novu - Full-stack Inbox for In-app notifications',
    description:
      "Novu's Inbox is the easiest way to add a highly customizable notifications Inbox to your application or website.",
    ogImage: `/images/seo/og-novu-inbox.jpg`,
  };
  return <SEO {...pageMetadata} />;
};
