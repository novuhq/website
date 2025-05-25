/* eslint-disable react/prop-types, jsx-a11y/html-has-lang */
import { Analytics as DubAnalytics } from '@dub/analytics/react';
import React from 'react';

const fontsBasePath = '/fonts';

const fontsPaths = [
  '/brother-1816/brother-1816-regular.woff2',
  '/brother-1816/brother-1816-book.woff2',
  '/ibm-plex-mono/ibm-plex-mono-regular.woff2',
];

const HTML = ({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body,
  postBodyComponents,
}) => (
  <html {...htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
      />
      {fontsPaths.map((fontPath, index) => (
        <link
          rel="preload"
          href={`${fontsBasePath}${fontPath}`}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          key={index}
        />
      ))}
      {headComponents}
    </head>
    <body {...bodyAttributes}>
      {preBodyComponents}
      <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
      {postBodyComponents}
    </body>
    <DubAnalytics domainsConfig={{
      outbound: ["app.cal.com"],
    }} />
  </html>
);

export default HTML;
