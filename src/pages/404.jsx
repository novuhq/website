import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

const NotFoundPage = () => (
  <Layout>
    <section className="safe-paddings py-34 pb-20 lg:pb-16 lg:pt-32 md:pb-14 md:pt-30 sm:pb-32 sm:pt-22">
      <div className="container flex flex-col items-center">
        <p className="font-semibold uppercase">404 error</p>
        <Heading tag="h1" size="2xl">
          Page not found
        </Heading>
        <p className="mt-2 font-book">Sorry, we couldn’t find the page you’re looking for.</p>
        <Button className="mt-6" to="/" theme="gray-outline" size="sm">
          Go back home
        </Button>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;

export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: '404 - Page not found',
    description: 'Sorry, we couldn’t find the page you’re looking for',
    slug: pathname,
  };

  return <SEO {...pageMetadata} />;
};
