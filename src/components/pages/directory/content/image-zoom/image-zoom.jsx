/* eslint-disable import/no-extraneous-dependencies */
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const ImageZoom = ({ image, children }) => {
  const imageUrl = getImage(image);

  return (
    <Zoom classDialog="zoom-modal" zoomImg={{ src: imageUrl }} zoomMargin={16} wrapElement="span">
      {children}
    </Zoom>
  );
};

export default ImageZoom;
