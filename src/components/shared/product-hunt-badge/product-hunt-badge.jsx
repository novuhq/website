/* eslint-disable react/require-default-props */
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import ArrowIcon from 'icons/chevron-right.inline.svg';
import ProductHuntIcon from 'icons/product-hunt.inline.svg';

const DEFAULT_PRODUCT_HUNT_LAUNCH_URL =
  'https://www.producthunt.com/products/novu/launches/novu-connect';

const getSafeRel = (target, rel) => {
  if (target !== '_blank') {
    return rel;
  }

  const relTokens = new Set((rel || '').split(/\s+/).filter(Boolean));
  relTokens.add('noopener');
  relTokens.add('noreferrer');

  return Array.from(relTokens).join(' ');
};

const LinkInlineArrow = ({ className = null, lineClassName = null }) => (
  <span
    className={clsx(
      'relative mt-0.5 w-1.5 shrink-0 overflow-hidden transition-[width] duration-200 group-hover:w-3',
      className
    )}
  >
    <ArrowIcon className="pointer-events-none ml-auto h-2.5 w-1.5" aria-hidden />
    <span
      className={clsx(
        'absolute right-px top-1/2 h-px w-full -translate-y-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100',
        lineClassName
      )}
    />
  </span>
);

const ProductHuntBadge = ({
  className = null,
  label = 'Product Hunt',
  linkProps = {},
  prefixText = 'Featured on',
  ...props
}) => {
  const {
    className: linkClassName,
    href = DEFAULT_PRODUCT_HUNT_LAUNCH_URL,
    rel = 'noopener noreferrer',
    target = '_blank',
    ...productHuntLinkProps
  } = linkProps;
  const safeRel = getSafeRel(target, rel);

  return (
    <span
      className={clsx(
        'inline-flex w-fit items-center gap-1.5 whitespace-nowrap text-[15px]',
        className
      )}
      {...props}
    >
      <span className="font-normal leading-normal tracking-[-0.3px] text-gray-8">{prefixText}</span>
      <a
        className={clsx(
          'group inline-flex items-center gap-[3px] rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-1/40',
          linkClassName
        )}
        href={href}
        rel={safeRel}
        target={target}
        {...productHuntLinkProps}
      >
        <ProductHuntIcon className="h-5 w-5 shrink-0" aria-hidden />
        <span className="inline-flex items-center gap-1.5 font-book leading-snug text-white transition-colors duration-200 group-hover:text-primary-1 group-focus-visible:text-primary-1">
          <span>{label}</span>
          <LinkInlineArrow
            className="mt-0 flex h-4 items-center group-focus-visible:w-3"
            lineClassName="bg-primary-1 group-focus-visible:opacity-100"
          />
        </span>
      </a>
    </span>
  );
};

ProductHuntBadge.propTypes = {
  className: PropTypes.string,
  label: PropTypes.node,
  linkProps: PropTypes.shape({
    className: PropTypes.string,
    href: PropTypes.string,
    rel: PropTypes.string,
    target: PropTypes.string,
  }),
  prefixText: PropTypes.node,
};

LinkInlineArrow.propTypes = {
  className: PropTypes.string,
  lineClassName: PropTypes.string,
};

export default ProductHuntBadge;
