// import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Slider from 'react-slick';

import ArrowIcon from 'icons/chevron.inline.svg';

import blockquote from './images/blockquote.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TITLE = 'Don&apos;t just listen to us';

const TESTIMONIALS = [
  {
    content:
      "The cost and time of having to build our own prefercing, integrations, and channels, delayed notifications, there's a bunch of features. We've got a lot of other problems that are unqiue to our particular environment and that's where I need to focus our engineering effort, not dealing with notifications infrastructure.",
    //   avatar: (
    //    <StaticImage src="./images/jesselynn-mah.jpg" width={32} height={32} alt="Jesselynn Mah" />
    //    ),
    name: '',
    company: 'Financial Services Company',
  },
  {
    content:
      'The need to replace.. the current system we have for transactional email.... Really easy to get up and started and then see the potential of how far it can go.',
    //    avatar: (
    //      <StaticImage src="./images/jesselynn-mah.jpg" width={32} height={32} alt="Jesselynn Mah" />
    //    ),
    name: '',
    company: 'Large Media Company',
  },
  {
    content:
      "We notify a user, and then being able to come back into the system to see if it's been acknowledged, and then automatically take action... That kind of interactivity between our data is huge. Having Novu take care of that and relay data back and forth between systems is huge. We were just playing around with it, and many other developers were like, this is exactly what we needed all along.",
    //   avatar: (
    //      <StaticImage src="./images/jesselynn-mah.jpg" width={32} height={32} alt="Jesselynn Mah" />
    //   ),
    name: '',
    company: 'Healthcare Company',
  },
  {
    content:
      'Before Novu, just getting our SMS infrastructure set up, ensuring our email deliverability reputation was satisfactory for these types of messages... Just sending a 6-digit OTP code was like pulling teeth. How could we expect every company in the world to implement this on their own without Novu?',
    //    avatar: (
    //  <StaticImage src="./images/jesselynn-mah.jpg" width={32} height={32} alt="Jesselynn Mah" />
    //    ),
    name: '',
    company: 'Biotech Company',
  },
  {
    content:
      "I needed something that's super approachable by my non-technical teams, and code is not the best experience.",
    //    avatar: (
    //      <StaticImage src="./images/jesselynn-mah.jpg" width={32} height={32} alt="Jesselynn Mah" />
    //    ),
    name: '',
    company: 'AI Ops Company',
  },
];

const NextArrow = (props) => {
  const { onClick } = props;

  return (
    <button
      className="absolute right-0 top-[-74px] flex justify-center items-center w-11 h-11 border border-gray-5 hover:bg-gray-4 hover:border-gray-4 rounded-md lg:top-[-70px] md:w-9 md:h-9 md:-top-16 sm:top-[calc(100%+30px)] sm:right-[calc(100%-82px)]"
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
      className="absolute right-[58px] top-[-74px] flex justify-center items-center w-11 h-11 border border-gray-5 hover:bg-gray-4 hover:border-gray-4 rounded-md lg:top-[-70px] md:w-9 md:h-9 md:-top-16 md:right-[46px] sm:top-[calc(100%+30px)] sm:right-[calc(100%-36px)]"
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

const Testimonials = () => {
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    adaptiveHeight: true,
  };

  return (
    <section className="testimonials mt-[231px] lg:mt-[157px] md:mt-28 sm:mt-[102px]">
      <div className="container-sm px-[80px] relative md:max-w-xl">
        <h2
          className="text-4xl leading-tight tracking-snug font-medium lg:text-[32px] md:text-3xl"
          dangerouslySetInnerHTML={{ __html: TITLE }}
        />
        <Slider className="!flex w-full justify-between mt-8 md:mt-7 sm:mt-[30px]" {...settings}>
          {TESTIMONIALS.map(({ content, avatar, name, company }, index) => (
            <figure className="" key={index}>
              <blockquote>
                <p className="text-[22px] font-book tracking-[-0.04em] text-transparent bg-clip-text bg-[linear-gradient(98.67deg,rgba(255,255,255,0.85)_9.63%,rgba(255,255,255,0.6)_113.79%)] lg:text-xl md:text-lg sm:text-[15px]">
                  {content}
                </p>
              </blockquote>

              <figcaption className="mt-3.5 sm:mt-4">
                <div className="flex items-center">
                  <div className="rounded-full w-8 h-8 overflow-hidden grayscale mr-3.5">
                    {avatar}
                  </div>
                  <p className="text-sm leading-snug">
                    {name} {company && <span className="font-light ml-0.5">- {company}</span>}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </Slider>
        <img
          className="absolute top-[30px] -left-10 sm:hidden lg:top-6 md:w-[116px] md:h-auto md:left-[-65px]"
          src={blockquote}
          alt=""
          width={144}
          height={144}
          loading="lazy"
          aria-hidden
        />
        <div
          className="absolute -left-16 -top-9 w-[278px] h-[267px] opacity-[0.16] bg-[radial-gradient(65.61%_130.08%_at_74.29%_61.64%,#B7FBFF_0%,#96C6FF_46.5%,#4791FF_100%)] rounded-full blur-3xl transform-gpu md:-left-32"
          aria-hidden
        />
      </div>
    </section>
  );
};

export default Testimonials;
