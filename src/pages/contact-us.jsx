import { getCalApi } from '@calcom/embed-react';
import React, { useEffect } from 'react';

import Heading from 'components/shared/heading';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

const ContactUsPage = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: 'novu-meeting' });
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);

  return (
    <Layout>
      <section className="safe-paddings relative overflow-hidden py-48 lg:py-40 md:pb-20 md:pt-32 sm:pt-24">
        <div className="container relative z-10">
          <div className="mb-24 text-center">
            <Heading className="mt-5 font-medium leading-tight" size="xl" tag="h1" theme="white">
              Talk to the Novu team
            </Heading>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-book leading-normal tracking-snug text-gray-8">
              Whether you're evaluating Novu, planning an integration, or navigating enterprise
              requirements - we're here to help.
            </p>
          </div>

          {/* Primary Action */}
          <div className="mx-auto mt-24 max-w-3xl">
            <div className="flex justify-center">
              <button
                className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-base font-medium text-gray-1 transition-colors duration-200 hover:bg-gray-9 focus:outline-none focus:ring-2 focus:ring-primary-1 focus:ring-offset-2 focus:ring-offset-gray-2"
                data-cal-namespace="novu-meeting"
                data-cal-link="team/novu/novu-meeting"
                data-cal-config='{"layout":"month_view"}'
              >
                Schedule a Call
              </button>
            </div>

            {/* Secondary Options */}
            <div className="mt-36 text-center">
              <div className="relative grid grid-cols-2 gap-8 lg:grid-cols-1 lg:gap-6">
                {/* Technical Support */}
                <div className="flex flex-col items-center">
                  <Heading className="font-medium text-white" size="sm" tag="h3">
                    Need technical support?
                  </Heading>
                  <p className="mt-2 text-base font-book text-gray-8">
                    Submit a ticket and our support team will help you as soon as possible.
                  </p>
                  <a
                    href="mailto:support@novu.co"
                    className="mt-4 inline-flex h-10 items-center justify-center rounded-md border border-gray-6 bg-transparent px-5 text-sm font-medium text-white transition-colors duration-200 hover:bg-gray-1 focus:outline-none focus:ring-2 focus:ring-primary-1 focus:ring-offset-2 focus:ring-offset-gray-2"
                  >
                    Contact Support
                  </a>
                </div>

                {/* Divider */}
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gray-6 lg:hidden" />

                {/* Community */}
                <div className="flex flex-col items-center">
                  <Heading className="font-medium text-white" size="sm" tag="h3">
                    Prefer async help?
                  </Heading>
                  <p className="mt-2 text-base font-book text-gray-8">
                    Join our community and get answers from the team and other developers.
                  </p>
                  <a
                    href="https://discord.gg/novu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex h-10 items-center justify-center rounded-md border border-gray-6 bg-transparent px-5 text-sm font-medium text-white transition-colors duration-200 hover:bg-gray-1 focus:outline-none focus:ring-2 focus:ring-primary-1 focus:ring-offset-2 focus:ring-offset-gray-2"
                  >
                    Join Discord
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUsPage;

export const Head = () => {
  const pageMetadata = {
    slug: '/contact-us/',
    title: 'Contact Us',
    description:
      'Get in touch with our sales and support teams for demos, onboarding support, or product questions.',
  };
  return <SEO {...pageMetadata} />;
};
