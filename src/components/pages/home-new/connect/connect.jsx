import React from 'react';

import Button from 'components/shared/button';
import LINKS from 'constants/links';

import blobImage from './images/blob.jpg';

const Connect = () => (
  <section className="connect safe-paddings overflow-hidden pb-[168px] pt-[140px] lg:pb-[140px] lg:pt-28 md:pb-[120px] md:pt-24 sm:pb-[104px] sm:pt-20">
    <div className="mx-auto flex w-full max-w-[1170px] items-center justify-between gap-x-20 xl:px-8 lg:gap-x-10 md:max-w-xl md:flex-col md:justify-start md:px-7 md:text-center sm:px-5">
      <div className="relative z-10 flex w-full max-w-[482px] flex-col items-start gap-8 xl:max-w-[442px] lg:max-w-[386px] md:max-w-[482px] md:items-center">
        <div className="flex w-full flex-col items-start gap-5 md:items-center">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 shrink-0 bg-primary-1" aria-hidden />
            <p className="text-sm font-normal uppercase leading-none text-[#CCF7FF]">
              New agent infrastructure
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-[48px] font-medium leading-denser tracking-snug text-white lg:text-5xl md:text-[36px] sm:text-[32px] xs:text-3xl">
              Connect AI agents to every channel your team uses
            </h2>
            <p className="text-base font-book leading-normal tracking-snug text-gray-8 sm:text-[15px]">
              Plug Claude Managed Agents into Slack, Email, Discord, and more. Start from ready-made
              templates and launch agent workflows for product updates, approvals, alerts, and
              support in minutes.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-7 xs:w-full xs:flex-col xs:items-stretch xs:gap-3">
          <Button className="!px-5" size="sm" theme="white-filled" to={LINKS.connect.to}>
            Explore Novu Connect
          </Button>
          <Button size="sm" theme="gray-outline" to={`${LINKS.connect.to}#video`}>
            Watch 30 sec video
          </Button>
        </div>
      </div>
      <img
        className="block h-auto w-[608px] max-w-full shrink-0 xl:w-[560px] lg:w-[500px] md:mt-14 md:w-[480px] sm:mt-6 sm:w-[420px] xs:w-[360px] 2xs:w-[320px]"
        src={blobImage}
        alt=""
        width={608}
        height={608}
        loading="lazy"
        aria-hidden
      />
    </div>
  </section>
);

export default Connect;
