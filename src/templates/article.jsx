/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Content from 'components/pages/article/content';
import Hero from 'components/pages/article/hero';
import Layout from 'components/shared/layout';

const Article = ({ data: { strapiArticle: article }, pageContext }) => {
  // eslint-disable-next-line no-unused-vars
  const seo = {
    metaTitle: article.seo.metaTitle,
    metaDescription: article.seo.metaDescription,
    // socailImage: article.seo.socailImage,
  };

  const hero = {
    title: article.title,
    description: article.description,
    image: article.cover,
    author: article.author,
    createdAt: article.createdAt,
    category: article.category,
    blogPageURL: pageContext.blogPageURL,
  };

  const content = {
    content: article.content.data.childrenMdx[0].body,
    contentMedia: article.content.medias,
  };

  return (
    <Layout>
      <article className="safe-paddings bg-black pt-40">
        <div className="container-sm">
          <Hero {...hero} />
          <Content {...content} />
        </div>
      </article>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($id: String!) {
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
        metaTitle
        metaDescription
      }
    }
  }
`;

export default Article;
