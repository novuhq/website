import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

const NotificationInbox = ({ title, description, button }) => (
  <section className="text-with-picture safe-paddings mt-[168px] lg:mt-[120px] md:mt-[100px] sm:mt-20">
    <div className="container-lg">
      <div className="flex items-center justify-center sm:flex-col">
        <div className="relative shrink-0 sm:order-last sm:mt-6">
          {/* 628x659 */}
          <StaticImage
            className="z-10 left-[3.5%] lg:w-[500px] lg:h-auto md:w-[380px] sm:w-full sm:max-w-[628px] sm:left-0"
            src="./images/inbox.png"
            alt=""
            width={628}
            height={659}
          />
          <StaticImage
            className="!absolute z-10 w-[76.7516%] h-[31.4112%] top-[-13.8088%] left-[-5.2548%]"
            src="./images/dots.png"
            alt=""
            width={482}
            height={207}
            aria-hidden
          />
          <div
            className="absolute z-0 bg-[radial-gradient(50%_50%_at_50%_50%,#314479_0%,rgba(49,68,121,0)_100%)] w-[39.8089%] h-[68.2852%] rotate-90 top-[-23.3687%] left-[13.3757%] blur-[22px]"
            aria-hidden
          />
          <div
            className="absolute z-0 bg-[radial-gradient(50%_50%_at_50%_50%,#1C2D5E_0%,rgba(18,28,59,0)_100%)] w-[76.1146%] h-[91.9575%] -rotate-45 top-[-23.3687%] left-[4.5523%]"
            aria-hidden
          />
          <div
            className="absolute z-0 bg-[radial-gradient(50%_50%_at_50%_50%,#121C3B_16.51%,rgba(18,28,59,0)_100%)] w-[131.8471%] h-[154.7799%] -rotate-45 top-[-44.006%] left-[-17.5159%]"
            aria-hidden
          />
        </div>
        <div className="pl-[140px] mb-7 xl:pl-28 md:pl-18 sm:pl-0 sm:mb-6 sm:text-center">
          <Heading
            className="font-medium leading-denser tracking-snug lg:text-5xl md:text-[32px] sm:text-3xl"
            tag="h2"
            size="xl"
          >
            {title}
          </Heading>
          <p className="mt-3 text-[17px] leading-snug md:text-sm font-book">{description}</p>
          {button && (
            <Button
              className="h-14 px-6 text-sm min-w-[142px] mt-7 md:mt-5"
              theme="gray-outline"
              to={button.link}
            >
              {button.label}
            </Button>
          )}
        </div>
      </div>
    </div>
  </section>
);

NotificationInbox.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.shape({
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
};

NotificationInbox.defaultProps = {
  button: null,
};

export default NotificationInbox;
