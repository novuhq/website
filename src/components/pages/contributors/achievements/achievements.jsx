import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { ACHIEVEMENT_MEDALS } from './constants/data';
// import { ACHIEVEMENT_PERSONAL, ACHIEVEMENT_MEDALS } from './constants/data';
import Item from './item';

// const personalIconClassNames =
//   'h-[176px] w-[176px] lg:h-[134px] lg:w-[134px] flex-shrink-0 rounded-full shadow-[0px_5px_20px_#000000] mr-34 lg:mr-7 md:h-[102px] md:w-[102px] md:mr-5 sm:mr-0';
const medalIconClassNames =
  'h-[210px] w-[176px] lg:h-[160px] lg:w-[134px] flex-shrink-0 mr-34 lg:mr-7 md:h-[122px] md:w-[102px] md:mr-5 sm:mr-0';

const Achievements = ({ list }) => {
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
          gatsbyImageData(width: 176, height: 176)
        }
      }
      contributorOfTheYear: file(
        relativePath: { eq: "contributors/achievements/contributor-of-the-year.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 176, height: 176)
        }
      }
      contributorOfTheMonth: file(
        relativePath: { eq: "contributors/achievements/contributor-of-the-month.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 176, height: 176)
        }
      }
      reporterStar: file(relativePath: { eq: "contributors/achievements/reporter-star.png" }) {
        childImageSharp {
          gatsbyImageData(width: 176, height: 176)
        }
      }
      teamPlayer: file(relativePath: { eq: "contributors/achievements/team-player.png" }) {
        childImageSharp {
          gatsbyImageData(width: 176, height: 176)
        }
      }
      goldMedal: file(relativePath: { eq: "contributors/achievements/gold-medal.png" }) {
        childImageSharp {
          gatsbyImageData(width: 176, height: 210)
        }
      }
      silverMedal: file(relativePath: { eq: "contributors/achievements/silver-medal.png" }) {
        childImageSharp {
          gatsbyImageData(width: 176, height: 210)
        }
      }
      bronzeMedal: file(relativePath: { eq: "contributors/achievements/bronze-medal.png" }) {
        childImageSharp {
          gatsbyImageData(width: 176, height: 210)
        }
      }
    }
  `);

  const achievementIcons = {
    rockStar,
    contributorOfTheYear,
    contributorOfTheMonth,
    reporterStar,
    teamPlayer,
    goldMedal,
    silverMedal,
    bronzeMedal,
  };
  return (
    <>
      {/* <section className="achievements-personal safe-paddings bg-gray-2 py-40 lg:py-36 md:py-20 sm:py-16"> */}
      {/*   <div className="container-lg grid grid-cols-12 gap-x-8 lg:gap-x-7 md:flex md:flex-col md:gap-x-0"> */}
      {/*     {ACHIEVEMENT_PERSONAL.map(({ iconName, ...props }, index) => { */}
      {/*       const icon = achievementIcons[iconName]; */}
      {/*       return ( */}
      {/*         <Item imageClassNames={personalIconClassNames} icon={icon} key={index} {...props} /> */}
      {/*       ); */}
      {/*     })} */}
      {/*   </div> */}
      {/* </section> */}

      <section className="achievements-medals safe-paddings py-40 lg:py-36 md:py-20 sm:py-16">
        <div className="container-lg grid grid-cols-12 gap-x-8 lg:gap-x-7 md:flex md:flex-col md:gap-x-0">
          {ACHIEVEMENT_MEDALS.map(({ iconName, ...props }, index) => {
            const icon = achievementIcons[iconName];
            return (
              <Item
                list={list}
                imageClassNames={medalIconClassNames}
                icon={icon}
                theme="gray"
                key={index}
                {...props}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Achievements;
