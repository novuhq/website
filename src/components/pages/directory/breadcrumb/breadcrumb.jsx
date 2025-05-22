import React from 'react';

import Link from 'components/shared/link';
import ArrowSmallLeftIcon from 'icons/arrow-left-small.inline.svg';

const Breadcrumb = ({ title }) => (
  <span className="z-10 flex items-center gap-1 text-sm">
    <Link className="group z-10 flex items-center gap-1" to="/directory">
      <ArrowSmallLeftIcon className="w-3.5 shrink-0 text-gray-6 transition-colors duration-200 group-hover:text-gray-8" />
      <span className="leading-snug tracking-snug text-gray-6 transition-colors duration-200 group-hover:text-gray-8">
        Templates
      </span>
    </Link>
    <span className="text-gray-7">&nbsp;/&nbsp;</span>
    <span className="leading-none">{title}</span>
  </span>
);

export default Breadcrumb;
