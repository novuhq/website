import React from 'react';

import PostsList from 'components/pages/directory/posts-list';

const RelatedPosts = ({ otherPosts }) => (
  <section className="container-md mb-[128px] md:mb-[112px]">
    <h2 className="text-center text-[44px] font-medium leading-denser tracking-snug md:text-[36px] sm:text-[32px]">
      Check out more
    </h2>
    <PostsList posts={otherPosts} />
  </section>
);

export default RelatedPosts;
