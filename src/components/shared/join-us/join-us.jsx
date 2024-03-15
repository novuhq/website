import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import LINKS from 'constants/links';
import discordIcon from 'icons/discord.svg';
import githubIcon from 'icons/github.svg';
import xIcon from 'icons/x-com.svg';

const title = 'Join our community';
const socialList = [
  {
    icon: githubIcon,
    name: 'GitHub',
    text: 'Work together on open-source projects.',
    link: LINKS.github.to,
    linkText: 'Contribute',
  },
  {
    icon: xIcon,
    name: 'x.com',
    text: 'Stay tuned for updates and valuable insights.',
    link: LINKS.twitter.to,
    linkText: 'Read us',
  },
  {
    icon: discordIcon,
    name: 'Discord',
    text: 'Participate in real-time conversations.',
    link: LINKS.discord.to,
    linkText: 'Join us',
  },
];

const JoinUs = ({ title, socialList }) => (
  <section className="safe-paddings container-md py-3.5 text-center">
    <Heading className="font-normal leading-tight" size="md" tag="h2" theme="white">
      {title}
    </Heading>
    <ul className="my-16 grid grid-cols-12 gap-x-10 lg:mt-12 md:mt-10 md:gap-6">
      {socialList.map(({ icon, name, text, link, linkText }, index) => (
        <li
          className="group col-span-4 flex flex-col items-center justify-center rounded-[20px] bg-join-us px-8 py-7 md:p-6 sm:col-span-full"
          key={index}
        >
          <img src={icon} width={40} height={40} alt="" loading="lazy" />
          <Heading className="mt-7 font-normal leading-tight" size="sm" tag="h3" theme="white">
            {name}
          </Heading>
          <p className="mt-2 text-base font-light leading-snug text-gray-9">{text}</p>
          <Link
            className="mt-5 text-[13px] font-medium leading-none lg:mt-6 sm:mt-5 sm:text-xs"
            theme="primary-underline"
            size="sm"
            to={link}
            target="_blank"
          >
            {linkText}
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

JoinUs.propTypes = {
  title: PropTypes.string,
  socialList: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      linkText: PropTypes.string.isRequired,
    })
  ),
};

JoinUs.defaultProps = {
  title,
  socialList,
};

export default JoinUs;
