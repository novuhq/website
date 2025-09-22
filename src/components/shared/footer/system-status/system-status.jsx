import clsx from 'clsx';
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import Link from 'components/shared/link';

const STATUS_THEMES = {
  up: {
    text: 'All systems operational',
    className: 'before:bg-[#22c358]',
    values: ['up'],
  },
  down: {
    text: 'Some of the services are down',
    className: 'before:bg-[#de5835]',
    values: ['down'],
  },
  maintenance: {
    text: 'Ongoing maintenance on some services',
    className: 'before:bg-[#f1b64c]',
    values: ['maintenance', 'paused', 'pending', 'validating'],
  },
  fetchFailed: {
    text: 'Failed to fetch some services',
    className: 'before:bg-[#666666]',
    values: [''],
  },
};

const SystemStatus = () => {
  const data = useStaticQuery(graphql`
    query {
      systemsStatus {
        name
        status
      }
    }
  `);

  const allStatuses = data.systemsStatus || [];

  let currentStatus = STATUS_THEMES.fetchFailed;

  if (allStatuses.length > 0) {
    const statuses = allStatuses.map((s) => s.status);

    if (statuses.some((status) => STATUS_THEMES.down.values.includes(status))) {
      currentStatus = STATUS_THEMES.down;
    } else if (statuses.some((status) => STATUS_THEMES.maintenance.values.includes(status))) {
      currentStatus = STATUS_THEMES.maintenance;
    } else if (statuses.every((status) => status === 'up')) {
      currentStatus = STATUS_THEMES.up;
    }
  }

  return (
    <Link
      className={clsx(
        'relative flex items-center gap-1.5 text-base font-light tracking-tight text-white hover:text-white/80 focus-visible:text-white/80 lg:font-normal lg:tracking-normal',
        'before:size-1.5 before:rounded-full',
        currentStatus.className
      )}
      href="https://novustatus.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      {currentStatus.text}
    </Link>
  );
};

export default SystemStatus;
