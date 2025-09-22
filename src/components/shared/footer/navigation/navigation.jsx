import React from 'react';

import Link from 'components/shared/link';
import MENUS from 'constants/menus';

const Navigation = () => (
  <nav className="-mt-[3px] flex flex-wrap gap-5 text-sm">
    <ul className="flex gap-40 md:gap-[94px] sm:flex-col sm:gap-[39px]">
      {MENUS.footer.main.map(({ title, items }) => (
        <li key={title}>
          <p className="text-lg -tracking-[0.02em]">{title}</p>
          <ul className="mt-[15px] flex flex-col gap-4 md:mt-4 sm:mt-3 sm:gap-3">
            {items.map(({ label, href, isNew }) => (
              <li className="flex items-center gap-[5px]" key={label}>
                <Link className="text-base tracking-tight" to={href} theme="ghost">
                  {label}
                </Link>
                {isNew && (
                  <span className="h-5 -translate-y-px rounded-full bg-primary-1 px-[5px] pt-0.5 text-sm leading-none text-gray-4">
                    New
                  </span>
                )}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
