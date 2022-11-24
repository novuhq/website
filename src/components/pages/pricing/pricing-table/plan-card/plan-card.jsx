import clsx from 'clsx';
import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

import FeatureList from './feature-list';

const PlanCard = ({
  cardStyle,
  title,
  linkText,
  linkUrl,
  platform,
  inApp,
  advancedFeatures,
  security,
  activeTier,
  className,
}) => {
  const isActive = activeTier === title.toLowerCase();

  return (
    <div
      className={clsx(
        'flex flex-col rounded-lg p-[1px] text-center ',
        isActive && 'bg-pink-yellow-gradient',
        className
      )}
      style={cardStyle}
    >
      <div
        className={clsx(
          'flex flex-col rounded-lg py-5 text-left',
          isActive && 'bg-[#0D0D0D]',
          className
        )}
        style={cardStyle}
      >
        <Heading tag="h3" size="2xs" theme="white" className="px-[52px]">
          {title}
        </Heading>
        {linkText && linkUrl && (
          <Button
            className="mx-[52px] mt-5 max-w-[140px] md:mt-3"
            theme={isActive ? 'pink-to-yellow-gradient' : 'gray-outline'}
            size="xs"
            to={linkUrl}
          >
            {linkText}
          </Button>
        )}
        <FeatureList feature={platform} id="platform" />
        <FeatureList feature={inApp} id="in-app" />
        <FeatureList feature={advancedFeatures} id="advancedFeatures" />
        <FeatureList feature={security} id="security" />
      </div>
    </div>
  );
};

PlanCard.propTypes = {};

PlanCard.defaultProps = {};

export default PlanCard;
