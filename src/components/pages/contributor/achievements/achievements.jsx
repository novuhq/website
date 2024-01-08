import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Tooltip from 'components/shared/tooltip';
import ACHIEVEMENTS from 'constants/contributors.mjs';

import bronzeMedalIconDisabled from './images/bronze-medal.png';
import contributorOfTheMonthIconDisabled from './images/contributor-of-the-month.png';
import contributorOfTheYearIconDisabled from './images/contributor-of-the-year.png';
import goldMedalIconDisabled from './images/gold-medal.png';
import reporterStarIconDisabled from './images/reporter-star.png';
import rockStarIconDisabled from './images/rock-star.png';
import silverMedalIconDisabled from './images/silver-medal.png';
import teamPlayerIconDisabled from './images/team-player.png';
import { Share, SHARE_TYPES } from './share';

import './achievements.css';

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
        Thank you for helping Novu grow!
      </p>

      <div className="mt-10 grid grid-cols-4 gap-x-8 gap-y-10 md:gap-x-7 sm:grid-cols-2 sm:gap-x-5">
        {additionalAchievements &&
          additionalAchievements.map(({ achievementDate, achievement }, index) => {
            const {
              title,
              achievement: { badge, tooltip },
            } = achievement;

            return (
              <div
                className="flex flex-col items-center"
                key={index}
                data-tooltip-id={`additional-${index}`}
                data-tooltip-content={tooltip}
              >
                {tooltip && <Tooltip className="max-w-[248px]" id={`additional-${index}`} />}

                <GatsbyImage
                  className="lg:h-[134px]"
                  imgClassName="lg:!w-auto lg:!left-1/2 lg:!-translate-x-1/2"
                  image={getImage(badge.localFile)}
                  alt={`${badge?.altText} icon`}
                  loading="eager"
                  aria-hidden
                />

                <div className="mt-3.5 space-y-1.5 text-center">
                  <h4 className="text-base leading-tight">{title}</h4>
                  <span className="text-sm leading-tight text-gray-6">{achievementDate}</span>
                </div>
              </div>
            );
          })}

        {ACHIEVEMENTS.filter(({ minStars }) => minStars <= totalPulls).map(
          ({ iconName, title, tooltip, minStars }, index) => {
            const icon = achievementIcons[iconName];

            return (
              <div
                className="flex flex-col items-center"
                key={index}
                data-tooltip-id={`tooltip-${index}`}
                data-tooltip-content={tooltip}
              >
                {tooltip && (
                  <Tooltip className="max-w-[248px]" theme="gray" id={`tooltip-${index}`} />
                )}

                <GatsbyImage
                  className="lg:h-[134px]"
                  imgClassName="lg:!w-auto lg:!left-1/2 lg:!-translate-x-1/2"
                  image={getImage(icon.active)}
                  alt={`${title} icon`}
                  loading="eager"
                  aria-hidden
                />

                <div className="mt-3.5 space-y-1.5 text-center">
                  <h4 className="text-base leading-tight">{title}</h4>
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
