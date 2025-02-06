import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link/link';

const SectionWithCards = ({ title, cards, withLinks }) => (
  <section className="section-with-cards safe-paddings mt-40 lg:mt-[120px] md:mt-[100px] sm:mt-20">
    <div className="container-lg">
      <Heading
        className="mx-auto max-w-3xl text-center font-medium leading-denser tracking-snug md:text-[32px] sm:text-3xl"
        tag="h2"
        size="md"
        theme="white"
      >
        {title}
      </Heading>
      <ul className="mt-14 grid grid-cols-3 gap-8 lg:gap-7 md:mt-12 md:grid-cols-2 md:gap-6 sm:mt-10 xs:flex xs:flex-col xs:items-center">
        {cards.map(({ title, description, image, linkText, linkUrl }, index) => (
          <li className="group/item flex w-full justify-center md:last:col-span-2" key={index}>
            <div className="flex w-full max-w-[384px] flex-col rounded-xl bg-common-card-border p-px md:group-last/item:w-1/2 xs:group-last/item:w-full">
              <div className="aspect-[1.785] w-full shrink-0 overflow-hidden rounded-t-xl">
                {image}
              </div>
              <div className="flex grow flex-col justify-between gap-y-[12px] overflow-hidden rounded-b-xl bg-[#0F0F15] p-6 sm:p-5">
                <div>
                  <Heading
                    className="font-medium leading-tight tracking-snug md:text-xl sm:text-lg"
                    tag="h3"
                    size="xs"
                    theme="white"
                  >
                    {title}
                  </Heading>
                  <p className="mt-2 text-[15px] font-book leading-snug tracking-snug text-gray-8">
                    {description}
                  </p>
                </div>
                {withLinks && linkText && linkUrl && (
                  <Link
                    className="w-fit text-[15px] font-book leading-snug"
                    theme="primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    to={linkUrl}
                    withArrow
                  >
                    <span className="sr-only">{title}</span>
                    {linkText}
                  </Link>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default SectionWithCards;

SectionWithCards.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.node.isRequired,
      linkText: PropTypes.string,
      linkUrl: PropTypes.string,
    })
  ).isRequired,
  withLinks: PropTypes.bool,
};

SectionWithCards.defaultProps = {
  withLinks: false,
};
