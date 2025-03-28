import { useStaticQuery, graphql } from 'gatsby';

import LINKS from 'constants/links';

const DEFAULT_STATE = {
  changelog: {
    title: 'Changelog',
    description: 'Loading...',
    url: LINKS.changeLog.to,
    image: '/images/header/illustration-changelog.jpg',
  },
  post: {
    title: 'Post',
    description: 'Loading...',
    url: LINKS.blog.to,
    image: '/images/header/illustration-post.jpg',
  },
};

const getChangelogContent = (data) => {
  if (Array.isArray(data)) return getChangelogContent(data[0]);
  if (data?.text) return data.text;
  return getChangelogContent(data.content);
};

export default function useHeaderData() {
  const data = useStaticQuery(graphql`
    query {
      productlaneChangelog {
        title
        notes
        id
        imageUrl
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

  const changelog = data.productlaneChangelog;
  const lastPost = data.lastPost?.nodes?.[0];

  return {
    changelog: {
      title: changelog?.title || DEFAULT_STATE.changelog.title,
      description: changelog?.notes
        ? getChangelogContent(changelog.notes)
        : DEFAULT_STATE.changelog.description,
      url: changelog?.id
        ? `https://roadmap.novu.co/changelog/${changelog.id}`
        : DEFAULT_STATE.changelog.url,
      image: changelog?.imageUrl || DEFAULT_STATE.changelog.image,
    },
    post: {
      title: lastPost?.title || DEFAULT_STATE.post.title,
      description: lastPost?.pageBlogPost?.description || DEFAULT_STATE.post.description,
      url: lastPost?.uri || DEFAULT_STATE.post.url,
      image: lastPost?.pageBlogPost?.image?.link || DEFAULT_STATE.post.image,
    },
  };
}
