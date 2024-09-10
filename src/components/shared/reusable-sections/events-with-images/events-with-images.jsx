import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';
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
  <section className="events-with-images relative safe-paddings mt-40 lg:mt-[120px] md:mt-[100px] sm:mt-20">
    <div className="container-lg relative flex flex-col items-center z-10">
      <header className="max-w-[788px] text-center">
        <Heading
          className="font-medium leading-denser lg:text-5xl md:text-[32px] sm:text-3xl"
          tag="h2"
          size="44"
          theme="white"
        >
          {title}
        </Heading>
        <p className="mt-4 text-gray-9 font-light leading-snug sm:mt-3">{description}</p>
      </header>
      <ul className="mt-14 grid grid-cols-3 gap-8 lg:mt-12 md:grid-cols-2 md:mt-10 xs:grid-cols-1 sm:gap-y-10 sm:mt-8">
        {events.map(
          ({ title, description, category, categoryColor, date, venue, image }, index) => (
            <li key={index} className="flex flex-col items-center">
              <article>
                <header className="flex flex-wrap gap-x-2.5 text-sm leading-denser text-gray-6">
                  <div className="overflow-hidden rounded-lg mb-5 w-full">{image}</div>
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
                <h3 className="mt-3.5 text-2xl leading-tight md:text-xl sm:text-lg">{title}</h3>
                <p className="mt-3.5 text-gray-9 font-light leading-snug">{description}</p>
              </article>
            </li>
          )
        )}
      </ul>
      <Button
        className="mt-14 h-12 px-6 text-[13px]"
        theme="gray-outline"
        to={buttonUrl}
        rel={buttonRel}
        target={buttonTarget}
      >
        {buttonText}
      </Button>
    </div>
    <div
      className="absolute w-[1472px] h-[679px] bg-[linear-gradient(-81.41deg,#F575E0_21.93%,rgba(117,153,245,0.7)_84.89%)] left-1/2 top-[101px] -translate-x-1/2 pointer-events-none rounded-[50%] opacity-5 blur-3xl z-0"
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
      image: PropTypes.element.isRequired,
    })
  ).isRequired,
};

export default EventsWithImages;
