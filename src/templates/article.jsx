/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Content from 'components/pages/article/content';
import Hero from 'components/pages/article/hero';
import RelatedArticles from 'components/pages/article/related-articles';
import SocialShare from 'components/pages/article/social-share';
import Layout from 'components/shared/layout';
import Separator from 'components/shared/separator';

const Article = ({ data: { strapiArticle: article, relatedArticles }, location, pageContext }) => {
  const seo = {
    title: article.seo?.title,
    description: article.seo?.description,
    slug: `${pageContext.blogPageURL}/${article.slug}`,
    preventIndexing: article.seo?.preventIndexing,
    keywords: article.seo?.keywords,
    ogImage: article.seo?.ogImage?.localFile.publicURL,
  };

  const hero = {
    title: article.title,
    description: article.description,
    image: article.cover,
    author: article.author,
    date: article.createdAt,
    category: article.category,
    blogPageURL: pageContext.blogPageURL,
  };

  const content = {
    content: article.content.data.childrenMdx[0].body,
    contentMedia: article.content.medias,
  };

  const socialShare = {
    url: location.href,
    author: article.author,
    date: article.createdAt,
  };

  return (
    <Layout seo={seo}>
      <article className="safe-paddings pt-40">
        <div className="container-sm">
          <Hero {...hero} />
          <Content {...content} />
          <Separator className="mt-14" />
          <SocialShare {...socialShare} />
        </div>
      </article>
      <RelatedArticles items={relatedArticles.nodes} blogPageURL={pageContext.blogPageURL} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($id: String!, $categoryName: String!) {
    strapiArticle(id: { eq: $id }) {
      id
      slug
      createdAt(formatString: "MMMM D, YYYY")
      category {
        color
        name
        slug
      }
      title
      description
      author {
        name
        avatar {
          alternativeText
          localFile {
            url
            childImageSharp {
              gatsbyImageData(width: 36, height: 36)
            }
          }
        }
      }
      cover {
        alternativeText
        localFile {
          url
          childImageSharp {
            gatsbyImageData(width: 716, height: 386)
          }
        }
      }
      content {
        data {
          childrenMdx {
            body
          }
        }
        medias {
          src
          localFile {
            url
            childImageSharp {
              gatsbyImageData(width: 716)
            }
          }
        }
      }

      seo {
        title
        description
        preventIndexing
        keywords
        ogImage {
          localFile {
            publicURL
          }
        }
      }
    }

    relatedArticles: allStrapiArticle(
      limit: 3
      sort: { fields: createdAt, order: DESC }
      filter: { category: { name: { eq: $categoryName } }, id: { ne: $id } }
    ) {
      nodes {
        title
        description
        slug
        createdAt(formatString: "MMMM D, YYYY")
        category {
          color
          name
          slug
        }
        author {
          name
          avatar {
            alternativeText
            localFile {
              url
              childImageSharp {
                gatsbyImageData(width: 36, height: 36)
              }
            }
          }
        }
        cover {
          alternativeText
          localFile {
            url
            childImageSharp {
              gatsbyImageData(width: 716, height: 386)
            }
          }
        }
      }
    }
  }
`;

export default Article;
