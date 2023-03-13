const React = require('react');

const SITE_DOMAIN = 'novu.co';
const PLAUSIBLE_DOMAIN = 'plausible.io';
const SCRIPT_URI = '/js/script.js';

exports.onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  if (process.env.NODE_ENV === 'production') {
    const scriptProps = {
      'data-domain': SITE_DOMAIN,
      src: `https://${PLAUSIBLE_DOMAIN}${SCRIPT_URI}`,
    };

    setHeadComponents([
      // eslint-disable-next-line react/jsx-filename-extension
      <link key="plausible-preconnect" rel="preconnect" href={`https://${PLAUSIBLE_DOMAIN}`} />,
      <script key="plausible-script" defer {...scriptProps} />,
      // See: https://plausible.io/docs/custom-event-goals#1-trigger-custom-events-with-javascript-on-your-site
      <script
        key="plausible-custom-events"
        dangerouslySetInnerHTML={{
          __html: `
            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) };
          `,
        }}
      />,
    ]);
  }

  setHtmlAttributes({ lang: 'en', prefix: 'og: http://ogp.me/ns#' });
};
