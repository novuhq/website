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
  currentRow,
}) => {
  const isActive = activeTier === title.toLowerCase();

  return (
    <div
      className={clsx(
        'flex flex-col rounded-lg text-center',
        isActive && 'bg-pink-yellow-gradient p-[1px]',
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
        <div className="flex flex-col space-y-5">
          <Heading tag="h3" size="2xs" theme="white" className="mx-[52px] lg:mx-10 md:mx-8">
            {title}
          </Heading>
          {linkText && linkUrl && (
            <Button
              className="mx-[52px] max-w-[140px] lg:mx-10 md:mx-8"
              theme={isActive ? 'pink-to-yellow-gradient' : 'gray-outline'}
              size="xs"
              to={linkUrl}
            >
              {linkText}
            </Button>
          )}
        </div>
        <FeatureList currentRow={currentRow} feature={platform} />
        <FeatureList currentRow={currentRow} feature={inApp} />
        <FeatureList currentRow={currentRow} feature={advancedFeatures} />
        <FeatureList currentRow={currentRow} feature={security} />
      </div>
    </div>
  );
};

PlanCard.propTypes = {};

PlanCard.defaultProps = {};

export default PlanCard;
