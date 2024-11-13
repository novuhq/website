import PropTypes from 'prop-types';
import React from 'react';
import Slider from 'react-slick';

import Heading from 'components/shared/heading';
import ArrowIcon from 'icons/chevron.inline.svg';
import blockquote from 'images/reusable-sections/testimonials/blockquote.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';

const NextArrow = (props) => {
  const { onClick } = props;

  return (
    <button
      className="absolute right-0 top-[-74px] flex h-11 w-11 items-center justify-center rounded-md border border-gray-5 transition-colors duration-200 hover:border-gray-4 hover:bg-gray-4 lg:top-[-70px] md:-top-16 md:h-9 md:w-9 sm:right-[calc(100%-82px)] sm:top-[calc(100%+30px)]"
      type="button"
      aria-label="Next testimonial"
      onClick={onClick}
    >
      <ArrowIcon
        className="h-auto w-4 shrink-0 -rotate-90 opacity-80 transition-[fill,transform] duration-200"
        aria-hidden
      />
    </button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;

  return (
    <button
      className="absolute right-[58px] top-[-74px] flex h-11 w-11 items-center justify-center rounded-md border border-gray-5 transition-colors duration-200 hover:border-gray-4 hover:bg-gray-4 lg:top-[-70px] md:-top-16 md:right-[46px] md:h-9 md:w-9 sm:right-[calc(100%-36px)] sm:top-[calc(100%+30px)]"
      type="button"
      aria-label="Prev testimonial"
      onClick={onClick}
    >
      <ArrowIcon
        className="h-auto w-4 shrink-0 rotate-90 opacity-80 transition-[fill,transform] duration-200"
        aria-hidden
      />
    </button>
  );
};

const Testimonials = ({ title, testimonials }) => {
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    adaptiveHeight: true,
  };

  return (
    <section className="testimonials safe-paddings mt-40 lg:mt-[120px] md:mt-[100px] sm:mt-20 sm:pb-16">
      <div className="container-sm relative px-[80px] md:max-w-xl md:px-8 sm:w-full sm:px-5">
        <Heading
          className="relative z-10 pr-28 font-medium leading-denser tracking-snug lg:text-[32px] md:text-3xl"
          size="md"
          tag="h2"
        >
          {title}
        </Heading>
        <Slider className="relative z-10 mt-7 !flex w-full justify-between sm:mt-6" {...settings}>
          {testimonials.map(({ content, avatar, name, company }, index) => (
            <figure key={index}>
              <blockquote>
                <p className="bg-testimonials-text bg-clip-text text-xl font-book tracking-tighter text-transparent md:text-lg sm:text-base">
                  {content}
                </p>
              </blockquote>

              <figcaption className="mt-5 sm:mt-4">
                <div className="flex items-center">
                  {avatar && (
                    <div className="mr-3.5 h-8 w-8 overflow-hidden rounded-full grayscale">
                      {avatar}
                    </div>
                  )}
                  <p className="text-sm leading-snug">
                    {name}
                    {company && <span className="ml-0.5 font-light"> – {company}</span>}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </Slider>
        <img
          className="pointer-events-none absolute -left-10 top-[30px] select-none lg:top-6 md:left-[-65px] md:h-auto md:w-[116px] sm:hidden"
          src={blockquote}
          alt=""
          width={144}
          height={144}
          loading="lazy"
          aria-hidden
        />
        <div
          className="absolute -left-16 -top-9 h-[267px] w-[278px] transform-gpu rounded-full bg-[radial-gradient(65.61%_130.08%_at_74.29%_61.64%,#B7FBFF_0%,#96C6FF_46.5%,#4791FF_100%)] opacity-[0.16] blur-3xl md:-left-32"
          aria-hidden
        />
      </div>
    </section>
  );
};

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      avatar: PropTypes.element.isRequired,
      name: PropTypes.string.isRequired,
      company: PropTypes.string,
    })
  ).isRequired,
};

export default Testimonials;
