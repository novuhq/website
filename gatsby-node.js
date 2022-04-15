const path = require('path');

const slash = require('slash');

const createArticles = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const template = path.resolve('./src/templates/article.jsx');

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

  await createArticles(params);
};
