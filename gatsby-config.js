// Gatsby has dotenv by default
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const isProductionBuild = process.env.CONTEXT === 'production';

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
  trailingSlash: 'always',
  plugins: [
    {
      resolve: 'gatsby-plugin-mixpanel',
      options: {
        apiToken: process.env.GATSBY_MIXPANEL_TOKEN,
        pageViews: 'all',
        trackPageViewsAs: 'Market Page Visit',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `directory`,
        path: `${__dirname}/src/data/pages/directory`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `directory-images`,
        path: `${__dirname}/src/data/pages/directory/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 80,
            },
          },
        ],
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [],
        },
        frontmatter: {
          processImages: true,
        },
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
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
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: process.env.GATSBY_DEFAULT_SITE_URL,
        sitemap: [
          `${process.env.GATSBY_DEFAULT_SITE_URL}/sitemap-index.xml`,
          `${process.env.GATSBY_DEFAULT_SITE_URL}/next-sitemap.xml`,
        ],
        policy: [{ userAgent: '*', allow: '/' }],
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
      resolve: 'gatsby-source-wordpress',
      options: {
        url: process.env.WP_GRAPHQL_URL,
        auth: {
          htaccess: {
            username: process.env.WP_HTACCESS_USERNAME,
            password: process.env.WP_HTACCESS_PASSWORD,
          },
        },
        html: {
          useGatsbyImage: false,
        },
        develop: {
          nodeUpdateInterval: process.env.WP_NODE_UPDATE_INTERVAL || 5000,
          hardCacheMediaFiles: process.env.WP_HARD_CACHE_MEDIA === 'true',
          hardCacheData: process.env.WP_HARD_CACHE_DATA === 'true',
        },
        production: {
          allow404Images: true,
          allow401Images: true,
        },
        schema: {
          timeout: 3000000,
          // Non-production only: parallelise and smaller batches for faster WP fetch
          ...(!isProductionBuild && {
            requestConcurrency: 50,
            perPage: 50,
          }),
        },
        // Keep production sourcing unchanged; apply type limits only in non-production
        ...(!isProductionBuild && {
          type: {
            // Types not used by our non-production build (we primarily need WpPage and categories for test pages)
            Post: { limit: 3 },
            Tag: { limit: 0 },
            Comment: { limit: 0 },
            Menu: { limit: 0 },
            MenuItem: { limit: 0 },
            User: { limit: 0 },
            UserRole: { limit: 0 },
            PostFormat: { limit: 0 },

            // Custom/derived types observed as slow in build logs — skip in non-production
            Taxonomy: { limit: 0 },
            Achievement: { limit: 0 },
            PostAuthors: { limit: 0 },

            // Other unused custom types previously excluded
            FeatureUseCase: { limit: 0 },
            TechicalUseCase: { limit: 0 },
            Provider: { limit: 0 },
            UserAchievement: { limit: 0 },
            ContentType: { limit: 0 },
          },
        }),
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/fonts/*': ['Cache-Control: public, max-age=31536000, immutable'],
          '/lottie-assets/*': ['Cache-Control: public, max-age=31536000, immutable'],
          '/animations/*': ['Cache-Control: public, max-age=31536000, immutable'],
        },
      },
    },
    'gatsby-alias-imports',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: [
          '/changelog',
          '/changelog/*',
          '/customers',
          '/customers/*',
          '/blog',
          '/blog/*',
          '/pricing',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-segment-js`,
      options: {
        prodKey: process.env.GATSBY_SEGMENT_WRITE_KEY,
      },
    },
    // TODO: to uncomment the creation of podcast pages after this link works - https://feeds.transistor.fm/sourcelife
    // {
    //   resolve: `gatsby-source-rss-feed`,
    //   options: {
    //     url: `https://feeds.transistor.fm/sourcelife`,
    //     name: `Podcast`,
    //   },
    // },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.GITHUB_TOKEN,
        graphQLQuery: `
        query {
          repository(owner: "novuhq", name: "novu") {
            issues(first: 100, filterBy: {labels: ["polishing"]}) {
              nodes {
                title
                number
                url
                state
                assignees(first: 1) {
                  nodes {
                    name
                    login
                    avatarUrl
                    url
                  }
                }
                author {
                  url
                  avatarUrl
                  login 
                }
              }
            }
          }
        }`,
      },
    },
    {
      resolve: '@sentry/gatsby',
    },
  ],
};
