import { useThrottleCallback } from '@react-hook/throttle';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import slugify from 'slugify';

import Link from 'components/shared/link';

const CURRENT_ANCHOR_GAP_PX = 60;

const TableOfContents = ({ headings }) => {
  const [currentHeading, setCurrentHeading] = useState(null);

  const updateCurrentAnchor = useCallback(() => {
    const currentHeadingIndex = headings.findIndex((heading) => {
      const anchor = document.querySelector(`#${heading.props.id}`);
      if (!anchor) return false;

      return anchor.getBoundingClientRect().top - CURRENT_ANCHOR_GAP_PX >= 0;
    });

    const index =
      currentHeadingIndex === -1 ? headings.length - 1 : Math.max(currentHeadingIndex - 1, 0);

    const currentHeading = headings[index];
    const { id } = currentHeading.props;
    setCurrentHeading(id);
  }, [headings]);

  const onScroll = useThrottleCallback(updateCurrentAnchor, 5);

  useEffect(() => {
    updateCurrentAnchor();

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="text-sm">
      <span className="leading-none font-medium tracking-snug">In this article</span>
      <ul className="mt-[18px] flex flex-col">
        {headings.map((heading) => {
          const { type } = heading;

          const headingText = React.Children.map(heading.props.children, (child) => {
            if (child.type === 'strong') {
              return child.props.children;
            }
            return child;
          });

          const text = headingText.join(' ');

          const id = slugify(text, { lower: true, remove: /[*+~.()'"!:@/?]/g });
          return (
            <li className="group flex" key={id}>
              <Link
                className={clsx(
                  'tracking-snug py-[7px] group-last:pb-0 group-first:pt-0 leading-snug hover:text-white transition-colors duration-200',
                  { 'pl-2.5': type === 'h3' },
                  currentHeading === id ? 'text-white font-medium' : 'text-[#777A88]'
                )}
                to={`#${id}`}
              >
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

TableOfContents.propTypes = {
  headings: PropTypes.array.isRequired,
};

export default TableOfContents;
