import clsx from 'clsx';
import React from 'react';

import IndexCard from 'components/pages/directory/index-card';

const PostsList = ({ posts, className = 'mt-12 lg:mt-[54px] md:mt-10' }) => (
  <ul
    className={clsx(
      'mx-auto grid grid-cols-3 gap-5 md:max-w-[704px] md:grid-cols-2 md:gap-6 sm:mt-8 xs:max-w-[440px] xs:grid-cols-1 xs:gap-y-[18px]',
      className
    )}
  >
    {posts.map(({ frontmatter, fields }) => {
      const { title, description, images } = frontmatter;

      return (
        <IndexCard
          key={fields.directorySlug}
          title={title}
          description={description}
          image={images?.[0]}
          slug={fields.directorySlug}
        />
      );
    })}
  </ul>
);

export default PostsList;
