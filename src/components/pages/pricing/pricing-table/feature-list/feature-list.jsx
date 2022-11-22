import React from 'react';

import CheckIcon from 'images/check.inline.svg';

const FeatureList = ({ title, items }) => {
  const presentFeature = <CheckIcon className="h-2 w-3 text-primary-1" />;

  return (
    <div className="py-5 lg:py-4 md:py-3">
      <span className="text-xl font-medium lg:text-lg">{title}</span>

      <div className="mt-4 flex flex-col">
        {items.map(({ label, free, indie, business, enterprise }, index) => {
          const renderFeature = (feature) =>
            typeof feature === 'boolean' && feature ? presentFeature : feature;
          return (
            <div
              className="grid min-w-[924px] grid-cols-10 items-center gap-x-8 border-b border-gray-2 py-2.5 text-sm md:gap-x-6"
              key={index}
            >
              <span className="col-span-2">{label}</span>
              <span className="col-span-2 md:justify-self-center">{renderFeature(free)}</span>
              <span className="col-span-2 md:justify-self-center">{renderFeature(indie)}</span>
              <span className="col-span-2 md:justify-self-center">{renderFeature(business)}</span>
              <span className="col-span-2 md:justify-self-center">{renderFeature(enterprise)}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// FeatureList.propTypes = {
//   title: PropTypes.string.isRequired,
//   iconName: PropTypes.string.isRequired,
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       subtitle: PropTypes.string,
//       subItems: PropTypes.arrayOf(
//         PropTypes.shape({
//           label: PropTypes.string.isRequired,
//           openSource: PropTypes.bool.isRequired,
//           enterprise: PropTypes.bool.isRequired,
//         })
//       ).isRequired,
//     })
//   ),
// };

// FeatureList.defaultProps = {
//   items: [
//     {
//       subtitle: null,
//     },
//   ],
// };

export default FeatureList;
