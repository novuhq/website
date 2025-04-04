import Link from 'components/shared/link';
import React from 'react';

import LINKS, { applyQueryParams } from 'constants/links';

type CtaCardProps = {
  className?: string;
};

export function CtaCard({ className = '' }: CtaCardProps) {
  return (
    <div className={`border-gray-200 shadow-sm rounded-xl border ${className}`}>
      <div className="p-6 pb-3">
        <h4 className="text-lg font-semibold">Add notifications to your app</h4>
      </div>
      <div className="px-6 pb-6">
        <p className="text-gray-500 text-sm">
          Novu is an open-source notification platform that allows you to add notifications to your
          app, including pre-made React Inbox component and user Preferences page.
        </p>
      </div>
      <div className="px-6 pb-6">
        <Link
          className="flex h-10 w-full items-center justify-center rounded-md bg-primary-1 text-sm font-medium text-white transition-colors hover:bg-primary-1/90"
          to={applyQueryParams(LINKS.home, ['utm_campaign=blog_sidebar']).to}
          theme="primary"
          size="base"
          tag="a"
          withArrow={false}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
