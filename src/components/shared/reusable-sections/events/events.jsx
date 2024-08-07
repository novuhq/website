import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import { getFormattedDate } from 'utils/get-formatted-date';

const Events = ({ title, description, buttonText, buttonUrl, events }) => (
  <section className="events relative safe-paddings mt-40 lg:mt-[120px] md:mt-[100px] sm:mt-20">
    <div className="container relative grid grid-cols-12 grid-gap-x z-10">
      <header className="col-span-4 col-start-3 pt-3 xl:col-span-5 xl:col-start-2 lg:col-span-6 lg:pt-0 sm:col-span-full">
        <Heading
          className="font-medium leading-denser lg:text-5xl lg:leading-tight md:text-[32px] sm:text-3xl"
          tag="h2"
          size="44"
          theme="white"
        >
          {title}
        </Heading>
        <p className="mt-4 text-gray-9 font-light leading-snug sm:mt-3">{description}</p>
        <Button className="mt-7 h-12 px-6 text-[13px]" theme="gray-outline" to={buttonUrl}>
          {buttonText}
        </Button>
      </header>
      <ul className="col-span-4 pl-[50px] flex gap-y-6 flex-col xl:col-span-5 lg:col-span-6 lg:pl-[52px] md:pl-0 sm:col-span-full sm:mt-8 sm:gap-y-5">
        {events.map(
          (
            { title, description, category, categoryColor, date, venue, linkUrl, linkText },
            index
          ) => {
            const isExternalLink = linkUrl.startsWith('http');
            const additionalLinkProps = isExternalLink
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {};

            return (
              <li key={index} className="flex flex-col items-center'">
                <article
                  className={clsx(
                    index !== events.length - 1 && 'border-b pb-6 border-gray-3 sm:pb-5',
                    'lg:max-w-[405px] sm:max-w-none'
                  )}
                >
                  <header className="flex gap-x-2.5 text-sm leading-denser text-gray-6">
                    <span className={clsx(categoryColor)}>{category}</span>
                    <time
                      className="relative pl-[11px] before:absolute before:left-0 before:w-px before:top-px before:bg-gray-4 before:h-3.5"
                      dateTime={venue}
                    >
                      {getFormattedDate(date)}
                    </time>
                    <span className="relative pl-[11px] before:absolute before:left-0 before:w-px before:top-px before:bg-gray-4 before:h-3.5">
                      {venue}
                    </span>
                  </header>
                  <h3 className="mt-2 text-2xl leading-tight md:text-xl sm:text-lg">{title}</h3>
                  <p className="mt-2 text-gray-9 font-light leading-snug">{description}</p>
                  <Link
                    className="mt-4 text-[13px] font-medium !tracking-normal leading-none inline-block"
                    theme="primary-underline"
                    to={linkUrl}
                    {...additionalLinkProps}
                  >
                    {linkText}
                  </Link>
                </article>
              </li>
            );
          }
        )}
      </ul>
    </div>
    <div
      className="absolute w-[1379px] h-[579px] bg-[linear-gradient(171.41deg,rgba(245,117,224,0.9)21.93%,rgba(178,129,242,0.74)54.47%,rgba(117,153,245,0.6)84.89%)] left-1/2 -top-10 -translate-x-1/2 pointer-events-none rounded-[50%] opacity-5 blur-3xl rotate-[11deg] z-0"
      aria-hidden
    />
  </section>
);

Events.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string.isRequired,
  events: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      categoryColor: PropTypes.oneOf(['text-purple-2', 'text-blue-2', 'text-yellow-2']).isRequired,
      date: PropTypes.string.isRequired,
      venue: PropTypes.string.isRequired,
      linkUrl: PropTypes.string.isRequired,
      linkText: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Events;
