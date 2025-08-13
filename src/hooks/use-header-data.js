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

const getChangelogContent = (data) => {
  if (!data || !data?.content[0]?.content) return null;
  return data.content[0].content.map((item) => item.text).join('');
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
      url:
        // changelog?.id
        // ? `${LINKS.changeLog.to}/${changelog.id}` :
        DEFAULT_STATE.changelog.url,
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
