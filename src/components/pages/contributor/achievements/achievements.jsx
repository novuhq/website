import clsx from 'clsx';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import ReactTooltip from 'react-tooltip';

import Heading from 'components/shared/heading';

import bronzeMedalIconDisabled from './images/bronze-medal.svg';
import contributorOfTheMonthIconDisabled from './images/contributor-of-the-month.svg';
import contributorOfTheYearIconDisabled from './images/contributor-of-the-year.svg';
import countIcon from './images/count.svg';
import goldMedalIconDisabled from './images/gold-medal.svg';
import reporterStarIconDisabled from './images/reporter-star.svg';
import rockStarIconDisabled from './images/rock-star.svg';
import silverMedalIconDisabled from './images/silver-medal.svg';
import teamPlayerIconDisabled from './images/team-player.svg';

import './achievements.css';

const TITLE = 'Achievements';
const DESCRIPTION =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ultrices mattis nulla quisque risus. In porttitor fames leo eget id viverra.';
const ACHIEVEMENTS = [
  {
    iconName: 'rockStar',
    title: 'Contributor of the month',
    date: 'Last: April 2022',
    count: 2,
  },
  {
    iconName: 'contributorOfTheYear',
    title: 'Contributor of the year',
    tooltip:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ultrices mattis nulla quisque risus. In porttitor fames leo eget id viverra.',
    date: null,
    count: 0,
  },
  {
    iconName: 'contributorOfTheMonth',
    title: 'Contributor of the month',
    date: 'April 2022',
    count: 1,
  },
  {
    iconName: 'reporterStar',
    title: 'Star Reporter',
    tooltip:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ultrices mattis nulla quisque risus. In porttitor fames leo eget id viverra.',
    date: null,
    count: 0,
  },
  {
    iconName: 'teamPlayer',
    title: 'Team Player',
    date: null,
    count: 1,
  },
  {
    iconName: 'goldMedal',
    title: 'Gold Medal',
    tooltip:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ultrices mattis nulla quisque risus. In porttitor fames leo eget id viverra.',
    date: null,
    count: 0,
  },
  {
    iconName: 'silverMedal',
    title: 'Silver Medal',
    date: 'April 2022',
    count: 1,
  },
  {
    iconName: 'bronzeMedal',
    title: 'Bronze Medal',
    date: 'April 2022',
    count: 3,
  },
];

const Achievements = () => {
  const {
    rockStar,
    contributorOfTheYear,
    contributorOfTheMonth,
    reporterStar,
    teamPlayer,
    goldMedal,
    silverMedal,
    bronzeMedal,
  } = useStaticQuery(graphql`
    query {
      rockStar: file(relativePath: { eq: "contributors/achievements/rock-star.png" }) {
        childImageSharp {
          gatsbyImageData(width: 160, height: 160)
        }
      }
      contributorOfTheYear: file(
        relativePath: { eq: "contributors/achievements/contributor-of-the-year.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 160, height: 160)
        }
      }
      contributorOfTheMonth: file(
        relativePath: { eq: "contributors/achievements/contributor-of-the-month.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 160, height: 160)
        }
      }
      reporterStar: file(relativePath: { eq: "contributors/achievements/reporter-star.png" }) {
        childImageSharp {
          gatsbyImageData(width: 160, height: 160)
        }
      }
      teamPlayer: file(relativePath: { eq: "contributors/achievements/team-player.png" }) {
        childImageSharp {
          gatsbyImageData(width: 160, height: 160)
        }
      }
      goldMedal: file(relativePath: { eq: "contributors/achievements/gold-medal.png" }) {
        childImageSharp {
          gatsbyImageData(width: 134, height: 160)
        }
      }
      silverMedal: file(relativePath: { eq: "contributors/achievements/silver-medal.png" }) {
        childImageSharp {
          gatsbyImageData(width: 134, height: 160)
        }
      }
      bronzeMedal: file(relativePath: { eq: "contributors/achievements/bronze-medal.png" }) {
        childImageSharp {
          gatsbyImageData(width: 134, height: 160)
        }
      }
    }
  `);

  const achievementIcons = {
    rockStar: {
      active: rockStar,
      disabled: rockStarIconDisabled,
    },
    contributorOfTheYear: {
      active: contributorOfTheYear,
      disabled: contributorOfTheYearIconDisabled,
    },
    contributorOfTheMonth: {
      active: contributorOfTheMonth,
      disabled: contributorOfTheMonthIconDisabled,
    },
    reporterStar: {
      active: reporterStar,
      disabled: reporterStarIconDisabled,
    },
    teamPlayer: {
      active: teamPlayer,
      disabled: teamPlayerIconDisabled,
    },
    goldMedal: {
      active: goldMedal,
      disabled: goldMedalIconDisabled,
    },
    silverMedal: {
      active: silverMedal,
      disabled: silverMedalIconDisabled,
    },
    bronzeMedal: {
      active: bronzeMedal,
      disabled: bronzeMedalIconDisabled,
    },
  };

  return (
    <section className="achievements col-span-8">
      <Heading className="leading-denser" tag="h2" size="md">
        {TITLE}
      </Heading>
      <p className="mt-4 text-lg font-light text-gray-10">{DESCRIPTION}</p>

      <div className="mt-10 grid grid-cols-4 gap-x-8 gap-y-10">
        {ACHIEVEMENTS.map(({ iconName, title, tooltip, date, count }, index) => {
          const isActive = count > 0;
          const icon = achievementIcons[iconName];

          return (
            <div className="flex flex-col items-center" key={index} data-tip={tooltip}>
              {tooltip && (
                <ReactTooltip
                  className="max-w-[248px] !rounded-lg bg-gradient-to-b from-gray-2 to-[rgba(26,26,26,0.7)] !p-4 text-sm font-light leading-tight"
                  place="top"
                  delayHide={300}
                  effect="solid"
                  multiline
                />
              )}
              <div className="relative">
                {isActive ? (
                  <GatsbyImage
                    image={getImage(icon.active)}
                    alt={`${title} icon`}
                    loading="eager"
                    aria-hidden
                  />
                ) : (
                  <img
                    className="opacity-50"
                    src={icon.disabled}
                    alt={`${title} icon`}
                    loading="eager"
                    aria-hidden
                  />
                )}

                {count > 1 && (
                  <div className="absolute top-0 right-0" aria-hidden>
                    <div className="relative flex items-center justify-center">
                      <img src={countIcon} loading="eager" alt="" />
                      <span className="achievement-count">{count}</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-3.5 space-y-1.5 text-center">
                <h4
                  className={clsx('text-base leading-tight', {
                    'text-gray-4': !isActive,
                  })}
                >
                  {title}
                </h4>
                {date && <span className="text-sm leading-tight text-gray-6">{date}</span>}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;
