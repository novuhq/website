import React from 'react';

import Layout from 'components/shared/layout';
import CodeSection from 'components/shared/reusable-sections/code-section';
import CTA from 'components/shared/reusable-sections/cta';
import SectionWithForm from 'components/shared/reusable-sections/section-with-form';
import SectionWithVideo from 'components/shared/reusable-sections/section-with-video';
import SEO from 'components/shared/seo';
import DATA from 'data/pages/landing/react-email-blocks';

const GSLandingPage = () => (
  <Layout mainClassName="reusable-components overflow-hidden pt-16 bg-[#05050B]">
    <SectionWithForm {...DATA.sectionWithFormRight} />
    <CodeSection {...DATA.codeSection} />
    <CTA {...DATA.cta} />
    <SectionWithVideo {...DATA.sectionWithVideo} className="pb-40 md:pb-20" />
  </Layout>
);

export default GSLandingPage;

export const Head = () => {
  const pageMetadata = {
    title: 'Novu - Request a free account',
    description:
      'Novu is a powerful and complete Javascript-based notifications infrastructure platform. Use Inbox for in-app, sms, email, and other providers for omnichannel notifications.',
  };
  return <SEO {...pageMetadata} />;
};
