import React, { useState } from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';
import Modal from 'components/shared/modal';
import CloseIcon from 'icons/close.inline.svg';

import Timer from '../timer/timer';

import MODAL_CONTENT from './modal-content';

const PAGE_TITLE = 'We are happy to take part in<br /><span>Hacktoberfest 2023</span>';
const BUTTON_TEXT = 'START HERE 🎉';
const BUTTON_URL = 'https://github.com/novuhq/novu/labels/Hacktoberfest';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => setIsModalOpen(true);
  return (
    <section className="hero safe-paddings pt-36 lg:pt-32 md:pt-28 sm:pt-18">
      <div className="relative flex items-center bg-hero-gradient bg-cover bg-center bg-no-repeat pb-[52px] pt-[42px] md:pb-10 md:pt-8">
        <Heading
          className="text-highlighting-blue-gradient container text-center text-[72px] font-bold leading-denser lg:text-6xl md:text-5xl"
          tag="h1"
          size="3xl"
          theme="white"
          asHTML
        >
          {PAGE_TITLE}
        </Heading>
      </div>
      <div className="container-lg mt-14 flex flex-row justify-center gap-10 md:mt-10 sm:mt-9">
        <Button
          size="sm"
          theme="blue-gradient"
          to={BUTTON_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {BUTTON_TEXT}
        </Button>
        <Button size="sm" theme="gray-outline" onClick={handleOpenModal}>
          Contribution guide
        </Button>
      </div>
      <Timer />

      <Modal
        className="relative max-w-[800px] !p-10 md:max-w-[600px] sm:!p-5"
        isOpen={isModalOpen}
        closeModal={handleCloseModal}
      >
        <CloseIcon
          className="transitions-opacity absolute -right-10 top-5 h-5 cursor-pointer duration-200 hover:opacity-60 sm:right-5 sm:h-3.5"
          onClick={handleCloseModal}
        />
        <div className="content">{MODAL_CONTENT}</div>

        <div className="mt-8 flex justify-center">
          <Button size="sm" theme="blue-gradient" onClick={handleCloseModal}>
            I've read it! 🎉
          </Button>
        </div>
      </Modal>
    </section>
  );
};
export default Hero;
