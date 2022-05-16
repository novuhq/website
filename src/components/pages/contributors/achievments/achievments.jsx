import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { ACHIEVEMENT_PERSONAL, ACHIEVEMENT_MEDALS } from './constants/data';
import Item from './item';

const personalIconClassNames =
  'h-[176px] w-[176px] lg:h-[134px] lg:w-[134px] flex-shrink-0 rounded-full shadow-[0px_5px_20px_#000000] mr-34 lg:mr-7 md:h-[102px] md:w-[102px] md:mr-5 sm:mr-0';
const medalIconClassNames =
  'h-[210px] w-[176px] lg:h-[160px] lg:w-[134px] flex-shrink-0 mr-34 lg:mr-7 md:h-[122px] md:w-[102px] md:mr-5 sm:mr-0';

const icons = {
  rockStar: <StaticImage className={personalIconClassNames} src="./images/rock-star.png" alt="" />,
  contributorOfTheYear: (
    <StaticImage
      className={personalIconClassNames}
      src="./images/contributor-of-the-year.png"
      alt=""
    />
  ),
  contributorOfTheMonth: (
    <StaticImage
      className={personalIconClassNames}
      src="./images/contributor-of-the-month.png"
      alt=""
    />
  ),
  reporterStar: (
    <StaticImage className={personalIconClassNames} src="./images/reporter-star.png" alt="" />
  ),
  teamPlayer: (
    <StaticImage className={personalIconClassNames} src="./images/team-player.png" alt="" />
  ),
  goldMedal: <StaticImage className={medalIconClassNames} src="./images/gold-medal.png" alt="" />,
  silverMedal: (
    <StaticImage className={medalIconClassNames} src="./images/silver-medal.png" alt="" />
  ),
  bronzeMedal: (
    <StaticImage className={medalIconClassNames} src="./images/bronze-medal.png" alt="" />
  ),
};

const Achievments = () => (
  <>
    <section className="achievments-personal safe-paddings bg-gray-2 py-40 lg:py-36 md:py-20 sm:py-16">
      <div className="container-lg grid grid-cols-12 gap-x-8 lg:gap-x-7 md:flex md:flex-col md:gap-x-0">
        {ACHIEVEMENT_PERSONAL.map(({ iconName, ...props }, index) => {
          const icon = icons[iconName];
          return <Item icon={icon} {...props} key={index} />;
        })}
      </div>
    </section>

    <section className="achievments-medals safe-paddings py-40 lg:py-36 md:py-20 sm:py-16">
      <div className="container-lg grid grid-cols-12 gap-x-8 lg:gap-x-7 md:flex md:flex-col md:gap-x-0">
        {ACHIEVEMENT_MEDALS.map(({ iconName, ...props }, index) => {
          const icon = icons[iconName];
          return <Item icon={icon} {...props} key={index} theme="gray" />;
        })}
      </div>
    </section>
  </>
);

export default Achievments;
