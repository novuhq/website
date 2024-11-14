import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import { getFormattedDate } from 'utils/get-formatted-date';

const Events = ({ title, description, buttonText, buttonUrl, buttonRel, buttonTarget, events }) => (
  <section className="events safe-paddings relative mt-40 lg:mt-[120px] md:mt-[100px] sm:mt-20">
    <div className="container grid-gap-x relative z-10 grid grid-cols-12">
      <header className="col-span-4 col-start-3 -mr-4 pt-1 xl:col-span-5 xl:col-start-2 lg:col-span-6 lg:mr-0 sm:col-span-full">
        <Heading
          className="font-medium leading-denser tracking-snug lg:text-5xl lg:leading-tight md:text-[32px] sm:text-3xl"
          tag="h2"
          size="xl"
          theme="white"
        >
          {title}
        </Heading>
        <p className="mt-4 text-lg font-book tracking-snug text-gray-8 md:text-base sm:mt-3">
          {description}
        </p>
        <Button
          className="mt-8 md:mt-6 sm:mt-5"
          theme="gray-outline"
          size="sm"
          to={buttonUrl}
          rel={buttonRel}
          target={buttonTarget}
        >
          {buttonText}
        </Button>
      </header>
      <ul className="col-span-4 flex flex-col gap-y-7 pl-18 xl:col-span-5 lg:col-span-6 lg:pl-[52px] md:pl-0 sm:col-span-full sm:mt-8 sm:gap-y-5">
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
              <li key={index} className="items-center' flex flex-col">
                <article
                  className={clsx(
                    index !== events.length - 1 && 'border-b border-gray-3 pb-7 sm:pb-5',
                    'lg:max-w-[405px] sm:max-w-none'
                  )}
                >
                  <header className="flex gap-x-2.5 text-sm leading-denser text-gray-6">
                    <span className={clsx(categoryColor)}>{category}</span>
                    <time
                      className="relative pl-[11px] before:absolute before:left-0 before:top-px before:h-3.5 before:w-px before:bg-gray-4"
                      dateTime={venue}
                    >
                      {getFormattedDate(date)}
                    </time>
                    <span className="relative pl-[11px] before:absolute before:left-0 before:top-px before:h-3.5 before:w-px before:bg-gray-4">
                      {venue}
                    </span>
                  </header>
                  <Heading
                    className="mt-3 leading-denser tracking-snug md:text-xl sm:text-lg"
                    tag="h3"
                    size="xs"
                    theme="white"
                  >
                    {title}
                  </Heading>
                  <p className="mt-2.5 font-book leading-snug tracking-snug text-gray-8">
                    {description}
                  </p>
                  <Link
                    className="mt-3 w-fit text-[15px] font-book leading-snug !tracking-normal"
                    theme="primary"
                    to={linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    withArrow
                    {...additionalLinkProps}
                  >
                    <span className="sr-only">{title} - </span>
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
      className="pointer-events-none absolute -top-10 left-1/2 z-0 h-[579px] w-[1379px] -translate-x-1/2 rotate-[11deg] rounded-[50%] bg-[linear-gradient(171.41deg,rgba(245,117,224,0.9)21.93%,rgba(178,129,242,0.74)54.47%,rgba(117,153,245,0.6)84.89%)] opacity-5 blur-3xl"
      aria-hidden
    />
  </section>
);

Events.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string.isRequired,
  buttonRel: PropTypes.string,
  buttonTarget: PropTypes.string,
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
