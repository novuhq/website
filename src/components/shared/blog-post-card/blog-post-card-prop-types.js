import PropTypes from 'prop-types';

const BlogPostCardPropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    color: PropTypes.string,
  }).isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
  blogPageURL: PropTypes.string.isRequired,
};

export default BlogPostCardPropTypes;
