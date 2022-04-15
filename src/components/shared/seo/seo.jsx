/* eslint-disable react/prop-types */
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, slug, canonical, preventIndexing, keywords, ogImage }) => {
  const {
    site: {
      siteMetadata: { siteTitle, siteDescription, siteUrl, siteImage, siteLanguage },
    },
  } = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          siteTitle
          siteDescription
          siteUrl
          siteImage
          siteLanguage
        }
      }
    }
  `);

  const currentTitle = title ?? siteTitle;
  const currentDescription = description ?? siteDescription;
  const currentUrl = slug ? `${siteUrl}/${slug}` : siteUrl;
  const currentImagePath = ogImage ? siteUrl + ogImage : siteUrl + siteImage;
  const currentCanonicalUrl = canonical || currentUrl;

  const isRobotsNoindexPage = preventIndexing;

  return (
    <Helmet
      title={currentTitle}
      htmlAttributes={{
        lang: siteLanguage,
        prefix: 'og: http://ogp.me/ns#',
      }}
    >
      {/* General */}
      <meta name="description" content={currentDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      {isRobotsNoindexPage && <meta name="robots" content="noindex" />}
      {/* Open Graph */}
      <meta property="og:title" content={currentTitle} />
      <meta property="og:description" content={currentDescription} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={currentImagePath} />
      <meta property="og:type" content="website" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={currentTitle} />
      <meta name="twitter:image" content={currentImagePath} />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:description" content={currentDescription} />
      <link rel="canonical" href={currentCanonicalUrl} />
    </Helmet>
  );
};

export default SEO;
