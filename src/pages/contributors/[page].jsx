import clsx from 'clsx';
import { Link } from 'gatsby';
import React from 'react';

import Heading from '../../components/shared/heading';
import Layout from '../../components/shared/layout';
import { axios } from '../../helpers/axios';

export const medals = [
  {
    amount: 1,
    name: 'Bronze',
  },
  {
    amount: 3,
    name: 'Silver',
  },
  {
    amount: 7,
    name: 'Gold',
  },
];

const Page = ({
  pageResources: {
    json: {
      serverData: {
        contributors: { list, pages },
      },
    },
  },
  page,
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
            Contributors
          </Heading>
          <div>
            <div>
              <div className="mt-10 grid grid-cols-3 gap-x-10 gap-y-5 lg:grid-cols-2 sm:grid-cols-1">
                {list.map((contributor, index) => (
                  <Link to={`/contributor/${  contributor.github}`} key={index}>
                    <div className="rounded-[20px] bg-gradient-to-b from-gray-2 to-[rgba(26,26,26,0.7)] p-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-7 md:gap-x-5 sm:block">
                      <div>
                        <Heading
                          className="leading-snug sm:text-2xl"
                          tag="h3"
                          size="sm"
                          theme="white"
                        >
                          <img src={contributor.avatar_url} style={{ width: '100%' }} />
                          {contributor.name || contributor.github}
                        </Heading>
                        <p className="mt-3 font-light leading-snug text-gray-8 sm:mt-2.5">
                          <div>
                            {!!contributor.bio && (
                              <>
                                <strong>{contributor.bio}</strong>
                                <br />
                                <br />
                              </>
                            )}
                            {!!contributor.languages && !!contributor.languages.length && (
                              <strong>
                                Languages: {contributor.languages.join(', ')}
                                <br />
                                <br />
                              </strong>
                            )}
                            {contributor.totalLast3MonthsPulls} pulls in the last 3 months (
                            {contributor.totalPulls} in total)
                          </div>
                          {!!contributor.twitter && <div>@{contributor.twitter}</div>}
                          <div data-medals>
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
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <nav
            className="relative z-0 mt-10 inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <Link
              href="#"
              to={`/contributors/${  +page - 1}`}
              className="border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center rounded-l-md border bg-white px-2 py-2 text-sm font-medium"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            {[...new Array(pages)].map((m, index) => (
              <Link
                to={`/contributors/${  index + 1}`}
                className={clsx(
                  'bg-indigo-50 border-indigo-500 text-indigo-600 relative z-10 inline-flex items-center border px-4 py-2 text-sm font-medium',
                  +page === index + 1 ? 'bg-gray-8' : 'bg-white'
                )}
              >
                {index + 1}
              </Link>
            ))}
            <Link
              to={`/contributors/${  +page + 1}`}
              href="#"
              className="border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center rounded-r-md border bg-white px-2 py-2 text-sm font-medium"
            >
              <span className="sr-only">Next</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </nav>
        </div>
      </section>
    </Layout>
  );

export async function getServerData(context) {
  try {
    const contributors = await axios.get(`/contributors/${  context.params.page}`);

    return {
      props: {
        contributors: contributors.data,
      },
    };
  } catch (err) {
    console.log(err);
  }
}

export default Page;
