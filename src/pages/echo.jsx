import React from 'react';

import Code from 'components/pages/echo/code';
import Cta from 'components/pages/echo/cta';
import Flexibility from 'components/pages/echo/flexibility';
import Hero from 'components/pages/echo/hero';
import Infrastructure from 'components/pages/echo/infrastructure';
import Integration from 'components/pages/echo/integration';
import Libraries from 'components/pages/echo/libraries';
import Layout from 'components/shared/layout';
import Testimonials from 'components/shared/reusable-sections/testimonials';
import SEO from 'components/shared/seo';
import DATA from 'data/pages/echo';

const EchoPage = () => (
  <Layout mainClassName="echo overflow-hidden pb-px bg-[#05050B]">
    <Hero />
    <Infrastructure />
    <Integration />
    <Code />
    <Libraries />
    <Flexibility />
    <Testimonials {...DATA.testimonials} />
    <Cta />
  </Layout>
);

export default EchoPage;

export const Head = () => <SEO />;
