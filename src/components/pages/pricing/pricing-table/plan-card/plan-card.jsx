import clsx from 'clsx';
import React from 'react';

import Button from 'components/shared/button';

import FeatureList from './feature-list';

const PlanCard = ({
  title,
  linkText,
  linkUrl,
  linkTarget,
  linkRel,
  common,
  platform,
  // framework,
  inbox,
  account,
  compliance,
  dataResidency,
  hostingModels,
  activeTier,
  className,
  currentRow,
  apiRateLimits,
  onContactUsClick,
  groupIds,
}) => {
  const isActive = activeTier === title.split(' ')[0].toLowerCase();
  const sanitizedTitle = title.trim().toLowerCase().replace(/\s+/g, '_');
  const isContactLink = linkText?.toLowerCase().includes('contact');

  const handleButtonClick = (e) => {
    if (isContactLink) {
      e.preventDefault();
      // Track contact button click analytics
      window?.analytics?.track('Pricing Event: Click Contact Us in the table', {
        packageType: title,
        source: `pricing_table_${sanitizedTitle}`,
      });
      if (onContactUsClick) {
        onContactUsClick(`pricing_table_${sanitizedTitle}`);
      }
    }
  };

  const contactSource = `pricing_table_${sanitizedTitle}`;

  return (
    <div
      className={clsx(
        'relative flex flex-col rounded-lg after:absolute after:inset-0 after:left-1/2 after:w-[208px] after:-translate-x-1/2 after:rounded-lg after:bg-[#14141FBF] after:opacity-0',
        isActive && 'after:opacity-100',
        className
      )}
    >
      <div className={clsx('z-10 flex flex-col rounded-lg py-5')}>
        <div className="flex flex-col space-y-3 px-[40px] lg:px-[20px] md:space-y-3.5 md:px-6">
          <h3 className="text-[24px] tracking-snug md:text-[16px]">{title}</h3>
          {linkText && linkUrl && (
            <Button
              theme={isActive ? 'white-filled' : 'gray-outline'}
              size="xs"
              to={isContactLink ? null : linkUrl}
              target={linkTarget}
              rel={linkRel}
              onClick={(e) => {
                handleButtonClick(e);
                if (!isContactLink) {
                  window?.analytics?.track('Pricing Event: Click the CTA Button in the table', {
                    packageType: title,
                    sliderValue: activeTier.rangeValue,
                  });
                }
              }}
            >
              {linkText}
            </Button>
          )}
        </div>
        <FeatureList
          groupId={groupIds?.common}
          features={common}
          currentRow={currentRow}
          contactSource={contactSource}
          onContactUsClick={onContactUsClick}
        />
        <FeatureList
          groupId={groupIds?.platform}
          features={platform}
          currentRow={currentRow}
          contactSource={contactSource}
          onContactUsClick={onContactUsClick}
        />
        {/* <FeatureList features={framework} currentRow={currentRow} /> */}
        <FeatureList
          groupId={groupIds?.apiRateLimits}
          features={apiRateLimits}
          currentRow={currentRow}
          contactSource={contactSource}
          onContactUsClick={onContactUsClick}
        />
        <FeatureList
          groupId={groupIds?.inbox}
          features={inbox}
          currentRow={currentRow}
          contactSource={contactSource}
          onContactUsClick={onContactUsClick}
        />
        <FeatureList
          groupId={groupIds?.account}
          features={account}
          currentRow={currentRow}
          contactSource={contactSource}
          onContactUsClick={onContactUsClick}
        />
        <FeatureList
          groupId={groupIds?.compliance}
          features={compliance}
          currentRow={currentRow}
          contactSource={contactSource}
          onContactUsClick={onContactUsClick}
        />
        <FeatureList
          groupId={groupIds?.dataResidency}
          features={dataResidency}
          currentRow={currentRow}
          contactSource={contactSource}
          onContactUsClick={onContactUsClick}
        />
        <FeatureList
          groupId={groupIds?.hostingModels}
          features={hostingModels}
          currentRow={currentRow}
          contactSource={contactSource}
          onContactUsClick={onContactUsClick}
        />
      </div>
    </div>
  );
};

export default PlanCard;
