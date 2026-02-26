/* eslint-disable react/prop-types */
import { graphql, Script, useStaticQuery } from 'gatsby';
import React from 'react';
import { useLocation } from 'react-use';

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
  const location = useLocation();
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
  const pathname = slug || location.pathname || '/';
  const currentUrl = siteUrl + pathname;
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

      {/** Google Tag Manager */}
      {process.env.NODE_ENV === 'production' && (
        <Script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KXMC4XP2');
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
