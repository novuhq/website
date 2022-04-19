import PropTypes from 'prop-types';

const ArticleCardPropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }),
  date: PropTypes.string.isRequired,
  cover: PropTypes.shape({
    alternativeText: PropTypes.string,
    localFile: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: PropTypes.any.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.shape({
      alternativeText: PropTypes.string,
      localFile: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          gatsbyImageData: PropTypes.any.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  blogPageURL: PropTypes.string.isRequired,
};

export default ArticleCardPropTypes;
