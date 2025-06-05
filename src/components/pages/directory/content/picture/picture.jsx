import React from 'react';

const Picture = ({ src, alt, caption }) => (
  <figure className="mb-4 mt-[34px]">
    <img src={src} alt={alt} className="my-2 w-full rounded-lg" />
    {caption && (
      <figcaption className="mx-auto my-2 max-w-[576px] text-center font-inter text-sm leading-snug tracking-snug text-gray-8">
        {caption}
      </figcaption>
    )}
  </figure>
);

export default Picture;
