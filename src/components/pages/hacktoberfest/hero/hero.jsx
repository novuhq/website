import React, { useState } from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

import Timer from '../timer/timer';

import Modal from './Modal';

const PAGE_TITLE = 'We are happy to take part in<br /><span>Hacktoberfest 2023</span>';
const BUTTON_TEXT = 'START HERE 🎉';
const BUTTON_URL = 'https://github.com/novuhq/novu/labels/Hacktoberfest';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const handleModal = () => {
  //   setIsOpen(true)
  // }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
      <div className="container-lg mt-14 flex flex-row justify-center gap-18 md:mt-10 sm:mt-9">
        <Button
          size="sm"
          theme="blue-gradient"
          to={BUTTON_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {BUTTON_TEXT}
        </Button>
        <Button
          size="sm"
          theme="blue-gradient"
          target="_blank"
          rel="noopener noreferrer"
          onClick={openModal}
        >
          Contribution guide
        </Button>
      </div>
      <Timer />
      {isModalOpen && <Modal isOpen={openModal} onClose={closeModal} />}
      {/* <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Modal Content</h2>
        <p>This is your modal content.</p>
        <p>


        </p>
      </Modal> */}
    </section>
  );
};
export default Hero;
