/* eslint-disable react/prop-types */
import clsx from 'clsx';
import { graphql } from 'gatsby';
import React from 'react';

import ArticlesList from 'components/pages/blog/articles-list';
import Categories from 'components/pages/blog/categories';
import Hero from 'components/pages/blog/hero';
import Pagination from 'components/pages/blog/pagination';
import Layout from 'components/shared/layout';
import Separator from 'components/shared/separator';
import Subscribe from 'components/shared/subscribe';

const BlogPage = (props) => {
  const {
    data: {
      strapiBlog: page,
      allStrapiCategory: { nodes: categories },
      allStrapiArticle: { nodes: articles },
      allStrapiArticleForCategories: { nodes: articlesForCategories },
    },
    pageContext,
  } = props;

  // categories that have articles without considering the featured article
  const categoriesList = categories.filter((category) =>
    articles.some((article) => article.category.id === category.id)
  );

  const seo = {
    title: page.seo?.title,
    description: page.seo?.description,
    slug: page.slug,
    preventIndexing: page.seo?.preventIndexing,
    keywords: page.seo?.keywords,
    ogImage: page.seo?.ogImage?.localFile.publicURL,
  };

  const hero = {
    title: page.featuredPost.title,
    description: page.featuredPost.description,
    slug: `/${pageContext.blogPageURL}/${page.featuredPost.slug}`,
    category: {
      url: `/${pageContext.blogPageURL}/${page.featuredPost.category.slug}`,
      ...page.featuredPost.category,
    },
    image: page.featuredPost.cover,
    date: page.featuredPost.date,
    author: page.featuredPost.author,
  };

  const articlesList = {
    items: articlesForCategories.map((article) => ({
      ...article,
      slug: `/${pageContext.blogPageURL}/${article.slug}`,
    })),
    blogPageURL: pageContext.blogPageURL,
  };

  return (
    <Layout seo={seo}>
      <Hero {...hero} />

      {!!articlesList.items.length && (
        <div className={clsx('bg-gray-2 pb-20')}>
          {!!categoriesList.length && (
            <Categories
              items={categoriesList}
              activeCategoryId={pageContext.categoryId || 'none'}
              blogPageURL={pageContext.blogPageURL}
            />
          )}
          <ArticlesList {...articlesList} />
          {pageContext.pageCount > 1 && (
            <>
              <Separator className="mt-14" size="lg" backgroundColor="gray" />
              <Pagination
                pageCount={pageContext.pageCount}
                currentPageIndex={pageContext.currentPage}
                blogPageURL={pageContext.blogPageURL}
                categoryPath={pageContext.categoryPath}
              />
            </>
          )}
        </div>
      )}

      <Subscribe />
      <Separator backgroundColor="black" />
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($featuredPostId: String!, $categoryId: String, $skip: Int, $limit: Int) {
    strapiBlog {
      id
      slug
      featuredPost {
        id
        title
        description
        slug
        category {
          id
          name
          slug
          color
        }
        date(formatString: "MMMM D, YYYY")
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
              gatsbyImageData(width: 592, height: 360)
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

    allStrapiCategory(sort: { fields: name, order: ASC }) {
      nodes {
        id
        name
        slug
      }
    }

    allStrapiArticle(filter: { id: { ne: $featuredPostId } }) {
      nodes {
        id
        category {
          id
        }
      }
    }

    allStrapiArticleForCategories: allStrapiArticle(
      filter: { id: { ne: $featuredPostId }, category: { id: { eq: $categoryId } } }
      sort: { fields: date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        id
        slug
        date(formatString: "MMMM D, YYYY")
        category {
          id
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
        imageMedium: cover {
          alternativeText
          localFile {
            url
            childImageSharp {
              gatsbyImageData(width: 380, height: 212)
            }
          }
        }
        imageLarge: cover {
          alternativeText
          localFile {
            url
            childImageSharp {
              gatsbyImageData(width: 592, height: 360)
            }
          }
        }
      }
    }
  }
`;

export default BlogPage;
