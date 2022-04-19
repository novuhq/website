const path = require('path');

const slash = require('slash');

const createBlogPage = async ({ graphql, actions, reporter }) => {
  const POSTS_PER_PAGE = 13;

  const { createPage } = actions;

  const result = await graphql(
    `
      {
        strapiBlog {
          id
          slug
          featuredPost {
            id
          }
        }

        allStrapiArticle {
          nodes {
            id
            slug
            category {
              id
            }
          }
        }

        allStrapiCategory(sort: { fields: name, order: ASC }) {
          nodes {
            id
            slug
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading your Strapi articles`, result.errors);

    return;
  }

  const {
    strapiBlog,
    allStrapiArticle: { nodes: articles },
    allStrapiCategory: { nodes: categories },
  } = result.data;
  const blogPageURL = strapiBlog.slug;

  const articlesWithoutArticleInHeroSection = articles.filter(
    (post) => post.id !== strapiBlog.featuredPost.id
  );
  const template = path.resolve('./src/templates/blog.jsx');

  const context = {
    id: strapiBlog.id,
    featuredPostId: strapiBlog.featuredPost.id,
    blogPageURL,
  };

  createPage({
    path: blogPageURL,
    component: slash(template),
    context,
  });

  // Creating non category pages
  const pageCount = Math.ceil(articlesWithoutArticleInHeroSection.length / POSTS_PER_PAGE);

  Array.from({ length: pageCount }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/${blogPageURL}` : `/${blogPageURL}/${index + 1}`,
      component: slash(template),
      context: {
        ...context,
        limit: POSTS_PER_PAGE,
        skip: index * POSTS_PER_PAGE,
        pageCount,
        currentPage: index,
      },
    });
  });

  // Creating pages for each category
  categories.forEach((category) => {
    const articlesForCategory = articlesWithoutArticleInHeroSection.filter((article) => {
      const articleCategoryId = article.category.id;
      return articleCategoryId === category.id;
    });

    const pageCount = Math.ceil(articlesForCategory.length / POSTS_PER_PAGE);
    Array.from({ length: pageCount }).forEach((_, index) => {
      createPage({
        path:
          index === 0
            ? `/${blogPageURL}/${category.slug}`
            : `/${blogPageURL}/${category.slug}/${index + 1}`,
        component: slash(template),
        context: {
          ...context,
          limit: POSTS_PER_PAGE,
          skip: index * POSTS_PER_PAGE,
          pageCount,
          currentPage: index,
          categoryId: category.id,
          categoryPath: `${category.slug}/`,
        },
      });
    });
  });
};

const createArticles = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        strapiBlog {
          slug
        }

        allStrapiArticle {
          nodes {
            id
            slug
            category {
              name
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading your Strapi articles`, result.errors);

    return;
  }

  const {
    strapiBlog: { slug: blogPageURL },
    allStrapiArticle: { nodes: articles },
  } = result.data;
  const template = path.resolve('./src/templates/article.jsx');

  if (articles.length) {
    articles.forEach(({ id, slug, category: { name: categoryName } }) => {
      const context = {
        id,
        categoryName,
        blogPageURL,
      };

      createPage({
        path: `/${blogPageURL}/${slug}`,
        component: slash(template),
        context,
      });
    });
  }
};

exports.createPages = async (args) => {
  const params = {
    ...args,
  };

  await createBlogPage(params);
  await createArticles(params);
};
