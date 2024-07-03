import React from 'react';

import Code from 'components/pages/home/code';
import Cta from 'components/pages/home/cta';
import Flexibility from 'components/pages/home/flexibility';
import Hero from 'components/pages/home/hero';
import Inbox from 'components/pages/home/inbox';
import Infrastructure from 'components/pages/home/infrastructure';
import Integration from 'components/pages/home/integration';
import Libraries from 'components/pages/home/libraries';
import Logos from 'components/pages/home/logos';
import SkinnyCTA from 'components/pages/home/skinny-cta';
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
