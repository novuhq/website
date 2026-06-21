const React = require('react');

const SITE_DOMAIN = 'novu.co';
const PLAUSIBLE_DOMAIN = 'plausible.io';
const SCRIPT_URI = '/js/script.js';
const GTM_ID = 'GTM-KXMC4XP2';

exports.onRenderBody = ({ setHeadComponents, setHtmlAttributes, setPreBodyComponents }) => {
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

    // Google Tag Manager - server-rendered so the tag is present in the initial
    // HTML on every page (detectable by Tag Assistant, and fires earlier/more
    // reliably than a client-side <Script>). Previously lived in seo.jsx.
    headComponents.push(
      <script
        key="gtm-head"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
        }}
      />
    );

    setPreBodyComponents([
      <noscript
        key="gtm-noscript"
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />,
    ]);
  }

  setHeadComponents(headComponents);
  setHtmlAttributes({ lang: 'en', prefix: 'og: http://ogp.me/ns#' });
};
