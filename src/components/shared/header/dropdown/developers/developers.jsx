import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Link from 'components/shared/link';

const Developers = ({ items }) => (
  <div className="w-full overflow-hidden">
    <ul className="top-0 left-0 p-2 grid grid-cols-[156px_158px] grid-rows-2 gap-y-6 gap-x-8">
      {items.map(
        ({ title, icon, items: subItems, mobileOnly }, index) =>
          !mobileOnly && (
            <li
              className={clsx('text-[15px] leading-none', {
                'col-start-1 row-start-1 col-span-1 row-span-1': index === 1,
                'col-start-1 row-start-2 col-span-1 row-span-1': index === 2,
                'col-start-2 row-start-1 col-span-1 row-span-2': index === 3,
              })}
              key={index}
            >
              {title && (
                <span className="mb-3.5 flex gap-x-3 items-center">
                  {icon && <img src={icon} alt="" width={28} height={28} />}
                  {title}
                </span>
              )}
              <ul
                className={clsx('flex flex-col gap-y-2.5', {
                  'pl-6 border-l border-l-[#1F1F1F] h-full': index === 3,
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
                        <span className="absolute text-sm leading-none top-3.5 inset-x-0 text-center">
                          {title}
                        </span>
                      </Link>
                    ) : (
                      <Link className="text-gray-10 font-light hover:text-primary-1" to={to}>
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
