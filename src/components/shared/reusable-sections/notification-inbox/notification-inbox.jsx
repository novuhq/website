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
            className="left-[3.5%] z-10 lg:h-auto lg:w-[500px] md:w-[380px] sm:left-0 sm:w-full sm:max-w-[628px]"
            src="./images/inbox.png"
            alt=""
            width={628}
            height={659}
          />
          <StaticImage
            className="pointer-events-none !absolute left-[-5.2548%] top-[-13.8088%] z-10 h-[31.4112%] w-[76.7516%]"
            src="./images/dots.png"
            alt=""
            width={482}
            height={207}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-[13.3757%] top-[-23.3687%] z-0 h-[68.2852%] w-[39.8089%] rotate-90 bg-[radial-gradient(50%_50%_at_50%_50%,#314479_0%,rgba(49,68,121,0)_100%)] blur-[22px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-[4.5523%] top-[-23.3687%] z-0 h-[91.9575%] w-[76.1146%] -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,#1C2D5E_0%,rgba(18,28,59,0)_100%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-[-17.5159%] top-[-44.006%] z-0 h-[154.7799%] w-[131.8471%] -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,#121C3B_16.51%,rgba(18,28,59,0)_100%)]"
            aria-hidden
          />
        </div>
        <div className="mb-7 pl-[140px] xl:pl-28 md:pl-18 sm:mb-6 sm:pl-0 sm:text-center">
          <Heading
            className="font-medium leading-denser tracking-snug lg:text-5xl md:text-[32px] sm:text-3xl"
            tag="h2"
            size="xl"
          >
            {title}
          </Heading>
          <p className="mt-3 text-lg font-book leading-snug md:text-sm">{description}</p>
          {button && (
            <Button
              className="mt-7 h-12 min-w-[142px] px-6 text-sm md:mt-5"
              theme="gray-outline"
              to={button.link}
              rel={button.rel}
              target={button.target}
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
    rel: PropTypes.string,
    target: PropTypes.string,
  }),
};

NotificationInbox.defaultProps = {
  button: null,
};

export default NotificationInbox;
