import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import checkIcon from './images/check.svg';

const TITLE = 'Get involved';
const DESCRIPTION =
  'Building and managing complex notifications content and workflows is essential, but it is also not the business’s';
const BUTTON_TEXT = 'View all open issues';

const FILTERS = [
  {
    label: 'Type',
    fieldKey: 'tags',
    items: [
      {
        name: 'Bug',
      },
      {
        name: 'Feature',
      },
      {
        name: 'Docs Feedback',
      },
      {
        name: 'Good first issue',
      },
      {
        name: 'Help wanted',
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
  'docs feedback': {
    className: 'text-[#00BCE2] bg-[#00D5FF]',
    label: 'docs feedback',
  },
  'good first issue': {
    className: 'text-[#76D049] bg-[#76D049]',
    label: 'good first issue',
  },
  'help wanted': {
    className: 'text-[#DD99FF] bg-[#DD99FF]',
    label: 'help wanted',
  },
};

const Filter = ({
  className = null,
  setSelectedFilters,
  selectedFilters,
  label,
  items,
  fieldKey,
}) => {
  const handleChange = (e, name, fieldKey) => {
    if (e.target.checked) {
      setSelectedFilters((prev) => [...prev, { name, fieldKey }]);
    } else {
      setSelectedFilters((prev) =>
        prev.filter((filter) => filter.name !== name || filter.fieldKey !== fieldKey)
      );
    }
  };

  return (
    <div className={clsx('relative', className)}>
      <h3 className="text-[15px] leading-tight">{label}</h3>
      <ul className="mt-4 flex flex-col gap-y-4">
        {items.map(({ name }, index) => {
          const isFilterSelected = selectedFilters.some(
            (filter) => filter.name === name.toLowerCase() && filter.fieldKey === fieldKey
          );
          return (
            <li key={`${name}-${index}`}>
              <label className="group flex cursor-pointer items-center gap-x-2">
                <input
                  className="hidden"
                  type="checkbox"
                  onChange={(e) => handleChange(e, name.toLowerCase(), fieldKey)}
                />
                <span
                  className={clsx(
                    'flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border transition-colors duration-200',
                    isFilterSelected
                      ? 'border-primary-1 bg-primary-1'
                      : 'border-[#FFEBFF] border-opacity-15 bg-[#FFEBFF] bg-opacity-5 group-hover:border-opacity-25 group-hover:bg-opacity-10'
                  )}
                >
                  {isFilterSelected && (
                    <img
                      className="w-2.5 shrink-0"
                      src={checkIcon}
                      width={10}
                      height={8}
                      loading="lazy"
                    />
                  )}
                </span>
                <span className="text-sm leading-none text-[#FFF9FF] opacity-65 transition-opacity duration-200 group-hover:opacity-90">
                  {name}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Filter.propTypes = {
  className: PropTypes.string,
  setSelectedFilters: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  fieldKey: PropTypes.string.isRequired,
};

Filter.defaultProps = {
  className: null,
};

const Label = ({ theme }) => {
  const { className, label } = LABEL_THEMES[theme];

  return (
    <span
      className={clsx(
        'ml-1.5 inline-block rounded bg-opacity-10 px-1.5 py-[3px] text-xs leading-none tracking-[0.01em]',
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

const OpenIssues = ({ issues, reposWithIssues }) => {
  const [filteredIssues, setFilteredIssues] = useState(issues.slice(0, 10));
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    if (selectedFilters.length === 0) {
      setFilteredIssues(issues.slice(0, 10));
    } else {
      const filtersByFieldKey = selectedFilters.reduce((acc, filter) => {
        if (!acc[filter.fieldKey]) {
          acc[filter.fieldKey] = [];
        }
        acc[filter.fieldKey].push(filter.name);
        return acc;
      }, {});

      const selectedIssues = issues
        .filter((issue) =>
          Object.keys(filtersByFieldKey).every((key) =>
            filtersByFieldKey[key].some((value) => {
              if (Array.isArray(issue[key])) {
                return issue[key].some((item) => item.toLowerCase() === value.toLowerCase());
              }
              if (typeof issue[key] === 'string') {
                return issue[key].toLowerCase() === value.toLowerCase();
              }
              return false;
            })
          )
        )
        .slice(0, 10);

      setFilteredIssues(selectedIssues);
    }
  }, [selectedFilters, issues]);

  return (
    <section className="open-issues safe-paddings relative z-10 -mt-5 xl:-mt-11 xl:overflow-x-hidden xl:pt-16 md:-mt-8 md:pt-40 sm:-mt-6 sm:pt-[114px]">
      <div className="container grid-gap-x relative z-10 grid grid-cols-12">
        <header className="relative z-10 col-span-8 col-start-3 flex justify-between pl-11 pr-[58px] xl:col-span-10 xl:col-start-2 lg:col-span-full lg:px-[53px] md:px-6 sm:px-0">
          <div className="pt-[59px] lg:pt-16 md:pt-[72px] sm:w-full sm:pt-0">
            <Heading
              className="font-medium leading-tight lg:text-5xl md:text-[32px] sm:text-center sm:text-3xl"
              tag="h2"
              size="xl"
              theme="white"
            >
              {TITLE}
            </Heading>
            <p className="mt-3 max-w-[546px] text-lg text-gray-9 lg:mt-[23px] lg:max-w-[518px] lg:text-base md:mt-3.5 md:max-w-[325px] md:leading-snug sm:mx-auto sm:mt-3 sm:max-w-sm sm:text-center">
              {DESCRIPTION}
            </p>
          </div>
          <StaticImage
            className="shrink-0 sm:!hidden"
            src="./images/cyberpunk-raccoona.png"
            width={264}
            height={232}
            alt=""
            loading="lazy"
          />
        </header>
        <div className="relative col-span-8 col-start-3 flex rounded-xl bg-open-issues-table-bg xl:col-span-10 xl:col-start-2 lg:col-span-full sm:mt-8">
          <div className="grow py-12 pl-12 pr-11 lg:p-11 md:px-6 md:pb-8 md:pt-6 sm:px-3.5 sm:pb-[22px] sm:pt-3">
            <div className="flex border-b border-[#FFD5EE] border-opacity-[0.13] pb-4 text-sm font-medium uppercase md:pb-3.5 sm:text-[10px]">
              <span className="w-[126px] shrink-0 bg-gradient-to-r from-[#E0C4D8] via-[#DFBCD7] via-40% to-[#DFBCD7] bg-clip-text text-[#FFDFEF] text-transparent lg:w-[113px] md:w-[89px] sm:w-[55px]">
                Issue #
              </span>
              <span className="w-fit grow bg-gradient-to-r from-[#DAAFC9] to-[#D7A7C3] bg-clip-text leading-tight text-transparent">
                Title
              </span>
            </div>
            <ul>
              {filteredIssues.map(({ title, number, html_url: url, tags }, index) => (
                <li className="border-b border-[#FFD5EE] border-opacity-[0.13]" key={index}>
                  <Link
                    className="group flex py-4 text-lg md:py-3.5 md:text-base sm:text-sm"
                    to={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      className={clsx(
                        'w-[126px] shrink-0 text-[#FFDFEF] lg:w-[113px] md:w-[89px] sm:w-[55px]',
                        index < 4 && 'opacity-65',
                        index === 4 && 'opacity-60',
                        index > 4 && index < 8 && 'opacity-55',
                        index === 8 && 'opacity-50',
                        index === 9 && 'opacity-45'
                      )}
                    >
                      #{number}
                    </span>
                    <span className="grow leading-tight text-white transition-colors duration-200 group-hover:text-white/70">
                      {title}
                      {tags.map((tag) => (
                        <Label theme={tag} />
                      ))}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              className="mt-[42px] md:mt-6 md:h-11 sm:mt-4 sm-xs:w-full"
              size="sm"
              theme="pink-to-red-gradient"
              to="https://github.com/novuhq/novu/issues/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {BUTTON_TEXT}
            </Button>
          </div>
          <aside className="flex w-[248px] shrink-0 flex-col gap-y-5 border-l border-[#33282D] border-opacity-80 p-12 lg:w-60 lg:p-11 md:hidden">
            <form>
              {FILTERS.map(({ label, fieldKey, items }, index) => (
                <Filter
                  className="pb-5 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/60 after:mix-blend-overlay"
                  setSelectedFilters={setSelectedFilters}
                  selectedFilters={selectedFilters}
                  label={label}
                  items={items}
                  key={index}
                  fieldKey={fieldKey}
                />
              ))}
            </form>
            <Filter
              setSelectedFilters={setSelectedFilters}
              selectedFilters={selectedFilters}
              label="Repository"
              items={reposWithIssues}
              fieldKey="repository_name"
            />
          </aside>
          <div
            className="pointer-events-none absolute left-1 top-4 z-10 h-60 w-[70px] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(rgba(241,126,222,.9),rgba(241,126,222,.2))] opacity-45 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-1 top-24 z-10 h-20 w-7 -translate-x-1/2 rounded-[100%] bg-[radial-gradient(#fff,#fff_20%,rgba(255,255,255,.2))] opacity-35 mix-blend-overlay blur-xl"
            aria-hidden
          />
          <div
            className="border-gradient pointer-events-none absolute inset-0 rounded-[inherit] border-image-open-issues-table-border"
            aria-hidden
          />
          <div
            className="absolute -top-36 right-24 -z-10 h-[260px] w-[200px] scale-[1.2] rounded-[100%] bg-[linear-gradient(84.66deg,#F0655C_18%,#00D5FF_70%)] opacity-25 blur-3xl lg:right-16 md:-right-1.5 sm:-right-24"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
};

OpenIssues.propTypes = {
  issues: PropTypes.array.isRequired,
  reposWithIssues: PropTypes.array.isRequired,
};

export default OpenIssues;
