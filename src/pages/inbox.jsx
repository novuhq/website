import React from 'react';

import Layout from 'components/shared/layout';
import CodeSection from 'components/shared/reusable-sections/code-section';
import CtaWithForm from 'components/shared/reusable-sections/cta-with-form/cta-with-form';
import GetInvolved from 'components/shared/reusable-sections/get-involved';
import NotificationInbox from 'components/shared/reusable-sections/notification-inbox';
// import SectionWithLogos from 'components/shared/reusable-sections/section-with-logos';
import SectionWithSmallIcons from 'components/shared/reusable-sections/section-with-small-icons';
// import SectionWithVideo from 'components/shared/reusable-sections/section-with-video';
// import discordIcon from 'icons/discord.svg';
// import githubIcon from 'icons/github.svg';
import cloudDataIcon from 'images/icons/cloud-data.svg';
import consoleIcon from 'images/icons/console.svg';
import debugIcon from 'images/icons/debug.svg';
import editIcon from 'images/icons/edit.svg';
import integrationIcon from 'images/icons/integration.svg';
import migrationIcon from 'images/icons/migration.svg';
import angularIcon from 'images/reusable-sections/section-with-logos/angular.svg';
import reactLogo from 'images/reusable-sections/section-with-logos/react-icon.svg';
import vueJSIcon from 'images/reusable-sections/section-with-logos/vuejs.svg';

const SECTION_WITH_SMALL_ICONS = [
  {
    title: 'Multiple, flexible components',
    description:
      'Inbox, Bell, Notification, and Preferences provide the ultimate customer-facing notifications experience.',
    image: editIcon,
  },
  {
    title: 'Supports popular frameworks',
    description:
      "React, Vue, vanilla JavaScript, headless, and more. Access Novu's powerful capabilities regardless of which you select",
    image: cloudDataIcon,
  },
  {
    title: 'Customizable',
    description:
      'Build your Inbox experience to seamlessly match your existing brand, styling, and customer-selected language.',
    image: integrationIcon,
  },
  {
    title: 'Built-in preferences',
    description: 'Your app users access and set their preferences with ease.',
    image: migrationIcon,
  },
  {
    title: 'HMAC encryption',
    description:
      'Component to Novu service communication and user identifiers are fully secured, and protected from impersonators.',
    image: debugIcon,
  },
  {
    title: 'Unified notifications',
    description:
      'Easily add notifications channels like email, sms, and WhatsApp, and mirror your Inbox experience elsewhere.',
    image: consoleIcon,
  },
];

/*
const SECTION_WITH_LOGOS = [
  {
    title: 'React',
    src: reactEmailLogo,
  },
  {
    title: 'Vue',
    src: nestJsLogo,
  },
  {
    title: 'Angular',
    src: remixLogo,
  },
  {
    title: 'Web Component',
    src: astroLogo,
  },
  {
    title: 'Headless',
    src: astroLogo,
  },
];
*/

const GET_INVOLVED = [
  {
    icon: reactLogo,
    title: 'React',
    description: 'React Inbox components',
    linkText: 'React Docs',
    linkUrl: 'https://docs.novu.co/inbox/react/components?utm_campaign=inbox-fp',
  },
  {
    icon: vueJSIcon,
    title: 'Vue',
    description: 'Vue.js Inbox components',
    linkText: 'Coming Soon',
    linkUrl: '/inbox?utm_campaign=inbox-vue',
  },
  {
    icon: angularIcon,
    title: 'Angular',
    description: 'Angular Inbox components',
    linkText: 'Coming Soon',
    linkUrl: '/inbox?utm_campaign=inbox_angular',
  },
];

const CODE_SECTION = `import { Inbox } from "@novu/react";

const tabs = [
  {
    title: "My foo",
    value: "foo",
  },
  {
    title: "My foo and bars",
    value: ["foo", "bar"],
  },
];

function Novu() {
  return (
    <Inbox
      options={{
        subscriberId: "SUBSCRIBER_ID",
        applicationIdentifier: "APPLICATION_IDENTIFIER",
      }}
      tabs={tabs}
    />
  );
}`;

const Inbox = () => (
  <Layout mainClassName="reusable-components overflow-hidden pt-16 bg-[#05050B]">
    <NotificationInbox
      title="Add full-function notifications to your app in minutes"
      description="Enable in-app notifications in your app or website with Novu's pre-built and customizable components, available in popular frameworks."
      button={{
        label: 'LEARN MORE',
        link: 'https://roadmap.novu.co/changelog/d7eb37e8-9237-415d-921e-495220cecf11',
      }}
    />
    <SectionWithSmallIcons
      title="Powerful notifications Inbox features in minutes, not days"
      items={SECTION_WITH_SMALL_ICONS}
    />

    {/*
    <SectionWithLogos
      title="Broad framework support out of the box"
      //        description="Built from scratch to integrate your existing tooling and content with the Novu Platform."
      logos={SECTION_WITH_LOGOS}
    />
    */}

    <GetInvolved title="Get started: pick your framework, code, and deploy" items={GET_INVOLVED} />

    <CodeSection
      code={CODE_SECTION}
      title="Simple to implement"
      description="Built for developers, with drop-in integration that can be infinitely customized, no matter your application, or use case."
      //        button={{ label: 'Read docs', link: '/' }}
    />
    {/*
      <SectionWithVideo
        video={{ type: 'youtube', url: 'https://www.youtube.com/watch?v=VBHierIbPHc' }}
        title="See the Inbox in Action"
        //        description="words"
        videoPosition="fullWidth"
    />
    */}
    <CtaWithForm
      className="mb-30"
      title="It's time to add in-app notifications"
      description="Create a free account, send your first notification, and add an Inbox... all for free."
      leftItem={{
        text: 'Get started',
        link: 'https://dashboard.novu.co/?utm_campaign=gs-website-inbox',
      }}
      rightItem={{
        text: 'Contact us',
        link: 'https://novu.co/contact-us/?utm_campaign=contact-inbox',
      }}
    />
  </Layout>
);

export default Inbox;
