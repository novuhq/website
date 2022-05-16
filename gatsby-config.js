// Gatsby has dotenv by default
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

module.exports = {
  flags: { DEV_SSR: process.env.GATSBY_DEV_SSR || false },
  siteMetadata: {
    siteTitle: 'Novu - The open-source notification infrastructure',
    siteDescription:
      'The ultimate library for managing multi-channel transactional notifications with a single API.',
    siteImage: '/images/social-preview.jpg',
    siteLanguage: 'en',
    siteUrl: process.env.GATSBY_DEFAULT_SITE_URL || 'http://localhost:8000',
    authorName: 'Pixel Point',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 716,
              quality: 85,
              withWebp: true,
              showCaptions: true,
              linkImagesToOriginal: false,
              backgroundColor: '#262626',
              disableBgImageOnAlpha: true,
            },
          },
          'gatsby-remark-prismjs',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          quality: 85,
          placeholder: 'none',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-svgr-svgo',
      options: {
        inlineSvgOptions: [
          {
            test: /\.inline.svg$/,
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
                'prefixIds',
                'removeDimensions',
              ],
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.GATSBY_STRAPI_API_URL,
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: [
          {
            singularName: 'article',
            queryParams: {
              publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
              // Populate media and relations
              // Make sure to not specify the fields key so the api always returns the updatedAt
              populate: {
                author: '*',
                category: '*',
                cover: '*',
                seo: {
                  populate: {
                    ogImage: '*',
                  },
                },
              },
            },
          },
          'author',
        ],
        singleTypes: [
          {
            singularName: 'blog',
            queryParams: {
              populate: {
                featuredPost: '*',
                seo: {
                  populate: {
                    ogImage: '*',
                  },
                },
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-DHRXGBJSKF'],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-gatsby-cloud',
      options: {
        headers: {
          '/fonts/*': ['Cache-Control: public, max-age=31536000, immutable'],
          '/lottie-assets/*': ['Cache-Control: public, max-age=31536000, immutable'],
        },
      },
    },
    'gatsby-alias-imports',
    'gatsby-plugin-postcss',
    'gatsby-plugin-sitemap',
  ],
};
