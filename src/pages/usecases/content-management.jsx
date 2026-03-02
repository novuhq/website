import React from 'react';

import Features from 'components/pages/content-management/features';
import Benefits from 'components/pages/use-cases/benefits';
import Hero from 'components/pages/use-cases/hero';
import PainRestatement from 'components/pages/use-cases/pain-restatement';
import GetStarted from 'components/shared/get-started';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import DATA from 'data/pages/usecases/content-management';

const contentManagementPage = () => (
  <Layout>
    <Hero {...DATA.hero} />
    <Features />
    <PainRestatement {...DATA.painRestatement} />
    <Benefits {...DATA.benefits} />
    <GetStarted />
  </Layout>
);

export default contentManagementPage;

export const Head = () => {
  const pageMetadata = {
    slug: '/usecases/content-management/',
    title: 'Notification Content Management for Developers',
    description:
      "Simplify content management with Novu's unified platform. Empower your product teams to manage notifications without interrupting developers. Utilize code-first workflows, a no-code editor, and broad framework support including React, Vue-email, and MJML. Ensure type-safe updates and consistent branding while delivering personalized notifications across all channels. Enhance collaboration, reduce development interruptions, and maintain a seamless user experience.",
  };
  return <SEO {...pageMetadata} />;
};
