import React from 'react';

import Code from 'components/pages/echo/code';
import Cta from 'components/pages/echo/cta';
import Flexibility from 'components/pages/echo/flexibility';
import Hero from 'components/pages/echo/hero';
import Infrastructure from 'components/pages/echo/infrastructure';
import Integration from 'components/pages/echo/integration';
import Libraries from 'components/pages/echo/libraries';
import Testimonials from 'components/pages/echo/testimonials';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import Separator from 'components/shared/separator';

const EchoPage = () => (
  <Layout mainClassName="echo overflow-hidden pb-px bg-[#05050B]">
    <Hero />
    <Infrastructure />
    <Integration />
    <Code />
    <Libraries />
    <Flexibility />
    <Testimonials />
    <Cta />
    <Separator className="w-full max-w-none" backgroundColor="echo-gradient" />
  </Layout>
);

export default EchoPage;

export const Head = () => <SEO />;
