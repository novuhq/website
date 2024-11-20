import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import { getFormattedDate } from 'utils/get-formatted-date';

const EventsWithImages = ({
  title,
  description,
  buttonText,
  buttonUrl,
  buttonRel,
  buttonTarget,
  events,
}) => (
  <section className="events-with-images safe-paddings relative mt-40 lg:mt-[120px] md:mt-[100px] sm:mt-20">
    <div className="container-lg relative z-10 flex flex-col items-center">
      <header className="max-w-[788px] text-center md:max-w-lg">
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
      </header>
      <ul className="mt-14 grid grid-cols-3 gap-8 lg:mt-12 lg:gap-7 md:mt-10 md:grid-cols-2 md:gap-6 sm:mt-8 xs:flex xs:flex-col xs:items-center">
        {events.map(
          (
            { title, description, category, categoryColor, date, venue, linkUrl, linkText, image },
            index
          ) => {
            const isExternalLink = linkUrl.startsWith('http');
            const additionalLinkProps = isExternalLink
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {};

            return (
              <li className="group flex w-full justify-center md:last:col-span-2" key={index}>
                <article className="flex w-full max-w-[384px] flex-col md:group-last:w-1/2 xs:group-last:w-full">
                  <header className="flex flex-wrap gap-x-2.5 text-sm leading-denser text-gray-6">
                    <div className="mb-5 aspect-[1.785] w-full shrink-0 overflow-hidden rounded-lg">
                      {image}
                    </div>
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
                  <h3 className="mt-3 text-2xl leading-denser tracking-snug md:text-xl sm:text-lg">
                    {title}
                  </h3>
                  <p className="mt-2.5 font-light leading-snug tracking-snug text-gray-8">
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
      <Button
        className="mt-12 md:mt-10 sm:mt-8"
        theme="gray-outline"
        size="sm"
        to={buttonUrl}
        rel={buttonRel}
        target={buttonTarget}
      >
        {buttonText}
      </Button>
    </div>
    <div
      className="pointer-events-none absolute left-1/2 top-[101px] z-0 h-[679px] w-[1472px] -translate-x-1/2 rounded-[50%] bg-[linear-gradient(-81.41deg,#F575E0_21.93%,rgba(117,153,245,0.7)_84.89%)] opacity-5 blur-3xl"
      aria-hidden
    />
  </section>
);

EventsWithImages.propTypes = {
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
      image: PropTypes.element.isRequired,
    })
  ).isRequired,
};

export default EventsWithImages;
