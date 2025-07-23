import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import GradientBorder from 'components/shared/gradient-border';
import Link from 'components/shared/link';

const IndexCard = ({ title, description, image, slug }) => (
  <li className="group/item relative flex justify-center overflow-hidden">
    <Link to={`/directory/${slug}`} className="text-decoration-none z-10 m-px text-inherit">
      <div className="flex h-full flex-col gap-y-[14px] rounded-xl bg-[#111018] p-[6px] transition-colors duration-200 group-hover/item:bg-[#16151E] md:p-[4px]">
        <div className="relative aspect-[294/168] shrink-0 overflow-hidden rounded-[8px] md:aspect-[332/186]">
          {image && (
            <GatsbyImage
              image={getImage(image)}
              alt=""
              className="!absolute !inset-0 !object-cover"
            />
          )}
        </div>
        <div className="overflow-hidden px-2.5 pb-2.5 md:px-3 md:pb-3">
          <h3 className="line-clamp-2 text-lg font-medium leading-snug text-[#E6E6E6]">{title}</h3>
          <p className="mt-[8px] line-clamp-3 text-[15px] font-book leading-snug tracking-snug text-gray-8">
            {description}
          </p>
        </div>
      </div>
    </Link>
    <GradientBorder
      className="rounded-xl border-image-directory-card-border-gradient"
      aria-hidden
    />
  </li>
);

IndexCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
};

export default IndexCard;
