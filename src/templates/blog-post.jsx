/* eslint-disable react/prop-types */

import { CtaCard } from 'components/shared/cta-card';
import { graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import React from 'react';

import Author from 'components/pages/blog-post/author';
import Code from 'components/pages/blog-post/code';
import Hero from 'components/pages/blog-post/hero';
import RelatedArticles from 'components/pages/blog-post/related-articles';
import SocialShare from 'components/pages/blog-post/social-share';
import TableOfContents from 'components/pages/blog-post/table-of-contents';
import Content from 'components/shared/content';
import Layout from 'components/shared/layout';
import Link from 'components/shared/link';
import CtaWithForm from 'components/shared/reusable-sections/cta-with-form/cta-with-form';
import SEO from 'components/shared/seo';
import Separator from 'components/shared/separator';
import ArrowIcon from 'images/arrow.inline.svg';
import getReactContentWithLazyBlocks from 'utils/get-react-content-with-lazy-blocks';

const getHeadings = (content) =>
  content.filter(
    (block) =>
      block?.props?.className === 'wp-block-heading' && (block.type === 'h2' || block.type === 'h3')
  );

const BlogPost = (props) => {
  const {
    data: {
      wpPost: {
        content,
        title,
        date,
        categories,
        pageBlogPost: { description, image, author, showTableOfContents },
      },
      relatedArticles,
    },
    location,
    pageContext,
  } = props;

  const hero = {
    title,
    description,
    image,
    author: {
      name: author.title,
      photo: author.postAuthor?.photo,
    },
    date,
    category: {
      name: categories.nodes[0].name,
      slug: categories.nodes[0].slug,
      color: categories.nodes[0].categories.color,
    },
    blogPageURL: pageContext.blogPageURL,
  };

  const socialShare = {
    url: location.href,
    author: {
      name: author.title,
      photo: author.postAuthor?.photo,
    },
    date,
  };

  const relatedArticlesProps = {
    items: relatedArticles.nodes.map((post) => ({
      title: post.title,
      category: {
        name: post.categories.nodes[0].name,
        slug: post.categories.nodes[0].slug,
        color: post.categories.nodes[0].categories.color,
      },
      date: post.date,
      url: post.url,
      image: post.pageBlogPost.image,
      description: post.pageBlogPost.description,
      author: {
        name: post.pageBlogPost.author.title,
        photo: post.pageBlogPost.author.postAuthor?.photo,
      },
    })),
    blogPageURL: pageContext.blogPageURL,
  };

  const contentWithLazyBlocks = getReactContentWithLazyBlocks(
    content,
    {
      blogpostcode: Code,
    },
    true
  );

  const headings = getHeadings(contentWithLazyBlocks);

  return (
    <Layout seo={{}}>
      <article className="safe-paddings pt-40 sm:pt-28">
        <div className="container-lm relative">
          <Link
            className="sticky top-8 z-10 -mb-8 -ml-28 flex h-8 w-8 items-center justify-center rounded-full bg-gray-2 transition-colors duration-200 hover:text-primary-1 lg:-ml-20 md:hidden"
            to={pageContext.blogPageURL}
          >
            <ArrowIcon className="h-2" />
          </Link>
          <Hero className="max-w-[704px] md:mx-auto md:max-w-[800px]" {...hero} />
          <div className="flex gap-x-16 md:flex-col">
            <div className="max-w-[704px] md:mx-auto md:max-w-[800px] sm:max-w-full">
              <Content content={contentWithLazyBlocks} />
              <Separator className="mt-14 px-0" backgroundColor="black" />
              <SocialShare className="hidden md:flex" {...socialShare} />
            </div>
            <aside className="mt-10 w-full max-w-[256px] md:mt-8 md:hidden">
              <div className="scrollbar-hidden sticky top-10 flex max-h-[calc(100vh-40px)] flex-col gap-y-12 overflow-y-auto">
                {showTableOfContents && <TableOfContents headings={headings} />}
                <Author author={author} />
                <SocialShare {...socialShare} />
                <CtaCard className="mt-4" />
              </div>
            </aside>
          </div>
        </div>
      </article>
      {relatedArticlesProps.items.length >= 3 && <RelatedArticles {...relatedArticlesProps} />}
      <CtaWithForm
        className="mb-[192px] mt-[238px] text-center"
        title="Novu is an open-source notification platform"
        description="Add a fully customizable Inbox component and email notifications to your app in minutes. No credit card required."
        leftItem={{
          text: 'Learn More',
          link: 'https://go.novu.co?utm_campaign=blog_cta',
        }}
      />
      <Separator backgroundColor="black" />
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($id: String!, $categorySlug: String!) {
    wpPost(id: { eq: $id }) {
      content
      title
      date
      url: uri
      categories {
        nodes {
          name
          slug
          categories {
            color
          }
        }
      }
      pageBlogPost {
        description
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 800, height: 431)
            }
          }
          altText
        }
        defaultOgImage: image {
          localFile {
            childImageSharp {
              gatsbyImageData(formats: JPG, width: 1200, height: 630)
            }
          }
          altText
        }
        ogImage: socialImage {
          localFile {
            childImageSharp {
              gatsbyImageData(formats: JPG, width: 1200, height: 630)
            }
          }
          altText
        }
        author {
          ... on WpPostAuthors {
            title
            postAuthor {
              photo {
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 36, height: 36)
                  }
                }
              }
            }
          }
        }
        showTableOfContents
      }
      ...wpPostSeo
    }

    relatedArticles: allWpPost(
      filter: {
        categories: { nodes: { elemMatch: { slug: { eq: $categorySlug } } } }
        id: { ne: $id }
      }
      limit: 3
    ) {
      nodes {
        content
        title
        date
        url: uri
        categories {
          nodes {
            name
            slug
            categories {
              color
            }
          }
        }
        pageBlogPost {
          description
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 800, height: 431)
              }
            }
            altText
          }
          author {
            ... on WpPostAuthors {
              title
              postAuthor {
                photo {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(width: 36, height: 36)
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default BlogPost;

export const Head = ({
  data: {
    wpPost: {
      seo,
      pageBlogPost: { ogImage, defaultOgImage },
    },
  },
}) => {
  const pageMetadata = {
    ...seo,
    description: seo.description || seo.defaultDescription,
    ogImage: ogImage
      ? getSrc(ogImage?.localFile?.childImageSharp)
      : getSrc(defaultOgImage.localFile.childImageSharp),
  };
  return <SEO {...pageMetadata} />;
};
