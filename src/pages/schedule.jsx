import { axios } from 'helpers/axios';
import React from 'react';

import Heading from '../components/shared/heading';
import Layout from '../components/shared/layout';

const SchedulePage = () => (
  <Layout
    seo={{
      slug: '/schedule',
      title: 'Schedule',
      preventIndexing: true,
      description: 'Schedule Eventt',
    }}
  >
    <section className="safe-paddings relative overflow-hidden py-36 lg:py-32 md:pt-28 md:pb-10 sm:pt-18">
      <div className="container relative z-10">
        <article>
          <div className="col-start-1 col-end-6 flex flex-col md:order-2 md:mt-5">
            <header>
              <Heading className="font-medium leading-denser" size="xl" tag="h1" theme="white">
                The Source Life Podcast Recording
              </Heading>
            </header>
          </div>
        </article>
        <article>
          <div className="col-start-1 col-end-6 flex flex-col md:order-2 md:mt-5">
            <header>
              <Heading className="mt-4 sm:text-3xl" size="sm" tag="h2" theme="white">
                Thank you for willing to participate in our next podcast episode.
                <br />
                We would be grateful if you can schedule two meeting with us.
                <br />
                1. An overview about the episode and agenda (30min).
                <br />
                2. Recording the episode (1 hr 20 min).
              </Heading>
            </header>
          </div>
        </article>
        <article style={{ display: 'flex', justifyContent: 'center' }}>
          <iframe
            className="mt-20"
            style={{ background: 'black', overflow: 'hiddem', width: 500, height: 778 }}
            src="https://calendly.com/source-life/30min?background_color=000000&text_color=ffffff&primary_color=ff16cc"
          />
          <iframe
            className="mt-20"
            style={{ background: 'black', overflow: 'hiddem', width: 500, height: 826 }}
            src="https://calendly.com/source-life/podcast-recording?background_color=000000&text_color=ffffff&primary_color=ff16cc"
          />
        </article>
      </div>
    </section>
  </Layout>
);

export default SchedulePage;

export async function getServerData() {
  try {
    const issues = await axios.get(`/issues`);

    return {
      props: {
        issues: issues.data.issues,
      },
    };
  } catch (err) {
    console.log(err);
  }
}
