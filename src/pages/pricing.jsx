import React, { useState } from 'react';

import FAQ from 'components/pages/pricing/faq';
import HeroNew from 'components/pages/pricing/hero';
import PricingPlanCards from 'components/pages/pricing/pricing-plans-cards';
import PricingTable from 'components/pages/pricing/pricing-table';
import ScheduleCallCard from 'components/pages/pricing/schedule-call-card';
import SchedulingModal from 'components/pages/pricing/scheduling-modal';
import Layout from 'components/shared/layout';
import CtaWithForm from 'components/shared/reusable-sections/cta-with-form/cta-with-form';
import SectionWithLogosAnimated from 'components/shared/reusable-sections/section-with-logos-animated';
import SEO from 'components/shared/seo';
import HOME_DATA from 'data/pages/index';
import DATA from 'data/pages/pricing';

const PricingPage = () => {
  const [isSchedulingModalOpen, setIsSchedulingModalOpen] = useState(false);
  const [utmSource, setUtmSource] = useState(null);

  const openSchedulingModal = (source) => {
    setUtmSource(source);
    setIsSchedulingModalOpen(false);
    setTimeout(() => {
      setIsSchedulingModalOpen(true);
    }, 0);
  };

  return (
    <Layout mainClassName="overflow-hidden pt-16 sm:pt-14 bg-[#05050B]">
      <HeroNew />
      <PricingPlanCards plans={DATA.pricingPlans} onContactUsClick={openSchedulingModal} />
      <SectionWithLogosAnimated
        {...HOME_DATA.customers}
        className="!mb-20 lg:!mb-16 md:!mb-12 sm:!mb-10"
      />
      <PricingTable activeTier={DATA.activeTier} onContactUsClick={openSchedulingModal} />
      <ScheduleCallCard onScheduleClick={openSchedulingModal} />
      <FAQ onContactUsClick={openSchedulingModal} onScheduleCallClick={openSchedulingModal} />
      <CtaWithForm
        {...DATA.cta}
        className="mb-[192px] mt-[238px] text-center"
        onContactUsClick={openSchedulingModal}
      />
      <SchedulingModal isOpen={isSchedulingModalOpen} utmSource={utmSource} />
    </Layout>
  );
};

export default PricingPage;

export const Head = () => {
  const pageMetadata = {
    slug: '/pricing/',
    title: 'Pricing - Novu',
    description: 'Flexible pricing for companies and developers',
    ogImage: `/images/seo/og-novu-pricing.jpg`,
  };
  return <SEO {...pageMetadata} />;
};
