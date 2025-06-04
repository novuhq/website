import clsx from 'clsx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';

import CloseIcon from 'icons/circle-cross.inline.svg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';

const SliderWrapper = ({ images }) => {
  const sliderRef = useRef(null);
  const [isSliderInitialized, setIsSliderInitialized] = useState(false);
  const [popupIndex, setPopupIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleModalOpen = (index) => {
    sliderRef.current?.slickGoTo(index);
    setIsPopupOpen(true);
    setPopupIndex(index);
    document.body.style.overflow = 'hidden';
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleModalClose = () => {
    setIsPopupOpen(false);
    document.body.style.overflow = '';
  };

  const settings = {
    autoplay: false,
    dots: true,
    speed: 300,
    cssEase: 'ease-in-out',
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    draggable: true,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
    onInit: () => {
      setIsSliderInitialized(true);
    },
  };

  const popupSliderSettings = {
    initialSlide: popupIndex,
    slidesToScroll: 1,
    slidesToShow: 1,
    centerPadding: '560px',
    centerMode: true,
    dots: false,
    arrows: false,
    infinite: true,
    variableWidth: false,
    draggable: false,
    responsive: [
      { breakpoint: 1920, settings: { centerPadding: '288px' } },
      { breakpoint: 1280, settings: { centerPadding: '64px' } },
      { breakpoint: 768, settings: { centerPadding: '16px' } },
    ],
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleModalClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleModalClose]);

  return (
    <>
      <section className="main-slider relative mt-[54px] min-h-[272px] lg:mt-[46px] md:mt-[32px]">
        <div
          className={clsx(
            'wrapper relative z-10',
            isSliderInitialized ? 'opacity-100' : 'opacity-0'
          )}
        >
          <Slider ref={sliderRef} className={clsx('custom-slick')} {...settings}>
            {images.map((img, i) => (
              <div
                key={i}
                tabIndex={0}
                className="cursor-pointer rounded-[10px] hover:outline hover:outline-1 hover:outline-gray-10"
                aria-label={`Open popup with image ${i}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleModalOpen(i);
                  }
                }}
                onClick={() => handleModalOpen(i)}
              >
                <GatsbyImage
                  image={getImage(img)}
                  alt=""
                  className="aspect-video h-full w-full max-w-[384px] rounded-[10px] object-cover sm:max-w-[288px]"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div
          className="pointer-events-none absolute inset-0 z-0 border border-[#1F1E2B] bg-directory-slider-gradient"
          aria-hidden
        />
        <div
          className="gradient-mask-overlay pointer-events-none absolute inset-0 z-20 sm:hidden"
          aria-hidden
        />
      </section>

      {isPopupOpen && (
        <div className="popup fixed inset-0 z-[90] flex items-center justify-center overflow-hidden bg-[#00000080] backdrop-blur-sm">
          <div className="max-w-full">
            <button
              className="absolute right-5 top-5 z-50 p-3"
              type="button"
              aria-label="Close popup"
              onClick={handleModalClose}
            >
              <CloseIcon className="size-9" />
            </button>
            <Slider {...popupSliderSettings}>
              {images.map((img, i) => (
                <div className="px-16 lg:px-8" key={i}>
                  <GatsbyImage
                    image={getImage(img)}
                    alt=""
                    className="aspect-video h-full w-full rounded-[12px] object-cover object-center"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </>
  );
};

export default SliderWrapper;
