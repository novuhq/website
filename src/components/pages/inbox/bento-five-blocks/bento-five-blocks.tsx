import clsx from 'clsx';
import React from 'react';
import Button from 'components/shared/button';

const BentoFiveBlocks = ({ className, title, description, cards, button }) => (
  <section className={clsx('bento mt-40 md:mt-[88px]', className)}>
    <div className="container-lg relative flex flex-col items-center xl:px-0 lg:w-full lg:max-w-5xl lg:px-8 md:max-w-3xl sm:px-5">
      <h2
        className="max-w-[768px] text-center text-5xl font-medium leading-denser tracking-snug lg:max-w-[540px] lg:text-4xl md:max-w-[500px] md:text-[32px] sm:max-w-none sm:text-3xl"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {description && (
        <p className="mt-3.5 max-w-[768px] text-center text-lg leading-normal tracking-snug text-gray-8 lg:mt-3 md:mt-4 md:max-w-[576px] md:text-[18px] sm:max-w-none sm:text-[16px]">
          {description}
        </p>
      )}
      <ul className="relative z-10 mt-[58px] flex flex-wrap gap-[30px] lg:mt-[60px] lg:gap-6 md:mt-12 md:gap-[18px] sm:mt-10 sm:justify-center sm:gap-4">
        {cards.map(({ title, description, className, image, imageMobile }, index) => (
          <li
            className={clsx(
              'relative h-[384px] rounded-[13px] border border-transparent bg-clip-border sm:w-full sm:max-w-[380px]',
              className,
              {
                'w-[402px] lg:h-[303px] lg:w-[320px] md:h-[223px] md:w-[234px] sm:h-[305px]':
                  index === 0,
                'w-[484px] lg:h-[303px] lg:w-[378px] md:h-[223px] md:w-[277px] sm:h-[258px]':
                  index === 1,
                'w-[270px] lg:h-[303px] lg:w-[214px] md:h-[223px] md:w-[157px] sm:h-[454px]':
                  index === 2,
                'h-[434px] w-[546px] lg:h-[343px] lg:w-[430px] md:h-[251px] md:w-[316px] sm:h-[254px]':
                  index === 3,
                'h-[434px] w-[640px] lg:h-[343px] lg:w-[506px] md:h-[251px] md:w-[370px] sm:h-[218px]':
                  index === 4,
              }
            )}
            key={index}
          >
            <div
              className={clsx(
                'relative z-20 flex h-full w-full flex-col justify-end p-[30px] lg:p-5 md:p-3.5 sm:p-3'
              )}
            >
              <h3 className="text-xl font-medium leading-denser tracking-snug md:text-[18px] sm:text-[16px]">
                {title}
              </h3>
              <p
                className="mt-3 text-[15px] font-light leading-snug tracking-snug text-gray-9 lg:mt-1.5 md:mt-1.5 md:text-sm"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
            {image && image}
            {imageMobile && imageMobile}
          </li>
        ))}
      </ul>
      {button && (
        <Button
          className="mx-auto mt-8"
          theme="gray-outline"
          size="sm"
          to={button.link}
          rel={button.rel}
          target={button.target}
        >
          {button.label}
        </Button>
      )}
      <div className="absolute -right-36 top-20 z-0 h-[394px] w-[400px] rounded-[50%] bg-[radial-gradient(92.52%_89.86%_at_62.86%_11.06%,#6789FF_27.2%,#69B7FF_80.5%,#4786FF_100%)] opacity-[0.08] blur-3xl lg:h-[378px] lg:w-[508px] md:-right-9 md:h-[281px] md:w-[377px] sm:-right-28 sm:top-64" />
      <div className="absolute -bottom-12 -left-44 z-0 h-[394px] w-[553px] rounded-[50%] bg-[radial-gradient(92.52%_89.86%_at_62.86%_11.06%,#D886FF_27.2%,#EA69FF_80.5%,#A347FF_100%)] opacity-[0.08] blur-3xl lg:h-[372px] lg:w-[522px] md:-left-10 md:h-[265px] md:w-[372px] sm:-left-36" />
    </div>
  </section>
);

export default BentoFiveBlocks;
