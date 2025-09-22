import { useStaticQuery, graphql } from 'gatsby';

import LINKS from 'constants/links';

const DEFAULT_STATE = {
  changelog: {
    title: 'Check out our latest updates',
    description: 'Stay up to date with our latest changes and features',
    url: LINKS.changeLog.to,
    image: '/images/header/illustration-changelog.jpg',
  },
  post: {
    title: 'Check out our latest blog posts',
    description: 'Discover new blog posts covering product updates, stories, and more',
    url: LINKS.blog.to,
    image: '/images/header/illustration-post.jpg',
  },
};

function getChangelogCaptionFromContent(content) {
  if (!Array.isArray(content)) return '';
  return content
    .map((block) => {
      if (block?._type === 'block' && Array.isArray(block.children)) {
        return block.children
          .filter((child) => typeof child.text === 'string')
          .map((child) => child.text)
          .join('');
      }
      return '';
    })
    .filter(Boolean)
    .join('\n')
    .slice(0, 300);
}

export default function useHeaderData() {
  const data = useStaticQuery(graphql`
    query HeaderDataFromSanityGROQ {
      sanityLatestChangelog {
        title
        slug
        cover {
          asset {
            url
            metadata {
              dimensions {
                width
                height
              }
            }
          }
        }
        content
        caption
      }
      lastPost: allWpPost(limit: 1, sort: { date: DESC }) {
        nodes {
          title
          uri
          pageBlogPost {
            description
            image {
              link
            }
          }
        }
      }
    }
  `);

  const changelog = data.sanityLatestChangelog;
  const changelogDescription =
    changelog?.caption || getChangelogCaptionFromContent(changelog?.content);
  const lastPost = data.lastPost?.nodes?.[0];

  const changelogPostSlug = changelog?.slug
    ? `${LINKS.changeLog.to}/${changelog?.slug}`
    : DEFAULT_STATE.changelog.url;

  return {
    changelog: {
      title: changelog?.title || DEFAULT_STATE.changelog.title,
      description: changelogDescription || DEFAULT_STATE.changelog.description,
      url: changelogPostSlug,
      image: changelog?.cover?.asset?.url || DEFAULT_STATE.changelog.image,
    },
    post: {
      title: lastPost?.title || DEFAULT_STATE.post.title,
      description: lastPost?.pageBlogPost?.description || DEFAULT_STATE.post.description,
      url: lastPost?.uri || DEFAULT_STATE.post.url,
      image: lastPost?.pageBlogPost?.image?.link || DEFAULT_STATE.post.image,
    },
  };
}
