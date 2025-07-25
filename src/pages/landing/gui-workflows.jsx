import React from 'react';

import Layout from 'components/shared/layout';
import SectionWithForm from 'components/shared/reusable-sections/section-with-form';
import TextWithPicture from 'components/shared/reusable-sections/text-with-picture';
import SEO from 'components/shared/seo';
import DATA from 'data/pages/landing/gui-workflows';

const GSLandingPage = () => (
  <Layout mainClassName="reusable-components overflow-hidden pt-16 bg-[#05050B]">
    <SectionWithForm {...DATA.sectionWithFormRight} />
    <TextWithPicture {...DATA.textWithPicture1} />
    <TextWithPicture {...DATA.textWithPicture2} />
    <br />
    <br />
    <br />
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
