/* eslint-disable react/prop-types */
import clsx from 'clsx';
import { graphql } from 'gatsby';
import React from 'react';

import Content from 'components/pages/use-case/content';
import Hero from 'components/pages/use-case/hero';
import Workflow from 'components/pages/use-case/workflow';
import ReadMore from 'components/pages/use-cases/read-more';
import Layout from 'components/shared/layout';
import Link from 'components/shared/link';
import Separator from 'components/shared/separator';
import ArrowIcon from 'images/arrow.inline.svg';

const UseCasePage = ({ data, pageContext }) => (
  <Layout backgroundColor="gray-1" headerWithBorder footerWithBorder>
    <article
      className={clsx('safe-paddings pt-40 sm:pt-28', {
        'pb-40 sm:pb-28': !data.otherUseCases.nodes.length,
      })}
    >
      <div className="container-sm relative">
        <Link
          className="sticky top-8 z-10 -mb-8 -ml-28 flex h-8 w-8 items-center justify-center rounded-full bg-gray-2 transition-colors duration-200 hover:text-primary-1 lg:-ml-20 md:hidden"
          to={pageContext.parentPageUrl}
        >
          <ArrowIcon className="h-2" />
        </Link>
        <Hero
          title={pageContext.title}
          description={pageContext.description}
          channels={pageContext.channels}
          providers={pageContext.providers}
        />
        <Workflow {...pageContext.templateWorkflowData} />
        <Content content={pageContext.body} />
        {data.otherUseCases.nodes.length > 0 && (
          <>
            <Separator className="mt-28 px-0" backgroundColor="black" />
            <ReadMore items={data.otherUseCases.nodes} />
          </>
        )}
      </div>
    </article>
  </Layout>
);

export const pageQuery = graphql`
  query ($id: String!) {
    otherUseCases: allSanityTechnicalUseCase(filter: { id: { ne: $id } }, limit: 2) {
      nodes {
        title
        slug {
          current
        }
      }
    }
  }
`;

export default UseCasePage;
