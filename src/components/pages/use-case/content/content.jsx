/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-underscore-dangle */
import { PortableText } from '@portabletext/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Code from 'components/shared/code';

const Content = ({ content, templateId }) => {
  const components = {
    types: {
      image: (image) => {
        const sanityConfig = {
          projectId: process.env.GATSBY_SANITY_PROJECT_ID,
          dataset: process.env.GATSBY_SANITY_DATASET,
        };
        const imageAssetId = image.value.asset._ref;
        const imageData = getGatsbyImageData(imageAssetId, { width: 800 }, sanityConfig);

        return <GatsbyImage image={imageData} alt={image.alt} />;
      },
      codeBlock: ({ value }) => <Code language={value.language} content={value.code} />,
      quoteBlock: ({ value }) => <blockquote>{value.quote}</blockquote>,
    },
  };

  return (
    <>
      <div className="content mt-12">
        <PortableText value={content} components={components} />
      </div>
      <div className="mt-14 flex justify-end">
        <Button to={`https://web.novu.co/?blueprintId=${templateId}`} theme="primary" size="sm">
          Build with Novu
        </Button>
      </div>
    </>
  );
};

export default Content;

Content.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
  templateId: PropTypes.string.isRequired,
};
