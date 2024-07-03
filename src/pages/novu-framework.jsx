import React from 'react';

import Code from 'components/pages/novu-framework/code';
import Cta from 'components/pages/novu-framework/cta';
import Flexibility from 'components/pages/novu-framework/flexibility';
import Hero from 'components/pages/novu-framework/hero';
import Inbox from 'components/pages/novu-framework/inbox';
import Infrastructure from 'components/pages/novu-framework/infrastructure';
import Integration from 'components/pages/novu-framework/integration';
import Libraries from 'components/pages/novu-framework/libraries';
import Logos from 'components/pages/novu-framework/logos';
import SkinnyCTA from 'components/pages/novu-framework/skinny-cta';
// import Testimonials from 'components/pages/novu-framework/testimonials';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import Separator from 'components/shared/separator';

const NovuFrameworkPage = () => (
  <Layout mainClassName="echo overflow-hidden pb-px bg-[#05050B]">
    <Hero />
    <Logos />
    <Code />
    <SkinnyCTA />
    <Integration />
    <Flexibility />
    <Libraries />
    <Inbox />
    <Infrastructure />
    {/* Hiding this temporarily for launch */}
    {/* <Testimonials /> */}
    <Cta />
    <Separator className="w-full max-w-none" backgroundColor="echo-gradient" />
  </Layout>
);

export default NovuFrameworkPage;

export const Head = () => <SEO />;
