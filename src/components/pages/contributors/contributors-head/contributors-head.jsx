import { graphql, useStaticQuery } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import React from 'react';

import SEO from 'components/shared/seo';

/* eslint-disable import/prefer-default-export */
export const Head = () => {
  const { ogImage } = useStaticQuery(graphql`
    query {
      ogImage: file(relativePath: { eq: "contributors/social-preview.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 1200, height: 630, formats: JPG)
        }
      }
    }
  `);
  const pageMetadata = {
    title: 'Novu - Contributors',
    description:
      'The ultimate library for managing multi-channel transactional notifications with a single API.',
    slug: '/contributors/',
    ogImage: getSrc(ogImage.childImageSharp),
  };
  return <SEO {...pageMetadata} />;
};
