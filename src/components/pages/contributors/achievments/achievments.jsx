import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { ACHIEVEMENT_PERSONAL, ACHIEVEMENT_MEDALS } from './constants/data';
import Item from './item';

const personalIconClassNames = '-mx-5 -my-4 h-[216px] w-[216px] flex-shrink-0';
const medalIconClassNames = '-mx-5 -my-2.5 h-[244px] w-[216px] flex-shrink-0';

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
    <section className="achievments-personal safe-paddings bg-gray-2 py-40">
      <div className="container-lg grid grid-cols-12 gap-x-8 md:flex md:flex-col">
        {ACHIEVEMENT_PERSONAL.map(({ iconName, ...props }, index) => {
          const icon = icons[iconName];
          return <Item icon={icon} {...props} key={index} />;
        })}
      </div>
    </section>

    <section className="achievments-medals safe-paddings py-40">
      <div className="container-lg grid grid-cols-12 gap-x-8 md:flex md:flex-col">
        {ACHIEVEMENT_MEDALS.map(({ iconName, ...props }, index) => {
          const icon = icons[iconName];
          return <Item icon={icon} {...props} key={index} theme="gray" />;
        })}
      </div>
    </section>
  </>
);

export default Achievments;
