import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Layout from 'components/shared/layout';
import ComplianceSection from 'components/shared/reusable-sections/complience-section';
import CTA from 'components/shared/reusable-sections/cta';
import FeatureCards from 'components/shared/reusable-sections/feature-cards';
import SectionWithBigIcons from 'components/shared/reusable-sections/section-with-big-icons';
import TextWithPicture from 'components/shared/reusable-sections/text-with-picture';
import SEO from 'components/shared/seo';
import assessmentIcon from 'images/icons/assessment.svg';
import complianceIcon from 'images/icons/compliance.svg';
import dataManagementIcon from 'images/icons/data-management.svg';
import encryptionIcon from 'images/icons/encryption.svg';
import openSourceIcon from 'images/icons/open-source.svg';
import residencyIcon from 'images/icons/residency.svg';
import gdprIcon from 'images/reusable-sections/compliance-section/gdpr.svg';
import hipaaIcon from 'images/reusable-sections/compliance-section/hipaa.svg';
import isoIcon from 'images/reusable-sections/compliance-section/iso.svg';
import soc2Icon from 'images/reusable-sections/compliance-section/soc-2.svg';

const COMPLIANCE_SECTION = [
  {
    title: 'SOC2 Type II',
    image: soc2Icon,
  },
  {
    title: 'HIPAA',
    image: hipaaIcon,
  },
  {
    title: 'ISO 27001:2013',
    image: isoIcon,
  },
  {
    title: 'GDPR',
    image: gdprIcon,
  },
];

const Security = () => (
  <Layout mainClassName="overflow-hidden bg-[#05050B] pb-52 lg:pb-32 md:pb-28">
    <h1 className="sr-only">About secure notifications</h1>
    <TextWithPicture
      className="sm:pt-14 [&_p]:tracking-normal"
      title="Secure and robust notifications"
      description="Novu is committed to providing secure and compliant infrastructure, and makes it easy for you to access these features."
      image={
        <div className="absolute left-1/2 top-1/2 -translate-x-[47%] -translate-y-[46%] sm:top-0 sm:-translate-y-28 sm-xs:-translate-y-16">
          <StaticImage
            className="h-auto w-[1400px] lg:w-[1000px] md:w-[800px] sm-xs:w-[530px]"
            src="../images/pages/security/secure-notification.jpg"
            alt=""
            loading="eager"
            width={1400}
            height={954}
            quality={100}
          />
        </div>
      }
      imageClassName="relative w-full h-[560px] !overflow-visible lg:h-[400px] md:h-[300px] sm:w-full sm-xs:!h-48"
    />
    <ComplianceSection
      items={COMPLIANCE_SECTION}
      title="Compliance where it counts"
      theme="colored"
    />
    <SectionWithBigIcons
      className="mt-[191px] [&_a]:mt-auto [&_a]:pt-2.5 [&_h2]:px-20 sm:[&_h2]:px-0 [&_ul]:mt-[60px] [&_ul]:gap-y-[30px]"
      title="The fastest way to create rich, customized application notifications"
      items={[
        {
          icon: complianceIcon,
          title: 'Compliance certifications',
          description: 'Novu Cloud is compliant with GDPR, SOC 2 Type II, and ISO 27001 standards.',
          linkUrl: 'https://trust.novu.co',
        },
        {
          icon: residencyIcon,
          title: 'Data residency options',
          description:
            'Novu Cloud is deployed in North America (US) and EU (Germany), with more geographies planned soon.',
          linkUrl: 'https://docs.novu.co/additional-resources/security?utm_campaign=ws_security',
        },
        {
          icon: encryptionIcon,
          title: 'HMAC encryption',
          description: 'Data exchanges are always encrypted by default.',
          linkUrl:
            'https://docs.novu.co/inbox/react/production#hmac-encryption?utm_campaign=ws_security',
        },
        {
          icon: assessmentIcon,
          title: 'Security assessments',
          description:
            'Regular penetration tests and evidence collection ensure we stay proactive.',
          linkUrl: 'https://trust.novu.co',
        },
        {
          icon: dataManagementIcon,
          title: 'User data management',
          description: 'Clear data storage guidelines and examples help you do the right thing.',
          linkUrl:
            'https://docs.novu.co/additional-resources/security#for-how-long-user-data-is-stored?utm_campaign=ws_security',
        },
        {
          icon: openSourceIcon,
          title: 'Open source',
          description: 'No other notification provider lets you see the source code.',
          linkUrl: 'https://docs.novu.co/community/overview?utm_campaign=ws_security',
        },
      ]}
    />
    <FeatureCards
      className="mt-[204px]"
      title="Multiple deployment modes will satisfy every security requirement"
      description="Novu is the most powerful and flexible notification infrastructure platform available."
      cards={[
        {
          title: 'Novu Cloud',
          description:
            'Certifiably the best way to securely send mission-critical notifications to your users.',
          linkTitle: 'Learn more',
          linkUrl: 'https://docs.novu.co/?utm_campaign=ws_security',
        },
        {
          title: 'Novu Cloud + Framework',
          description:
            'Cloud delivery with available local notification hydration and custom workflow management.',
          linkTitle: 'Learn more',
          linkUrl: 'https://docs.novu.co/framework/overview?utm_campaign=ws_security',
        },
        {
          title: 'Self-hosted project',
          description: 'Completely run your own Novu Project in your own environment.',
          linkTitle: 'Learn more',
          linkUrl:
            'https://docs.novu.co/community/self-hosting-novu/overview?utm_campaign=ws_security',
        },
      ]}
    />
    <CTA
      className="mt-52 [&_ul]:mt-12"
      title="Securely send your first code-based notification"
      leftCard={{
        title: 'Novu Cloud',
        description:
          'Try Novu for free today, and send your first notification while your coffee is still too hot to drink.',
        buttonText: 'Try Novu',
        buttonLink: 'https://dashboard.novu.co/?utm_campaign=ws_security',
      }}
      rightCard={{
        title: 'Book a Meeting',
        description:
          "Ready to chat instead? Book a meeting with us, and we'll get your questions answered.",
        buttonText: 'Meet with Novu',
        buttonLink:
          'https://notify.novu.co/meetings/novuhq/novu-discovery-session-rr?utm_campaign=ws_security',
      }}
      theme="purple"
    />
  </Layout>
);

export default Security;

export const Head = () => {
  const pageMetadata = {
    title: 'Comprehensive Security Features for Novu: Protecting Your Data and Systems',
    description:
      "Explore Novu's robust security features designed to safeguard your data and ensure seamless, secure notifications. Learn about our encryption protocols, access controls, and compliance with industry standards to protect your systems and maintain privacy.",
  };
  return <SEO {...pageMetadata} />;
};
