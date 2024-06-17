import React from 'react';

//Imprort page-specific components
import Hero from 'components/pages/send-multi-channel-notifications/hero';
import Pain_restatement from 'components/pages/send-multi-channel-notifications/painRestatement';
import Benefits from 'components/pages/send-multi-channel-notifications/benefits';
import Features from 'components/pages/send-multi-channel-notifications/features';
import RelatedContent from 'components/pages/send-multi-channel-notifications/related-content/related-content';

//Import shared (cross-page) components
import Layout from 'components/shared/layout';
import GetStarted from 'components/shared/get-started';

//import SEO component
import SEO from 'components/shared/seo';


const MultiChannelNotificationsPage = () => (
    <Layout>
        {/* Section: Header */}
        <Hero />
        {/* Section: Pain Restatement */}
        <Pain_restatement />
        {/* Section: Benefits */}
        <Benefits />
        {/* Section: Supporting features */}
        <Features />
        {/* Section: Related Content */}
        <RelatedContent />
        {/* Section: Get Started */}
        <GetStarted />
    </Layout>
);

export default MultiChannelNotificationsPage;

export const Head = () => {
    const pageMetadata = {
        slug: '/send-multi-channel-notifications/',
        title: 'Send Multi-Channel Notifications',
        description: 'Reach Your Audience Where They Are: Multi-Channel Notification Solutions',
    };
    return <SEO {...pageMetadata} />;
};