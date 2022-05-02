// eslint-disable-next-line import/no-extraneous-dependencies
import { MDXProvider } from '@mdx-js/react';
import clsx from 'clsx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import PropTypes from 'prop-types';
import React from 'react';
import slugify from 'slugify';

const Heading =
  (Tag) =>
  // eslint-disable-next-line react/prop-types
  ({ children }) => {
    const id =
      typeof children === 'string'
        ? slugify(children, { strict: true }).toLocaleLowerCase()
        : undefined;

    return <Tag id={id}>{children}</Tag>;
  };

const Paragraph = ({ children }) => {
  // We have this check in order NOT to wrap specified elements into <p> tag
  if (
    children?.props?.mdxType === 'img' ||
    children?.props?.mdxType === 'figure' ||
    children?.props?.className === 'gatsby-resp-image-wrapper'
  ) {
    return children;
  }

  return <p>{children}</p>;
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};

const Image = (contentMedia, src, alt) => {
  // Retrieve an image from a static folder by comparing paths
  // eslint-disable-next-line react/destructuring-assignment
  const image = contentMedia.find((element) => element.src === src);
  return (
    <GatsbyImage
      className="w-full"
      image={getImage(image.localFile)}
      imgClassName="rounded-xl"
      alt={alt}
    />
  );
};

const Content = ({ className, content, contentMedia }) => {
  const components = {
    h2: Heading('h2'),
    h3: Heading('h3'),
    p: Paragraph,
    img: ({ src, alt }) =>
      contentMedia ? Image(contentMedia, src, alt) : <img src={src} alt={alt} loading="lazy" />,
  };
  return (
    <div className="mt-10 md:mt-8">
      <div className={clsx('content', className)}>
        <MDXProvider components={components}>
          <MDXRenderer>{content}</MDXRenderer>
        </MDXProvider>
      </div>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  contentMedia: PropTypes.arrayOf(PropTypes.any),
};

Content.defaultProps = {
  className: null,
  contentMedia: null,
};

export default Content;
