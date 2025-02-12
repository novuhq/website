import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import GradientBorder from 'components/shared/gradient-border';
import CheckIcon from 'images/check.inline.svg';
import BlueShine from 'images/pages/pricing/blue-shine.inline.svg';
import Dots from 'images/pages/pricing/dots.inline.svg';
import patternBlue from 'images/pages/pricing/pattern-blue.png';
import patternPink from 'images/pages/pricing/pattern-pink.png';
import PinkShine from 'images/pages/pricing/pink-shine.inline.svg';
import Shine from 'images/pages/pricing/shine.inline.svg';

import Label from '../label';

const Card = ({ plan }) => {
  const {
    title,
    description,
    advantages,
    hasAdditionalLabel,
    additionalLabelText,
    price,
    paymentPeriod,
    button,
  } = plan;

  const isFree = title.toLowerCase() === 'free';
  const isPro = title.toLowerCase() === 'pro';
  const isTeam = title.toLowerCase() === 'team';
  const isEnterprise = title.toLowerCase() === 'enterprise';

  return (
    <li className="relative min-h-[394px] rounded-xl">
      <div
        className={clsx('relative z-20 h-full overflow-hidden rounded-xl p-6 pb-[30px]', {
          'bg-[#111018] bg-[radial-gradient(87.74%_83.27%_at_81.56%_3.42%,_rgba(102,_122,_152,_0.22)_0%,_rgba(102,_122,_152,_0)_88.97%)]':
            isTeam,
          'bg-[#0D0F1D] bg-[radial-gradient(87.74%_83.27%_at_81.56%_3.42%,_rgba(89,_73,_139,_0.22)_0%,_rgba(89,_73,_139,_0)_88.97%)]':
            isPro,
          'bg-[#00000033] bg-[linear-gradient(152deg,#0B1122_0.45%,#10101E_98.47%)]': isEnterprise,
          'bg-[linear-gradient(152deg,#1F1122_0.45%,#1B1529_98.47%)]': isFree,
        })}
      >
        <div className="relative z-20">
          <h3 className="text-[20px] font-medium leading-none tracking-snug">{title}</h3>
          <div className="relative mt-[48px] flex items-end">
            <p className="text-[40px] leading-denser tracking-snug">{price}</p>
            {paymentPeriod && (
              <p className="text-[15px] font-book leading-snug tracking-snug text-gray-8">
                / {paymentPeriod}
              </p>
            )}
          </div>
          <Button
            className="z-20 mt-[22px] w-full"
            size="sm"
            theme={button.theme}
            to={button.link}
            rel={button.rel}
            target={button.target}
          >
            {button.text}
          </Button>
          <p className="mt-5 text-[16px] font-book leading-snug tracking-snug text-gray-8">
            {description}
          </p>
          <span
            className="mb-[19px] mt-4 block h-px w-full border-t border-dashed border-gray-5"
            aria-hidden
          />
          <ul className="mt-3.5 flex flex-col gap-y-3 md:mt-[15px] md:gap-y-2.5 sm:mt-3.5">
            {advantages.map((item, index) => (
              <li
                className="text-16 text-grey-70 md:text-14 flex items-start gap-x-2.5 font-book leading-snug tracking-snug lg:gap-x-2"
                key={index}
              >
                <CheckIcon
                  className={clsx('relative left-0.5 top-1 w-3.5 shrink-0 text-gray-8 sm:top-0.5', {
                    'text-purple-3': isTeam,
                  })}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
        {(isTeam || isEnterprise || isPro) && (
          <>
            <span
              className={clsx(
                'pointer-events-none absolute -right-[66px] -top-[101px] h-[240px] w-[280px] rounded-full mix-blend-overlay blur-[32px]',
                {
                  'bg-[#DABCCB]': isTeam,
                  'bg-[#BCC3DA] opacity-80': isEnterprise,
                  'bg-[#9F8FE9] opacity-60': isPro,
                }
              )}
              aria-hidden
            />
            <span
              className={clsx(
                'pointer-events-none absolute -right-[202px] -top-[102px] h-[340px] w-[562px] rounded-full mix-blend-overlay blur-[52px]',
                {
                  'bg-[#DABCD0]': isTeam,
                  'bg-[#BCC3DA] opacity-60': isEnterprise,
                  'bg-[#7B6AD6] opacity-40': isPro,
                }
              )}
              aria-hidden
            />
          </>
        )}
        {isTeam && (
          <>
            <PinkShine className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden />
            <img
              className="pointer-events-none absolute inset-0 z-10 h-full w-full object-cover object-center"
              src={patternPink}
              alt=""
              width={695}
              height={807}
            />
          </>
        )}
        {isEnterprise && (
          <>
            <img
              className="pointer-events-none absolute inset-0 z-10 h-full w-full object-cover object-center"
              src={patternBlue}
              alt=""
              width={656}
              height={778}
            />
            <BlueShine className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden />
          </>
        )}
        {isPro && (
          <>
            <span
              className="pointer-events-none absolute -right-[66px] -top-[101px] h-[240px] w-[280px] rounded-full bg-[#9F8FE9] opacity-60 mix-blend-overlay blur-[32px]"
              aria-hidden
            />
            <span
              className="pointer-events-none absolute -right-[202px] -top-[102px] h-[340px] w-[562px] rounded-full bg-[#7B6AD6] opacity-40 mix-blend-overlay blur-[52px]"
              aria-hidden
            />
            <span
              className="pointer-events-none absolute -top-[49px] left-[70px] z-0 h-[171px] w-[308px] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,_#4A3979_0%,_rgba(74,_57,_121,_0)_100%)] blur-[16px]"
              aria-hidden
            />
          </>
        )}
        {hasAdditionalLabel && additionalLabelText && <Label text={additionalLabelText} />}
        <GradientBorder
          className={clsx({
            'border-image-pink-gradient-border': isTeam,
            'border-image-purple-gradient-border': isPro,
            'border-image-[radial-gradient(114.29%_113.4%_at_18.33%_-13.4%,_rgba(209,_213,_250,_0.1)_10.74%,_rgba(82,_83,_122,_0.3)_41.53%,_rgba(168,_148,_209,_0.1)_100%)]':
              isEnterprise,
            'border-image-blue-gradient-border': isFree,
          })}
          aria-hidden
        />
      </div>
      {isEnterprise && (
        <span
          className="bg-shine pointer-events-none absolute -top-[47px] left-[7px] z-0 h-[277px] w-[391px] rounded-full bg-[radial-gradient(130.45%_66.34%_at_74.29%_61.64%,_#B7C9FF_27.2%,_#96B0FF_80.5%,_#4775FF_100%)] opacity-10 blur-3xl md:hidden"
          aria-hidden
        />
      )}
      {isTeam && (
        <>
          <Shine
            className="pointer-events-none absolute -right-3 -top-2.5 z-30 h-[98px] w-[209px]"
            aria-hidden
          />
          <Dots
            className="pointer-events-none absolute -top-1/2 left-[29px] z-10 h-[206px] w-[482px] translate-y-1/2 md:left-[96px] sm:left-[32px]"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute -top-[49px] left-[70px] z-0 h-[171px] w-[308px] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,_#663179_0%,_rgba(90,_49,_121,_0)_100%)] blur-[16px] md:-top-[34px] md:left-[132px] sm:left-[84px]"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute -top-[142px] left-[90px] z-0 h-[355px] w-[280px] rotate-[-84deg] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,_#5E1C59_0%,_rgba(35,_18,_59,_0)_100%)] opacity-40 md:-top-[128px] md:left-[154px] sm:left-[110px]"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute -top-[151px] left-[20px] z-0 h-[458px] w-[370px] rotate-[-45deg] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,_#3B1230_16.51%,_rgba(59,_18,_56,_0)_100%)] md:left-[90px] sm:left-[46px]"
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
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    advantages: PropTypes.arrayOf(PropTypes.string).isRequired,
    hasAdditionalLabel: PropTypes.bool.isRequired,
    additionalLabelText: PropTypes.string,
    price: PropTypes.string.isRequired,
    paymentPeriod: PropTypes.string,
    button: PropTypes.shape({
      text: PropTypes.string.isRequired,
      style: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      target: PropTypes.string,
      rel: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
