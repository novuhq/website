const React = require('react');

const SITE_DOMAIN = 'novu.co';
const PLAUSIBLE_DOMAIN = 'plausible.io';
const SCRIPT_URI = '/js/script.js';

exports.onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  const headComponents = [
    <script
      key="commonroom-signals"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            if (typeof window === 'undefined') return;
            if (typeof window.signals !== 'undefined') return;
            var script = document.createElement('script');
            script.src = 'https://cdn.cr-relay.com/v1/site/0920027a-a266-4a1c-8af9-6308f7b961bd/signals.js';
            script.async = true;
            window.signals = Object.assign(
              [],
              { _opts: { apiHost: 'https://api.cr-relay.com' } },
              ['page', 'identify', 'form'].reduce(function (acc, method){
                acc[method] = function () {
                  signals.push([method, arguments]);
                  return signals;
                };
               return acc;
              }, {})
            );
            document.head.appendChild(script);
          })();
        `,
      }}
    />,
    <script
      key="plain-live-chat"
      dangerouslySetInnerHTML={{
        __html: `
          (function(d, script) {
            script = d.createElement('script');
            script.async = false;
            script.onload = function(){
              Plain.init({
                appId: 'liveChatApp_01KJAVQQ5YRKY7NNZDEZV6KHED',
                hideBranding: true,
                threadDetails: {
                  tierIdentifier: { externalId: "marketing_page" },
                },
              });
            };
            script.src = 'https://chat.cdn-plain.com/index.js';
            d.getElementsByTagName('head')[0].appendChild(script);
          }(document));
        `,
      }}
    />,
  ];

  if (process.env.NODE_ENV === 'production') {
    const scriptProps = {
      'data-domain': SITE_DOMAIN,
      src: `https://${PLAUSIBLE_DOMAIN}${SCRIPT_URI}`,
    };

    headComponents.push(
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
      />
    );
  }

  setHeadComponents(headComponents);
  setHtmlAttributes({ lang: 'en', prefix: 'og: http://ogp.me/ns#' });
};
