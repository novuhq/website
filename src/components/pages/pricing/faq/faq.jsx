import React from 'react';

import Heading from 'components/shared/heading';

import Question from './question';

const FAQ_DATA = [
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing massa sed ultrices sed felis volutpat ac. Congue sit nibh sed ipsum, erat facilisis mauris. Amet, est urna facilisi tempus ut amet. Pharetra orci curabitur faucibus purus in nibh. Dolor, sodales malesuada nec vitae scelerisque leo convallis ac dictumst. Euismod.',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing massa sed ultrices sed felis volutpat ac. Congue sit nibh sed ipsum, erat facilisis mauris. Amet, est urna facilisi tempus ut amet. Pharetra orci curabitur faucibus purus in nibh. Dolor, sodales malesuada nec vitae scelerisque leo convallis ac dictumst. Euismod.',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing massa sed ultrices sed felis volutpat ac. Congue sit nibh sed ipsum, erat facilisis mauris. Amet, est urna facilisi tempus ut amet. Pharetra orci curabitur faucibus purus in nibh. Dolor, sodales malesuada nec vitae scelerisque leo convallis ac dictumst. Euismod.',
  },
];

const FAQ = () => (
  <section className="safe-paddings bg-gray-2 py-20 lg:py-16 md:py-12 sm:py-10">
    <div className="container-md text-center">
      <Heading className="leading-tight md:text-5xl sm:text-4xl" size="xl" tag="h2" theme="white">
        Frequently Asked Questions
      </Heading>
      <p className="mt-7 text-lg font-book text-gray-9 md:text-base">
        Looking for answers? Here are some common questions we've been asked.
      </p>
      <ul className="mt-16 divide-y divide-gray-3 border-y border-gray-3 md:mt-14 sm:mt-11">
        {FAQ_DATA.map((questionItem, index) => (
          <Question {...questionItem} key={index} />
        ))}
      </ul>
    </div>
  </section>
);

export default FAQ;
