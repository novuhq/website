import React, { useState } from 'react';

import Button from 'components/shared/button';
import Modal from 'components/shared/modal';
import ProductHuntBadge from 'components/shared/product-hunt-badge';
import LINKS from 'constants/links';
import CloseIcon from 'icons/close.inline.svg';

import blobImage from './images/blob.jpg';

const VIDEO_SOURCES = [
  {
    src: '/videos/cli-demo.hevc.mp4',
    type: 'video/mp4; codecs="hvc1"',
  },
  {
    src: '/videos/cli-demo.webm',
    type: 'video/webm; codecs="vp9"',
  },
];

const Connect = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleOpenVideoModal = () => setIsVideoModalOpen(true);
  const handleCloseVideoModal = () => setIsVideoModalOpen(false);

  return (
    <section className="connect safe-paddings overflow-hidden pb-[110px] pt-[140px] lg:pb-[90px] lg:pt-28 md:pb-[80px] md:pt-24 sm:pb-16 sm:pt-[104px]">
      <div className="mx-auto flex w-full max-w-[1170px] items-center justify-between gap-x-20 xl:px-8 lg:max-w-[1032px] lg:gap-x-10 md:max-w-xl md:flex-col md:justify-start md:px-7 md:text-center sm:px-5">
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
                Connect AI agents to every channel your customer uses
              </h2>
              <p className="text-base font-book leading-normal tracking-snug text-gray-8">
                Plug Claude Managed Agents into Slack, Email, Discord, and more. Start from
                ready-made templates and launch agent workflows for product updates, approvals,
                alerts, and support in minutes.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-7 xs:w-full xs:flex-col xs:items-stretch xs:gap-3">
            <Button
              className="!px-5 sm:h-10 sm:text-xs"
              size="sm"
              theme="white-filled"
              to={LINKS.connect.to}
            >
              Explore Novu Connect
            </Button>
            <Button
              className="sm:h-10 sm:px-5 sm:text-xs"
              data-testid="connect-video-button"
              size="sm"
              theme="gray-outline"
              type="button"
              onClick={handleOpenVideoModal}
            >
              Watch 30 sec video
            </Button>
          </div>
          <ProductHuntBadge
            linkProps={{
              'aria-label': 'Featured on Product Hunt',
            }}
          />
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

      <Modal
        className="!max-w-[1216px] !rounded-xl !border !border-white/10 !bg-black !p-0"
        theme="gradient-with-blur"
        isOpen={isVideoModalOpen}
        closeModal={handleCloseVideoModal}
        contentLabel="Novu Connect CLI demo video"
      >
        <button
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur transition-colors duration-200 hover:bg-white hover:text-black"
          type="button"
          aria-label="Close video"
          onClick={handleCloseVideoModal}
        >
          <CloseIcon className="h-3 w-3" />
        </button>
        <video
          className="mx-auto block h-auto max-h-[calc(100vh-56px)] max-w-full rounded-xl bg-black object-contain"
          data-testid="connect-video"
          height={742}
          preload="metadata"
          width={1216}
          autoPlay
          controls
          muted
          playsInline
        >
          {VIDEO_SOURCES.map(({ src, type }) => (
            <source key={src} src={src} type={type} />
          ))}
        </video>
      </Modal>
    </section>
  );
};

export default Connect;
