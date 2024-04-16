/* eslint-disable react/prop-types */
import { useStaticQuery, graphql, Script } from 'gatsby';
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
      siteMetadata: { siteTitle, siteDescription, siteUrl, siteImage },
    },
  } = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          siteTitle
          siteDescription
          siteUrl
          siteImage
        }
      }
    }
  `);

  const currentTitle = title ?? siteTitle;
  const currentDescription = description ?? siteDescription;
  const currentUrl = slug ? siteUrl + slug : siteUrl;
  const currentImagePath = ogImage ? siteUrl + ogImage : siteUrl + siteImage;
  const currentCanonicalUrl = canonical ? siteUrl + canonical : currentUrl;

  const isRobotsNoindexPage = preventIndexing && preventIndexing !== 'index';

  return (
    <>
      <title>{currentTitle}</title>
      {/* General */}
      <meta name="description" content={currentDescription} />
      <link rel="canonical" href={currentCanonicalUrl} />
      {keywords && <meta name="keywords" content={keywords} />}
      {isRobotsNoindexPage && <meta name="robots" content="noindex" />}
      {/* Open Graph */}
      <meta property="og:title" content={currentTitle} />
      <meta property="og:description" content={currentDescription} />
      <meta property="og:url" content={currentUrl} />
      <meta
        property="og:image"
        content={ogImage?.startsWith('https') ? ogImage : currentImagePath}
      />
      <meta property="og:type" content="website" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />

      {process.env.NODE_ENV === 'production' && (
        <Script id="hs-script-loader" src="//js.hs-scripts.com/44416662.js" />
      )}

      {/** LinkedIn analytics */}
      {process.env.NODE_ENV === 'production' && (
        <Script
          dangerouslySetInnerHTML={{
            __html: `
            _linkedin_partner_id = "5915650";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `,
          }}
        />
      )}

      {process.env.NODE_ENV === 'production' && (
        <Script
          dangerouslySetInnerHTML={{
            __html: `
            (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);})(window.lintrk);
          `,
          }}
        />
      )}

      {process.env.NODE_ENV === 'production' && (
        <Script
          type="text/javascript"
          src="//script.crazyegg.com/pages/scripts/0123/1426.js"
          async="async"
        />
      )}

      {children}
    </>
  );
};

export default SEO;
