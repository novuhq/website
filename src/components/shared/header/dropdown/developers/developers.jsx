import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Link from 'components/shared/link';

const Developers = ({ items }) => (
  <div className="w-full overflow-hidden">
    <ul className="left-0 top-0 grid grid-cols-[156px_158px] grid-rows-2 gap-x-8 gap-y-6 p-2">
      {items.map(
        ({ title, icon, items: subItems, mobileOnly }, index) =>
          !mobileOnly && (
            <li
              className={clsx('text-[15px] leading-none', {
                'col-span-1 col-start-1 row-span-1 row-start-1': index === 1,
                'col-span-1 col-start-1 row-span-1 row-start-2': index === 2,
                'col-span-1 col-start-2 row-span-2 row-start-1': index === 3,
              })}
              key={index}
            >
              {title && (
                <span className="mb-3.5 flex items-center gap-x-3">
                  {icon && <img src={icon} alt="" width={28} height={28} />}
                  {title}
                </span>
              )}
              <ul
                className={clsx('flex flex-col gap-y-2.5', {
                  'h-full border-l border-l-[#1F1F1F] pl-6': index === 3,
                })}
              >
                {subItems.map(({ title, to, withImage }, index) => (
                  <li
                    className={clsx({ 'mb-3': withImage, 'text-sm leading-snug': !withImage })}
                    key={index}
                  >
                    {withImage ? (
                      <Link className="relative" to={to}>
                        <StaticImage
                          className="shadow-[0px_3px_8px_0px_rgba(0,0,0,0.3)]"
                          src="./images/docomentation.png"
                          alt=""
                          width={133}
                          height={108}
                          quality={100}
                        />
                        <span className="absolute inset-x-0 top-3.5 text-center text-sm leading-none">
                          {title}
                        </span>
                      </Link>
                    ) : (
                      <Link className="font-light text-gray-10 hover:text-primary-1" to={to}>
                        {title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          )
      )}
    </ul>
  </div>
);

export default Developers;
