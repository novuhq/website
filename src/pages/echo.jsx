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
import Separator from 'components/shared/separator';

const TESTIMONIALS = [
  {
    content:
      "The cost and time of having to build our own prefercing, integrations, and channels, delayed notifications, there's a bunch of features. We've got a lot of other problems that are unqiue to our particular environment and that's where I need to focus our engineering effort, not dealing with notifications infrastructure.",
    name: '',
    company: 'Financial Services Company',
  },
  {
    content:
      'The need to replace.. the current system we have for transactional email.... Really easy to get up and started and then see the potential of how far it can go.',
    name: '',
    company: 'Large Media Company',
  },
  {
    content:
      "We notify a user, and then being able to come back into the system to see if it's been acknowledged, and then automatically take action... That kind of interactivity between our data is huge. Having Novu take care of that and relay data back and forth between systems is huge. We were just playing around with it, and many other developers were like, this is exactly what we needed all along.",
    name: '',
    company: 'Healthcare Company',
  },
  {
    content:
      'Before Novu, just getting our SMS infrastructure set up, ensuring our email deliverability reputation was satisfactory for these types of messages... Just sending a 6-digit OTP code was like pulling teeth. How could we expect every company in the world to implement this on their own without Novu?',
    name: '',
    company: 'Biotech Company',
  },
  {
    content:
      "I needed something that's super approachable by my non-technical teams, and code is not the best experience.",
    name: '',
    company: 'AI Ops Company',
  },
];

const EchoPage = () => (
  <Layout mainClassName="echo overflow-hidden pb-px bg-[#05050B]">
    <Hero />
    <Infrastructure />
    <Integration />
    <Code />
    <Libraries />
    <Flexibility />
    <Testimonials testimonials={TESTIMONIALS} />
    <Cta />
    <Separator className="w-full max-w-none" backgroundColor="echo-gradient" />
  </Layout>
);

export default EchoPage;

export const Head = () => <SEO />;
