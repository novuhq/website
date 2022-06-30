import { navigate } from '@reach/router';
import { axios } from 'helpers/axios';
import React from 'react';

import Achievements from 'components/pages/contributor/achievements';
import Activity from 'components/pages/contributor/activity';
import Profile from 'components/pages/contributor/profile';
import GetStarted from 'components/shared/get-started';
import Layout from 'components/shared/layout';
import Separator from 'components/shared/separator';

const ContributorPage = ({ serverData: { contributor }, location }) => {
  if (!contributor) {
    navigate('/not-found');
    return <></>;
  }

  const SEO = {
    title: `Novu - ${contributor.github || contributor.name}`,
    description: `Come and meet our awesome contributor ${contributor.github || contributor.name}`,
    slug: `contributor/${contributor.github}`,
    preventIndexing: false,
    ogImage: contributor.images.ogImage,
  };
  return (
    <Layout seo={SEO}>
      <div className="safe-paddings pt-44 md:pt-30 sm:pt-22">
        <div className="container-lg grid grid-cols-12 items-start gap-x-8 lg:gap-x-7 md:flex md:flex-col md:gap-x-0">
          <Profile contributor={contributor} />
          <div className="col-span-8 md:w-full">
            <Achievements contributor={contributor} url={location.href} />
            <Separator className="px-0 pt-8 pb-20 sm:pb-16" backgroundColor="black" />
            <Activity contributor={contributor} />
          </div>
        </div>
      </div>
      <GetStarted />
      <Separator backgroundColor="black" />
    </Layout>
  );
};

export default ContributorPage;

export async function getServerData(context) {
  const { data: contributor } = await axios.get(`/contributor/${context.params.id}`);
  const ogImage = `${process.env.GATSBY_CONTRIBUTORS_API_URL}/profiles/${contributor.github}.jpg`;
  const embedImage = `${process.env.GATSBY_CONTRIBUTORS_API_URL}/profiles/${contributor.github}-small.jpg`;
  return {
    props: {
      contributor: { ...contributor, images: { ogImage, embedImage } },
    },
  };
}
