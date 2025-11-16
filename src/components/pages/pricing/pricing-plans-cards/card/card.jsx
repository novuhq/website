import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import GradientBorder from 'components/shared/gradient-border';
import CheckIcon from 'images/check.inline.svg';
import BorderShine from 'images/pages/pricing/border-shine.inline.svg';
import dotsPattern from 'images/pages/pricing/dots-pattern.png';
import PinkShineInsideCard from 'images/pages/pricing/pink-shine-inside.inline.svg';
import stars from 'images/pages/pricing/stars.png';

import Label from '../label';

const Card = ({ plan, onContactUsClick }) => {
  const {
    id,
    title,
    description,
    advantagesHeading,
    advantages,
    additionalLabelText,
    price,
    paymentPeriod,
    showFrom,
    button,
    footer,
  } = plan;

  const handleButtonClick = (e) => {
    if (button.type === 'contact') {
      e.preventDefault();
      // Track contact button click analytics
      window?.analytics?.track('Pricing Event: Click Contact Us on pricing card', {
        packageType: title,
        source: `pricing_card_${id}`,
      });
      if (onContactUsClick) {
        onContactUsClick(`pricing_card_${id}`);
      }
    }
  };

  const isPro = title.toLowerCase() === 'pro';
  const isTeam = title.toLowerCase() === 'team';

  return (
    <li className="relative min-h-[394px] rounded-xl">
      <div
        className={clsx(
          'relative z-20 h-full overflow-hidden rounded-xl p-6',
          isPro
            ? 'bg-[linear-gradient(152deg,#1F1122_0.45%,_#1B1529_98.47%)]'
            : 'bg-[#111018] bg-grey-pricing-card'
        )}
      >
        <div className="relative z-20">
          <h3 className="text-[20px] font-medium leading-none tracking-snug">{title}</h3>
          <div className="relative mt-[50px] flex flex-col">
            <span className="hover:text-gray-200 mb-1 text-[15px] font-medium leading-snug tracking-snug text-white transition-all duration-300">
              {showFrom ? 'Starting from' : '\u00A0'}
            </span>
            <div className="flex items-end">
              <p className="text-[40px] font-medium leading-denser tracking-snug">{price}</p>
              {paymentPeriod && (
                <p className="relative bottom-0.5 ml-1 text-[15px] font-book leading-snug tracking-snug text-gray-8">
                  / {paymentPeriod}
                </p>
              )}
            </div>
          </div>
          <Button
            className="z-20 mt-[22px] h-[46px] w-full"
            size="sm"
            theme={button.theme}
            to={button.type === 'contact' ? null : button.link}
            rel={button.rel}
            target={button.target}
            onClick={handleButtonClick}
          >
            {button.text}
          </Button>
          <p className="mt-2 text-center text-[13px] font-book leading-snug tracking-snug text-gray-9">
            {button?.type === 'trial' ? 'No credit card required' : '\u00A0'}
          </p>
          <p className="mt-5 min-h-[68px] text-[16px] font-book leading-snug tracking-snug text-gray-9 md:min-h-[88px] sm:min-h-[48px]">
            {description}
          </p>
          <span
            className="mb-5 mt-4 block h-px w-full border-t border-dashed border-gray-5"
            aria-hidden
          />
          {advantagesHeading && (
            <h4
              className={clsx(
                'mt-[18px] text-[15px] font-book leading-snug tracking-snug',
                isPro ? 'text-white' : 'text-gray-10'
              )}
              dangerouslySetInnerHTML={{ __html: advantagesHeading }}
            />
          )}
          <ul
            className={clsx(
              'mt-3.5 flex flex-col gap-y-3 md:mt-[15px] md:gap-y-2.5 sm:mt-3.5',
              isPro ? 'text-white' : 'text-gray-10'
            )}
          >
            {advantages.map((item, index) => (
              <li
                className="md:text-14 flex items-start gap-x-2 text-[15px] font-book leading-snug tracking-snug"
                key={index}
              >
                <CheckIcon
                  className={clsx('relative top-0.5 w-4 shrink-0 text-gray-10 sm:top-0.5', {
                    'text-purple-3': isPro,
                  })}
                />
                {item}
              </li>
            ))}
          </ul>
          {footer && (
            <>
              <span
                className="mb-4 mt-5 block h-px w-full border-t border-dashed border-gray-5"
                aria-hidden
              />
              <p className="text-[14px] font-book italic leading-snug tracking-snug text-gray-9">
                {footer}
              </p>
            </>
          )}
        </div>
        {isPro && (
          <>
            <PinkShineInsideCard
              className="pointer-events-none absolute inset-0 w-full"
              aria-hidden
            />
            <img
              className="pointer-events-none absolute inset-0 w-full"
              src={dotsPattern}
              width={617}
              height={1142}
              alt=""
              loading="eager"
              aria-hidden
            />
          </>
        )}
        {additionalLabelText && <Label text={additionalLabelText} />}
        <GradientBorder
          className={clsx(
            isPro
              ? 'border-image-pink-gradient-border'
              : 'border-image-[linear-gradient(246.73deg,rgba(60,60,83,0.8)_15.63%,rgba(52,52,71,0.6)_84.63%)]'
          )}
          aria-hidden
        />
      </div>
      {isTeam && (
        <span
          className="bg-shine pointer-events-none absolute -top-[47px] left-[7px] z-0 h-[277px] w-[391px] rounded-full bg-[radial-gradient(130.45%_66.34%_at_74.29%_61.64%,_#B7C9FF_27.2%,_#96B0FF_80.5%,_#4775FF_100%)] opacity-10 blur-3xl"
          aria-hidden
        />
      )}
      {isPro && (
        <>
          <BorderShine
            className="pointer-events-none absolute -right-3 -top-2.5 z-30 h-[98px] w-[209px]"
            aria-hidden
          />
          <img
            className="pointer-events-none absolute -top-[103px] left-[17px] z-10 h-[206px] w-[482px] max-w-none"
            src={stars}
            width={482}
            height={206}
            alt=""
            loading="eager"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute -top-[49px] left-[70px] z-0 h-[171px] w-[308px] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,_#663179_0%,_rgba(90,_49,_121,_0)_100%)] blur-[16px] md:-top-[34px] md:left-[132px] sm:left-[84px]"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute -top-[142px] left-[90px] z-0 h-[355px] w-[280px] -rotate-[84deg] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,_#5E1C59_0%,_rgba(35,_18,_59,_0)_100%)] opacity-40 md:-top-[128px] md:left-[154px] sm:left-[110px]"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute -top-[151px] left-5 z-0 h-[458px] w-[370px] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,_#3B1230_16.51%,_rgba(59,_18,_56,_0)_100%)] md:left-[90px] sm:left-[46px]"
            aria-hidden
          />
        </>
      )}
    </li>
  );
};

export default Card;

Card.propTypes = {
  plan: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    advantagesHeading: PropTypes.string,
    advantages: PropTypes.arrayOf(PropTypes.string).isRequired,
    additionalLabelText: PropTypes.string,
    price: PropTypes.string.isRequired,
    paymentPeriod: PropTypes.string,
    showFrom: PropTypes.bool,
    button: PropTypes.shape({
      text: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['contact', 'link', 'trial']).isRequired,
      theme: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      target: PropTypes.string,
      rel: PropTypes.string,
    }).isRequired,
    footer: PropTypes.string,
  }).isRequired,
  onContactUsClick: PropTypes.func,
};

Card.defaultProps = {
  onContactUsClick: null,
};
