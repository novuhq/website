import clsx from 'clsx';
import { LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import Slider from 'react-slick';

import AdaptiveStatic from '../adaptive-static';
import Container from '../container';
import inboxData from '../data';
import defaultThemeIcon from '../images/default-theme.svg';
import linearThemeIcon from '../images/linear-theme.svg';
import notionThemeIcon from '../images/notion-theme.svg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';

const InboxComponent = () => {
  const [activeTheme, setActiveTheme] = useState(0);
  const [isSliderInitialized, setIsSliderInitialized] = useState(false);

  const settings = {
    arrows: true,
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    focusOnSelect: true,
    beforeChange: (_, next) => {
      setActiveTheme(next);
    },
    onInit: () => {
      setIsSliderInitialized(true);
    },
  };

  return (
    <div className="inbox-component relative h-[619px] w-[608px] shrink-0 lg:h-[546px] lg:w-[531px] md:h-[529px] md:w-[512px] sm:order-last sm:aspect-[380/387] sm:h-auto sm:w-full sm:max-w-[398px]">
      <LazyMotion features={domAnimation}>
        {inboxData.map((data, index) => (
          <AnimatePresence mode="wait">
            {index === activeTheme && (
              <>
                <Container
                  theme={data.theme}
                  categories={data.categories}
                  messages={data.messages}
                />
                <AdaptiveStatic className="hidden md:block" theme={data.theme} />
              </>
            )}
          </AnimatePresence>
        ))}
      </LazyMotion>
      <div className="absolute top-[calc(100%+30px)] flex items-center justify-center lg:top-[calc(100%+26px)] md:top-[calc(100%+22px)] sm:top-[calc(100%+30px)]">
        <Slider
          className={clsx(
            'flex max-w-[608px] transition-opacity duration-300 lg:max-w-[531px] md:max-w-[512px] sm:mx-auto sm:max-w-[398px] sm:self-center sm-xs:max-w-[calc(100vw-40px)]',
            !isSliderInitialized && 'opacity-0'
          )}
          {...settings}
        >
          {inboxData.map((data, index) => (
            <div
              key={index}
              className="!flex items-center gap-x-1.5 text-[14px] uppercase text-gray-9 transition-colors duration-200 hover:text-gray-10"
            >
              <img
                src={clsx(
                  (data.theme === 'novuDark' || data.theme === 'novuLight') && defaultThemeIcon,
                  (data.theme === 'notionDark' || data.theme === 'notionLight') && notionThemeIcon,
                  (data.theme === 'linearLight' || data.theme === 'linearDark') && linearThemeIcon
                )}
                alt=""
                width={16}
                height={16}
              />
              {data.title}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default InboxComponent;
