import PropTypes from 'prop-types';

const BlogPostCardPropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.shape({
    altText: PropTypes.string,
    localFile: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: PropTypes.any.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.shape({
      altText: PropTypes.string,
      localFile: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          gatsbyImageData: PropTypes.any.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  blogPageURL: PropTypes.string.isRequired,
};

export default BlogPostCardPropTypes;
