import React from 'react';

import Heading from '../../components/shared/heading';
import Layout from '../../components/shared/layout';
import { axios } from '../../helpers/axios';
import { medals } from '../contributors/[page]';

const Contributor = ({
  pageResources: {
    json: {
      serverData: { contributor },
    },
  },
}) => (
    <Layout>
      <section className="hero safe-paddings relative overflow-hidden bg-black pt-32 pb-20">
        <div className="container relative z-10 flex flex-col items-center">
          <Heading
            className="max-w-[764px] text-center font-normal leading-tight"
            size="xl"
            tag="h1"
            theme="white"
          >
            <img
              src={contributor.avatar_url}
              style={{ maxWidth: 100, borderRadius: '100%', margin: '0 auto' }}
            />
            {contributor.name || contributor.github}
          </Heading>
          {!!contributor.bio && (
            <div className="mt-5">
              <strong className="text-white">{contributor.bio}</strong>
              <br />
            </div>
          )}
          {!!contributor.languages && !!contributor.languages.length && (
            <strong className="text-white">
              Languages: {contributor.languages.join(', ')}
              <br />
              <br />
            </strong>
          )}
          {!!contributor.location && (
            <div className="content-center text-white">Location: {contributor.location}</div>
          )}
          {!!contributor.twitter && (
            <div className="content-center text-white">Twitter: @{contributor.twitter}</div>
          )}
          {!!contributor.github && (
            <div className="content-center text-white">Github: {contributor.github}</div>
          )}
          <div className="content-center text-white">
            {medals
              .reduce((all, current) => {
                if (current.amount <= contributor.totalLast3MonthsPulls) {
                  all.push(current.name);
                  return all;
                } if (current.amount <= contributor.totalPulls) {
                  all.push(`${current.name} (Grayed)`);
                  return all;
                }

                return all;
              }, [])
              .join(', ')}
          </div>
          <Heading
            className="mt-10 max-w-[764px] text-center font-normal leading-tight"
            size="md"
            tag="h2"
            theme="white"
          >
            Last contribution
          </Heading>
          <div className="mt-10 grid grid-cols-3 content-center gap-x-10 gap-y-5 lg:grid-cols-2 sm:grid-cols-1">
            {!!contributor.pulls &&
              contributor.pulls.map((polls) => (
                <div className="rounded-[20px] bg-gradient-to-b from-gray-2 to-[rgba(26,26,26,0.7)] p-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-7 md:gap-x-5 sm:block">
                  <a href={polls.html_url} target="_blank" rel="noreferrer">
                    <Heading className="leading-snug sm:text-2xl" tag="h3" size="sm" theme="white">
                      {polls.title}
                    </Heading>
                  </a>
                </div>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );

export async function getServerData(context) {
  const contributor = await axios.get(`/contributor/${context.params.id}`);

  return {
    props: {
      contributor: contributor.data,
    },
  };
}

export default Contributor;
