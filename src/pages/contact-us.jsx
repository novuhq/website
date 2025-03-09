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
      <section className="safe-paddings relative overflow-hidden py-36 lg:py-32 md:pb-10 md:pt-28 sm:pt-18">
        <div className="container relative z-10">
          <div className="mb-16 text-center">
            <Heading className="mt-5 font-medium leading-tight" size="xl" tag="h1" theme="white">
              How can we help?
            </Heading>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-book leading-normal tracking-snug text-gray-8">
              Connect with our teams to discuss demos, get help with onboarding, or ask questions
              about our product.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:grid-cols-1 md:gap-6">
            {/* Sales Section */}
            <div className="flex flex-col rounded-xl bg-gray-2 p-8 md:p-6">
              <Heading className="font-medium text-white" size="md" tag="h2">
                Sales
              </Heading>
              <p className="mt-4 text-base font-book text-gray-8">
                Get in touch with our sales team to discuss pricing options, enterprise agreements,
                or schedule a product demonstration
              </p>
              <button
                className="mt-8 inline-flex h-10 items-center justify-center self-start rounded-md bg-white px-5 text-sm font-medium text-gray-1 transition-colors duration-200 hover:bg-gray-9 focus:outline-none focus:ring-2 focus:ring-primary-1 focus:ring-offset-2 focus:ring-offset-gray-2"
                data-cal-namespace="novu-meeting"
                data-cal-link="team/novu/novu-meeting"
                data-cal-config='{"layout":"month_view"}'
              >
                Schedule a Call
              </button>
            </div>

            {/* Support Section */}
            <div className="flex flex-col rounded-xl bg-gray-2 p-8 md:p-6">
              <Heading className="font-medium text-white" size="md" tag="h2">
                Help and support
              </Heading>
              <p className="mt-4 text-base font-book text-gray-8">
                Submit a ticket to our support team or email support@novu.co directly
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:support@novu.co"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-6 bg-transparent px-5 text-sm font-medium text-white transition-colors duration-200 hover:bg-gray-1 focus:outline-none focus:ring-2 focus:ring-primary-1 focus:ring-offset-2 focus:ring-offset-gray-2"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>

          {/* Additional Resources - Now horizontal at the bottom */}
          <div className="mt-12">
            <Heading className="mb-6 text-center font-medium text-white" size="md" tag="h2">
              Additional resources
            </Heading>
            <div className="grid grid-cols-3 gap-6 lg:grid-cols-1">
              <div className="rounded-lg border border-gray-4 bg-gray-2 p-6 transition-all duration-200 hover:border-primary-1">
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-primary-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                  <Heading className="ml-3 font-medium text-white" size="sm" tag="h3">
                    Join the community
                  </Heading>
                </div>
                <p className="mt-3 text-sm text-gray-8">
                  Chat with us directly and become a part of the Novu community
                </p>
                <a
                  href="https://discord.gg/novu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex h-8 items-center justify-center rounded-md border border-gray-6 bg-transparent px-3 text-xs font-medium text-white transition-colors duration-200 hover:bg-gray-1 focus:outline-none focus:ring-2 focus:ring-primary-1 focus:ring-offset-2 focus:ring-offset-gray-2"
                >
                  Join Discord
                </a>
              </div>

              <div className="rounded-lg border border-gray-4 bg-gray-2 p-6 transition-all duration-200 hover:border-primary-1">
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-primary-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z" />
                  </svg>
                  <Heading className="ml-3 font-medium text-white" size="sm" tag="h3">
                    Documentation
                  </Heading>
                </div>
                <p className="mt-3 text-sm text-gray-8">
                  Gain deeper understanding of Novu's features, APIs, and SDKs
                </p>
                <a
                  href="https://docs.novu.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex h-8 items-center justify-center rounded-md border border-gray-6 bg-transparent px-3 text-xs font-medium text-white transition-colors duration-200 hover:bg-gray-1 focus:outline-none focus:ring-2 focus:ring-primary-1 focus:ring-offset-2 focus:ring-offset-gray-2"
                >
                  Novu Docs
                </a>
              </div>

              <div className="rounded-lg border border-gray-4 bg-gray-2 p-6 transition-all duration-200 hover:border-primary-1">
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-primary-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                  <Heading className="ml-3 font-medium text-white" size="sm" tag="h3">
                    Follow us on X
                  </Heading>
                </div>
                <p className="mt-3 text-sm text-gray-8">
                  Find @novuhq on X - or is it still called Twitter?
                </p>
                <a
                  href="https://twitter.com/novuhq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex h-8 items-center justify-center rounded-md border border-gray-6 bg-transparent px-3 text-xs font-medium text-white transition-colors duration-200 hover:bg-gray-1 focus:outline-none focus:ring-2 focus:ring-primary-1 focus:ring-offset-2 focus:ring-offset-gray-2"
                >
                  Follow on X
                </a>
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
