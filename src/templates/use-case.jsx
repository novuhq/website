/* eslint-disable react/prop-types */

import React from 'react';

import Content from 'components/pages/use-case/content';
import Hero from 'components/pages/use-case/hero';
import Layout from 'components/shared/layout';
import Link from 'components/shared/link';
import ArrowIcon from 'images/arrow.inline.svg';

const UseCasePage = ({ pageContext }) => (
  <Layout>
    <article className="safe-paddings pt-40 sm:pt-28">
      <div className="container-sm relative">
        <Link
          className="sticky top-8 z-10 -mb-8 -ml-28 flex h-8 w-8 items-center justify-center rounded-full bg-gray-2 transition-colors duration-200 hover:text-primary-1 lg:-ml-20 md:hidden"
          to="/technical-use-cases/"
        >
          <ArrowIcon className="h-2" />
        </Link>
        <Hero
          title={pageContext.title}
          description={pageContext.description}
          channels={pageContext.channels}
          providers={pageContext.providers}
        />
        <Content content={pageContext.body} />
      </div>
    </article>
  </Layout>
);

export default UseCasePage;
