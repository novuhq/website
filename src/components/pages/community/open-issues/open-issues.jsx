import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

// TODO:
// - add github data
// - create filters

const TITLE = 'Get involved';
const DESCRIPTION =
  'Building and managing complex notifications content and workflows is essential, but it is also not the business’s';
const BUTTON_TEXT = 'View all open issues';

const FILTERS = [
  {
    title: 'Type',
    items: [
      {
        label: 'Bug',
      },
      {
        label: 'Feature',
      },
      {
        label: 'Issue',
      },
    ],
  },
  {
    title: 'Language',
    items: [
      {
        label: 'English',
      },
      {
        label: 'Spanish',
      },
      {
        label: 'Korean',
      },
    ],
  },
  {
    title: 'Repository',
    items: [
      {
        label: 'Repository 1',
      },
      {
        label: 'Repository 2',
      },
      {
        label: 'Repository 3',
      },
      {
        label: 'Repository 4',
      },
    ],
  },
  {
    title: 'Language',
    items: [
      {
        label: 'English',
      },
      {
        label: 'Spanish',
      },
      {
        label: 'Korean',
      },
      {
        label: 'Romanian',
      },
    ],
  },
];

const LABEL_THEMES = {
  bug: {
    className: 'text-[#FA736B] bg-[#F9493E]',
    label: 'bug',
  },
  feature: {
    className: 'text-[#F05C99] bg-[#F05C99]',
    label: 'feature',
  },
};

const Label = ({ theme }) => {
  const { className, label } = LABEL_THEMES[theme];

  return (
    <span
      className={clsx(
        'inline-block px-1.5 py-[3px] bg-opacity-10 rounded leading-none tracking-[0.01em] text-xs ml-2',
        className
      )}
    >
      {label}
    </span>
  );
};

Label.propTypes = {
  theme: PropTypes.oneOf(Object.keys(LABEL_THEMES)).isRequired,
};

const OpenIssues = () => (
  <section className="get-involved safe-paddings relative z-10 -mt-5">
    <div className="container grid grid-cols-12 grid-gap-x relative z-10">
      <header className="col-span-8 relative z-10 col-start-3 flex justify-between pl-11 pr-[58px]">
        <div className="pt-[59px]">
          <Heading className="font-medium leading-tight" tag="h2" size="xl" theme="white">
            {TITLE}
          </Heading>
          <p className="mt-3 max-w-[546px] text-gray-9 text-lg">{DESCRIPTION}</p>
        </div>
        <StaticImage
          className="shrink-0"
          src="./images/cyberpunk-raccoona.png"
          width={264}
          height={232}
          alt=""
          loading="lazy"
        />
      </header>
      <div className="col-span-8 col-start-3 relative rounded-xl flex bg-open-issues-table-bg">
        <div className="grow py-12 pl-12 pr-11">
          <div className="flex border-b border-[#FFD5EE] border-opacity-[0.13] pb-4 uppercase text-sm font-medium">
            <span className="w-[126px] text-[#FFDFEF] bg-gradient-to-r from-[#E0C4D8] via-40% via-[#DFBCD7] to-[#DFBCD7] shrink-0 bg-clip-text text-transparent">
              Issue #
            </span>
            <span className="leading-tight grow bg-gradient-to-r from-[#DAAFC9] to-[#D7A7C3] w-fit bg-clip-text text-transparent">
              Title
            </span>
          </div>
          <ul>
            {Array.from({ length: 10 }).map((item, index) => (
              <li className="border-b border-[#FFD5EE] border-opacity-[0.13] py-4 flex text-lg">
                <span
                  className={clsx(
                    'w-[126px] text-[#FFDFEF] shrink-0',
                    index < 4 && 'opacity-65',
                    index === 4 && 'opacity-60',
                    index > 4 && index < 8 && 'opacity-55',
                    index === 8 && 'opacity-50',
                    index === 9 && 'opacity-45'
                  )}
                >
                  #6589
                </span>
                <span className="leading-tight grow">
                  Merge pull requests from pixel-point
                  <Label theme="feature" />
                </span>
              </li>
            ))}
          </ul>
          <Button className="mt-[42px]" size="sm" theme="pink-to-red-gradient">
            {BUTTON_TEXT}
          </Button>
        </div>
        <aside className="p-12 w-[248px] shrink-0 border-l border-[#33282D] border-opacity-80 flex flex-col gap-y-5">
          {FILTERS.map(({ title, items }, index) => (
            <div
              className={clsx(
                'relative',
                index < FILTERS.length - 1 &&
                  'pb-5 after:absolute after:bottom-0 after:inset-x-0 after:h-px after:bg-white/60 after:mix-blend-overlay'
              )}
              key={index}
            >
              <h3 className="text-[15px] leading-tight">{title}</h3>
              <ul className="mt-4 flex flex-col gap-y-4">
                {items.map(({ label }, subindex) => (
                  <li key={`${label}-${subindex}`}>
                    <label className="group flex items-center gap-x-2 cursor-pointer">
                      <input className="hidden" type="checkbox" />
                      <span className="w-4 h-4 border border-[#FFEBFF] border-opacity-15 bg-[#FFEBFF] bg-opacity-5 shrink-0 rounded-sm group-hover:bg-opacity-10 group-hover:border-opacity-20 transition-colors duration-200" />
                      <span className="text-[#FFF9FF] opacity-70 text-sm leading-none">
                        {label}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>
        <div className="absolute left-1 top-4 z-10 -translate-x-1/2 opacity-45 w-[70px] h-[240px] blur-3xl bg-[radial-gradient(rgba(241,126,222,.9),rgba(241,126,222,.2))] rounded-[100%] pointer-events-none" />
        <div className="absolute left-1 top-24 z-10 -translate-x-1/2 w-7 h-20 bg-[radial-gradient(#fff,#fff_20%,rgba(255,255,255,.2))] mix-blend-overlay opacity-35 blur-xl rounded-[100%] pointer-events-none" />
        <div
          className="border-gradient absolute inset-0 pointer-events-none rounded-inherit border-image-open-issues-table-border"
          aria-hidden
        />
        <div
          className="absolute -z-10 -top-36 right-24 w-[200px] h-[260px] bg-[linear-gradient(84.66deg,#F0655C_18%,#00D5FF_70%)] rounded-[100%] blur-3xl scale-[1.2] opacity-25"
          aria-hidden
        />
      </div>
    </div>
  </section>
);

export default OpenIssues;
