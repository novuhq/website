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
  setCurrentRow,
  previousRow,
  setPreviousRow,
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
        <Heading tag="h3" size="2xs" theme="white" className="mx-[52px] lg:mx-10 md:mx-8">
          {title}
        </Heading>
        {linkText && linkUrl && (
          <Button
            className="mx-[52px] mt-5 max-w-[140px] lg:mx-10 md:mx-8 md:mt-3"
            theme={isActive ? 'pink-to-yellow-gradient' : 'gray-outline'}
            size="xs"
            to={linkUrl}
          >
            {linkText}
          </Button>
        )}
        <FeatureList
          currentRow={currentRow}
          setCurrentRow={setCurrentRow}
          previousRow={previousRow}
          setPreviousRow={setPreviousRow}
          feature={platform}
          id="platform"
        />
        <FeatureList
          currentRow={currentRow}
          setCurrentRow={setCurrentRow}
          previousRow={previousRow}
          setPreviousRow={setPreviousRow}
          feature={inApp}
          id="in-app"
        />
        <FeatureList
          currentRow={currentRow}
          setCurrentRow={setCurrentRow}
          previousRow={previousRow}
          setPreviousRow={setPreviousRow}
          feature={advancedFeatures}
          id="advancedFeatures"
        />
        <FeatureList
          currentRow={currentRow}
          setCurrentRow={setCurrentRow}
          previousRow={previousRow}
          setPreviousRow={setPreviousRow}
          feature={security}
          id="security"
        />
      </div>
    </div>
  );
};

PlanCard.propTypes = {};

PlanCard.defaultProps = {};

export default PlanCard;
