import clsx from 'clsx';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';

import bronzeMedalIconDisabled from './images/bronze-medal.png';
import contributorOfTheMonthIconDisabled from './images/contributor-of-the-month.png';
import contributorOfTheYearIconDisabled from './images/contributor-of-the-year.png';
import goldMedalIconDisabled from './images/gold-medal.png';
import reporterStarIconDisabled from './images/reporter-star.png';
import rockStarIconDisabled from './images/rock-star.png';
import silverMedalIconDisabled from './images/silver-medal.png';
import teamPlayerIconDisabled from './images/team-player.png';
import { Share, SHARE_TYPES } from './share';
import Tooltip from './tooltip';

import './achievements.css';

const ACHIEVEMENTS = [
  // {
  //   iconName: 'rockStar',
  //   title: 'Contributor of the month',
  //   date: 'Last: April 2022',
  //   count: 1,
  // },
  // {
  //   iconName: 'contributorOfTheYear',
  //   title: 'Contributor of the year',
  //   tooltip:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ultrices mattis nulla quisque risus. In porttitor fames leo eget id viverra.',
  //   date: null,
  //   count: 0,
  // },
  // {
  //   iconName: 'contributorOfTheMonth',
  //   title: 'Contributor of the month',
  //   date: 'April 2022',
  //   count: 1,
  // },
  // {
  //   iconName: 'reporterStar',
  //   title: 'Star Reporter',
  //   tooltip:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ultrices mattis nulla quisque risus. In porttitor fames leo eget id viverra.',
  //   date: null,
  //   count: 0,
  // },
  // {
  //   iconName: 'teamPlayer',
  //   title: 'Team Player',
  //   date: null,
  //   count: 1,
  // },
  {
    iconName: 'goldMedal',
    title: 'Gold Medal',
    tooltip:
      'This medal is given to the experienced contributors with many thanks from the Novu team.',
    date: null,
    count: 0,
    minStars: 7,
  },
  {
    iconName: 'silverMedal',
    title: 'Silver Medal',
    tooltip: 'This one is held by the people who made at least three PRs to make Novu better.',
    date: 'April 2022',
    count: 1,
    minStars: 3,
  },
  {
    iconName: 'bronzeMedal',
    title: 'Bronze Medal',
    tooltip: 'This medal is a great start of your relationship with the Novu project.',
    date: 'April 2022',
    count: 1,
    minStars: 1,
  },
];

const findDates = (pulls) =>
  pulls
    .slice(0)
    .reverse()
    .reduce(
      (all, current) => {
        if (all.counter === 1 || all.counter === 3 || all.counter === 7) {
          all.values[all.counter] = moment(current.merged_at).format('LL');
        }
        all.counter += 1;
        return all;
      },
      { counter: 1, values: {} }
    );

const Achievements = ({
  contributor: { name, github, pulls, totalPulls, images },
  url,
  additionalAchievements,
}) => {
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
          gatsbyImageData(width: 160)
        }
      }
      contributorOfTheYear: file(
        relativePath: { eq: "contributors/achievements/contributor-of-the-year.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 160)
        }
      }
      contributorOfTheMonth: file(
        relativePath: { eq: "contributors/achievements/contributor-of-the-month.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 160)
        }
      }
      reporterStar: file(relativePath: { eq: "contributors/achievements/reporter-star.png" }) {
        childImageSharp {
          gatsbyImageData(width: 160)
        }
      }
      teamPlayer: file(relativePath: { eq: "contributors/achievements/team-player.png" }) {
        childImageSharp {
          gatsbyImageData(width: 160)
        }
      }
      goldMedal: file(relativePath: { eq: "contributors/achievements/gold-medal.png" }) {
        childImageSharp {
          gatsbyImageData(width: 134)
        }
      }
      silverMedal: file(relativePath: { eq: "contributors/achievements/silver-medal.png" }) {
        childImageSharp {
          gatsbyImageData(width: 134)
        }
      }
      bronzeMedal: file(relativePath: { eq: "contributors/achievements/bronze-medal.png" }) {
        childImageSharp {
          gatsbyImageData(width: 134)
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
    <section className="achievements md:mt-20 sm:mt-16">
      <Heading className="leading-denser md:text-[30px]" tag="h2" size="md" theme="white">
        Achievements
      </Heading>
      <p className="mt-4 text-lg font-light text-gray-10 md:text-base">
        {name || github} has made <strong>{pulls.length} pull requests.</strong>
        <br />
        Thank you for helping growing Novu!
      </p>

      <div className="mt-10 grid grid-cols-4 gap-x-8 gap-y-10 md:gap-x-7 sm:grid-cols-2 sm:gap-x-5">
        {additionalAchievements &&
          additionalAchievements.map(({ title, date, achievement: { badge, tooltip } }, index) => (
            <div className="flex flex-col items-center" key={index} data-tip={tooltip}>
              {tooltip && <Tooltip text={tooltip} />}

              <GatsbyImage
                className="lg:h-[134px]"
                imgClassName="lg:!w-auto lg:!left-1/2 lg:!-translate-x-1/2"
                image={getImage(badge.localFile)}
                alt={`${badge?.altText} icon`}
                loading="eager"
                aria-hidden
              />

              <div className="mt-3.5 space-y-1.5 text-center">
                <h4 className={clsx('text-base leading-tight')}>{title}</h4>
                <span className="text-sm leading-tight text-gray-6">{date}</span>
              </div>
            </div>
          ))}

        {ACHIEVEMENTS.filter(({ minStars }) => minStars <= totalPulls).map(
          ({ iconName, title, tooltip, minStars }, index) => {
            const icon = achievementIcons[iconName];

            return (
              <div className="flex flex-col items-center" key={index} data-tip={tooltip}>
                {tooltip && <Tooltip text={tooltip} />}

                <GatsbyImage
                  className="lg:h-[134px]"
                  imgClassName="lg:!w-auto lg:!left-1/2 lg:!-translate-x-1/2"
                  image={getImage(icon.active)}
                  alt={`${title} icon`}
                  loading="eager"
                  aria-hidden
                />

                <div className="mt-3.5 space-y-1.5 text-center">
                  <h4 className={clsx('text-base leading-tight')}>{title}</h4>
                  <span className="text-sm leading-tight text-gray-6">
                    {findDates(pulls).values[minStars]}
                  </span>
                </div>
              </div>
            );
          }
        )}
      </div>

      <div className="mt-9 flex space-x-10">
        <Share type={SHARE_TYPES.social} imageUrl={images.ogImage} url={url} />
        <Share type={SHARE_TYPES.embed} imageUrl={images.embedImage} url={url} />
      </div>
    </section>
  );
};

Achievements.propTypes = {
  contributor: PropTypes.shape({
    name: PropTypes.string,
    github: PropTypes.string.isRequired,
    pulls: PropTypes.arrayOf(
      PropTypes.shape({
        merged_at: PropTypes.string.isRequired,
      })
    ).isRequired,
    totalPulls: PropTypes.number,
    images: PropTypes.shape({
      ogImage: PropTypes.string.isRequired,
      embedImage: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  url: PropTypes.string.isRequired,
};

export default Achievements;
