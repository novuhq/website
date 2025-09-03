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
  trailingSlash: 'always',
  plugins: [
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
        // specify the correct path to your sitemap
        sitemap: `${process.env.GATSBY_DEFAULT_SITE_URL}/sitemap-index.xml`,
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
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allWpPost } }) =>
              allWpPost.edges.map((edge) => ({
                title: edge.node.title,
                description: edge.node.pageBlogPost.description,
                url: site.siteMetadata.siteUrl + edge.node.uri,
                guid: site.siteMetadata.siteUrl + edge.node.uri,
                relDir: edge.relativeDirectory,
                custom_elements: [{ 'content:encoded': edge.node.content }],
              })),
            query: `
              {
                allWpPost(sort: {date: DESC}) {
                  edges {
                    node {
                      content
                      title
                      uri
                      pageBlogPost {
                        description
                      }
                    }
                  }
                }
              }
            `,
            output: '/blog/rss.xml',
            title: 'Novu Blog',
          },
        ],
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
          fallbackImageMaxWidth: 800, // max-width of the content area
          imageQuality: 85,
        },
        develop: {
          nodeUpdateInterval: process.env.WP_NODE_UPDATE_INTERVAL || 5000,
          hardCacheMediaFiles: process.env.WP_HARD_CACHE_MEDIA === 'true',
          hardCacheData: process.env.WP_HARD_CACHE_DATA === 'true',
        },
        schema: {
          timeout: 60000,
        },
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
    'gatsby-plugin-sitemap',
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
