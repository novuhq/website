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
          'flex flex-col rounded-lg py-5 text-center',
          isActive && 'bg-[#0D0D0D]',
          className
        )}
        style={cardStyle}
      >
        <Heading tag="h3" size="xs">
          {title}
        </Heading>
        {linkText && linkUrl && (
          <Button
            className="mx-auto mt-5 md:mt-3"
            theme={isActive ? 'pink-to-yellow-gradient' : 'gray-outline'}
            size="xs"
            to={linkUrl}
          >
            {linkText}
          </Button>
        )}
        <FeatureList feature={platform} />
        <FeatureList feature={inApp} />
        <FeatureList feature={advancedFeatures} />
        <FeatureList feature={security} />
      </div>
    </div>
  );
};

PlanCard.propTypes = {};

PlanCard.defaultProps = {};

export default PlanCard;
