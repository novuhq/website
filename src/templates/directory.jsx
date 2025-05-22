import React from 'react';

import PostsList from 'components/pages/directory/posts-list';
import Layout from 'components/shared/layout';

const DirectoryIndex = ({ pageContext }) => {
  const templates = pageContext.posts;

  return (
    <Layout>
      <section className="safe-paddings mb-[176px] mt-[154px] lg:mb-[152px] lg:mt-[138px] md:mb-[136px] md:mt-[130px] sm:mb-[96px] sm:mt-[112px]">
        <div className="container-md sm:px-5">
          <h1 className="mx-auto text-center text-[56px] font-medium leading-denser tracking-snug lg:text-[52px] md:text-[48px] sm:text-[32px]">
            Find your template
          </h1>
          <p className="mx-auto mt-[16px] max-w-[392px] text-center text-lg font-book leading-normal tracking-snug text-gray-8 md:mt-[14px] md:text-[16px] sm:mt-[12px] sm:text-[14px]">
            Optionally extend your Novu workflows with a locally-run Novu Framework engine.
          </p>
          <PostsList posts={templates} className="mt-[62px] lg:mt-[54px] md:mt-[40px]" />
        </div>
      </section>
    </Layout>
  );
};

export default DirectoryIndex;
