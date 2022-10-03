/* eslint-disable react/prop-types */
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

const SEO = ({
  title,
  description,
  slug,
  canonical,
  preventIndexing,
  keywords,
  ogImage,
  children,
}) => {
  const {
    site: {
      siteMetadata: { siteTitle, siteDescription, siteUrl },
    },
  } = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          siteTitle
          siteDescription
          siteUrl
        }
      }
    }
  `);

  const currentTitle = title ?? siteTitle;
  const currentDescription = description ?? siteDescription;
  const currentUrl = slug ? siteUrl + slug : siteUrl;
  const currentCanonicalUrl = canonical ? siteUrl + canonical : currentUrl;

  const isRobotsNoindexPage = preventIndexing && preventIndexing !== 'index';

  return (
    <>
      <title>{currentTitle}</title>
      {/* General */}
      <meta name="description" content={currentDescription} />
      <link rel="canonical" href={currentCanonicalUrl} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      {isRobotsNoindexPage ? <meta name="robots" content="noindex" /> : null}
      {/* Open Graph */}
      <meta property="og:title" content={currentTitle} />
      <meta property="og:description" content={currentDescription} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {children}
    </>
  );
};

export default SEO;
