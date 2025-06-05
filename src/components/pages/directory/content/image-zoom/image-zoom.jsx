/* eslint-disable import/no-extraneous-dependencies */
import { getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const ImageZoom = ({ image, children }) => {
  const imageUrl = getImage(image);
  const [zoomMargin, setZoomMargin] = useState(16);

  useEffect(() => {
    const updateMargin = () => {
      const width = window.innerWidth;

      if (width <= 1024) {
        setZoomMargin(16);
      } else if (width <= 1920) {
        setZoomMargin(80);
      } else {
        setZoomMargin(260);
      }
    };

    updateMargin();
    window.addEventListener('resize', updateMargin);

    return () => window.removeEventListener('resize', updateMargin);
  }, []);

  return (
    <Zoom
      classDialog="zoom-modal"
      zoomImg={{ src: imageUrl }}
      zoomMargin={zoomMargin}
      wrapElement="span"
    >
      {children}
    </Zoom>
  );
};

ImageZoom.propTypes = {
  image: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default ImageZoom;
