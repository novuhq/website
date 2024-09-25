import React from 'react';

import Code from 'components/pages/home/code';
import Cta from 'components/pages/home/cta';
import Flexibility from 'components/pages/home/flexibility';
import Hero from 'components/pages/home/hero';
import Infrastructure from 'components/pages/home/infrastructure';
import Integration from 'components/pages/home/integration';
import Libraries from 'components/pages/home/libraries';
import Logos from 'components/pages/home/logos';
import Reviews from 'components/pages/home/reviews';
import SkinnyCTA from 'components/pages/home/skinny-cta';
// import Testimonials from 'components/pages/novu-framework/testimonials';
import Layout from 'components/shared/layout';
import NotificationInbox from 'components/shared/reusable-sections/notification-inbox';
import RiveWasm from 'components/shared/rive-wasm';
import SEO from 'components/shared/seo';
import Separator from 'components/shared/separator';
// import LINKS from 'constants/links';

const HomePage = () => (
  <Layout mainClassName="echo pb-px bg-[#05050B]">
    <Hero />
    <div className="relative overflow-hidden z-20 lg:pt-[160px] lg:mt-[-160px]">
      <Logos />
      <Code />
      <SkinnyCTA />
      <Integration />
      <Flexibility />
      <Libraries />
      <NotificationInbox
        title="Fully featured Notification Inbox in minutes"
        description="Include a real-time Notification Center using our embeddable components or connect your custom UI with our notification feed API."
        button={{ label: 'Learn more', link: '/inbox?utm_campaign=ws_inbox_section' }}
      />
      <Infrastructure />
      {/* Hiding this temporarily for launch */}
      {/* <Testimonials /> */}
      <Reviews />
      <Cta />
    </div>
    <Separator className="w-full max-w-none" backgroundColor="echo-gradient" />
  </Layout>
);

export default HomePage;

export const Head = () => {
  const pageMetadata = {
    title: 'Novu - Open-source notifications infrastructure and framework',
    description:
      'Novu empowers developers and product teams to collaborate seamlessly on notification management. Its unified platform provides centralized content, type-safe schemas, and reusable components, facilitating efficient workflows. With code-first and no-code tools, teams can easily customize and deploy notifications across multiple channels like email, SMS, push, chat, and in-app. Novu enhances communication, reduces friction, and ensures reliable, scalable, and personalized user experiences while maintaining full visibility and control over notifications.',
  };
  return (
    <>
      <SEO {...pageMetadata} />
      <RiveWasm />
      <link
        rel="preload"
        href="/animations/pages/home/hero/new_hero.riv"
        as="fetch"
        crossOrigin="anonymous"
      />
    </>
  );
};
