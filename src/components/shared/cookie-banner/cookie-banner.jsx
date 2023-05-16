import { AnimatePresence, m, LazyMotion, domAnimation } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import useCookie from 'react-use/lib/useCookie';

import Button from 'components/shared/button';
import Link from 'components/shared/link';
import Modal from 'components/shared/modal';
import {
  COOKIE_KEY,
  COOKIE_VALUE_TRUE,
  COOKIE_VALUE_NON_PRODUCT_ANALYTICS,
  COOKIE_VALUE_FALSE,
} from 'constants/cookie';

import Settings from './settings';

const TEXT = 'This site uses cookies to measure and improve your experience.';

const CookieBanner = () => {
  const [cookieValue, updateCookie] = useCookie(COOKIE_KEY);
  const [productAnalyticsValue, setProductAnalyticsValue] = useState(true);

  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAcceptClick = () => {
    setIsOpen(false);

    if (productAnalyticsValue) {
      updateCookie(COOKIE_VALUE_TRUE, { expires: 365 });
    } else {
      updateCookie(COOKIE_VALUE_NON_PRODUCT_ANALYTICS, { expires: 365 });
    }
  };

  const handleDeclineClick = () => {
    setIsOpen(false);
    updateCookie(COOKIE_VALUE_FALSE, { expires: 365 });
  };

  useEffect(() => {
    if (!cookieValue) {
      setIsOpen(true);
    } else if (cookieValue === COOKIE_VALUE_TRUE) {
      window?.analytics?.track('Cookie Banner', { disableClientPersistence: false });
    } else {
      window?.analytics?.track('Cookie Banner', { disableClientPersistence: true });
    }
  }, [cookieValue]);

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {isOpen && (
          <>
            <m.div
              className="fixed bottom-7 left-8 z-40 max-w-[354px] overflow-hidden rounded-[10px] border border-[rgba(255,255,255,0.15)] px-5 py-[18px] before:absolute before:inset-0 before:-z-10 before:bg-[linear-gradient(180deg,rgba(26,26,26,0.4)_0%,rgba(26,26,26,0.28)_100%)] before:backdrop-blur-[15px] md:bottom-8 sm:bottom-0 sm:left-0 sm:w-full sm:max-w-none sm:rounded-none sm:border-b-0 sm:border-l-0 sm:border-r-0 sm:px-4 sm:py-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="text-sm leading-tight text-gray-8 sm:text-center">{TEXT}</p>

              <div className="mt-4 flex items-center justify-between sm:justify-center sm:gap-x-5">
                <Link tag="button" theme="white-underline" size="xxs" onClick={handleOpenModal}>
                  Manage
                </Link>
                <div className="flex gap-x-3">
                  <Button theme="gray-outline" size="xxs" onClick={handleDeclineClick}>
                    Decline
                  </Button>
                  <Button theme="primary" size="xxs" onClick={handleAcceptClick}>
                    Accept
                  </Button>
                </div>
              </div>
            </m.div>
            <Modal
              className="!max-w-[448px] px-8 pb-12 pt-8 sm:px-4"
              theme="gradient-with-blur"
              isOpen={isModalOpen}
              closeModal={handleCloseModal}
            >
              <Settings
                handleCloseModal={handleCloseModal}
                productAnalyticsValue={productAnalyticsValue}
                setProductAnalyticsValue={setProductAnalyticsValue}
              />
            </Modal>
          </>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
};

export default CookieBanner;
