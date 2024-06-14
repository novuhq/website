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
              <label className="group flex items-center gap-x-2 cursor-pointer">
                <input
                  className="hidden"
                  type="checkbox"
                  onChange={(e) => handleChange(e, name.toLowerCase(), fieldKey)}
                />
                <span
                  className={clsx(
                    'w-4 h-4 border shrink-0 flex items-center justify-center rounded-sm transition-colors duration-200',
                    isFilterSelected
                      ? 'bg-primary-1 border-primary-1'
                      : 'border-[#FFEBFF] border-opacity-15 bg-[#FFEBFF] bg-opacity-5 group-hover:bg-opacity-10 group-hover:border-opacity-25'
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
                <span className="text-[#FFF9FF] opacity-65 text-sm leading-none transition-opacity duration-200 group-hover:opacity-90">
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
        'inline-block px-1.5 py-[3px] bg-opacity-10 rounded leading-none tracking-[0.01em] text-xs ml-1.5',
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
    <section className="open-issues safe-paddings relative z-10 -mt-5 xl:overflow-x-hidden xl:-mt-11 xl:pt-16 md:-mt-8 md:pt-40 sm:-mt-6 sm:pt-[114px]">
      <div className="container grid grid-cols-12 grid-gap-x relative z-10">
        <header className="relative z-10 col-span-8 col-start-3 flex justify-between pl-11 pr-[58px] xl:col-span-10 xl:col-start-2 lg:col-span-full lg:px-[53px] md:px-6 sm:px-0">
          <div className="pt-[59px] lg:pt-16 md:pt-[72px] sm:pt-0 sm:w-full">
            <Heading
              className="font-medium leading-tight lg:text-5xl md:text-[32px] sm:text-3xl sm:text-center"
              tag="h2"
              size="xl"
              theme="white"
            >
              {TITLE}
            </Heading>
            <p className="mt-3 max-w-[546px] text-gray-9 text-lg lg:text-base lg:mt-[23px] lg:max-w-[518px] md:mt-3.5 md:max-w-[325px] md:leading-snug sm:mt-3 sm:max-w-sm sm:mx-auto sm:text-center">
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
        <div className="col-span-8 col-start-3 relative rounded-xl flex bg-open-issues-table-bg xl:col-span-10 xl:col-start-2 lg:col-span-full sm:mt-8">
          <div className="grow py-12 pl-12 pr-11 lg:p-11 md:px-6 md:pt-6 md:pb-8 sm:pt-3 sm:px-3.5 sm:pb-[22px]">
            <div className="flex border-b border-[#FFD5EE] border-opacity-[0.13] pb-4 uppercase text-sm font-medium md:pb-3.5 sm:text-[10px]">
              <span className="w-[126px] text-[#FFDFEF] bg-gradient-to-r from-[#E0C4D8] via-40% via-[#DFBCD7] to-[#DFBCD7] shrink-0 bg-clip-text text-transparent lg:w-[113px] md:w-[89px] sm:w-[55px]">
                Issue #
              </span>
              <span className="leading-tight grow bg-gradient-to-r from-[#DAAFC9] to-[#D7A7C3] w-fit bg-clip-text text-transparent">
                Title
              </span>
            </div>
            <ul>
              {filteredIssues.map(({ title, number, html_url: url, tags }, index) => (
                <li className="border-b border-[#FFD5EE] border-opacity-[0.13]" key={index}>
                  <Link
                    className="group py-4 flex text-lg md:text-base sm:text-sm md:py-3.5"
                    to={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      className={clsx(
                        'w-[126px] text-[#FFDFEF] shrink-0 lg:w-[113px] md:w-[89px] sm:w-[55px]',
                        index < 4 && 'opacity-65',
                        index === 4 && 'opacity-60',
                        index > 4 && index < 8 && 'opacity-55',
                        index === 8 && 'opacity-50',
                        index === 9 && 'opacity-45'
                      )}
                    >
                      #{number}
                    </span>
                    <span className="leading-tight grow text-white transition-colors duration-200 group-hover:text-white/70">
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
          <aside className="p-12 w-[248px] shrink-0 border-l border-[#33282D] border-opacity-80 flex flex-col gap-y-5 lg:w-60 lg:p-11 md:hidden">
            <form>
              {FILTERS.map(({ label, fieldKey, items }, index) => (
                <Filter
                  className="pb-5 after:absolute after:bottom-0 after:inset-x-0 after:h-px after:bg-white/60 after:mix-blend-overlay"
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
            className="absolute left-1 top-4 z-10 -translate-x-1/2 opacity-45 w-[70px] h-60 blur-3xl bg-[radial-gradient(rgba(241,126,222,.9),rgba(241,126,222,.2))] rounded-[100%] pointer-events-none"
            aria-hidden
          />
          <div
            className="absolute left-1 top-24 z-10 -translate-x-1/2 w-7 h-20 bg-[radial-gradient(#fff,#fff_20%,rgba(255,255,255,.2))] mix-blend-overlay opacity-35 blur-xl rounded-[100%] pointer-events-none"
            aria-hidden
          />
          <div
            className="border-gradient absolute inset-0 pointer-events-none rounded-[inherit] border-image-open-issues-table-border"
            aria-hidden
          />
          <div
            className="absolute -z-10 -top-36 right-24 w-[200px] h-[260px] bg-[linear-gradient(84.66deg,#F0655C_18%,#00D5FF_70%)] rounded-[100%] blur-3xl scale-[1.2] opacity-25 lg:right-16 md:-right-1.5 sm:-right-24"
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
