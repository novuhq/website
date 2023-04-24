import { AnimatePresence, m, LazyMotion, domAnimation } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { useCookie } from 'react-use';

import Button from 'components/shared/button';
import Link from 'components/shared/link';
import Modal from 'components/shared/modal';

import Settings from './settings';

const TEXT = 'This site uses cookies to measure and improve your experience.';

const COOKIE_KEY = 'user-cookies';
const COOKIE_VALUE_TRUE = 'accepted';
const COOKIE_VALUE_NON_PRODUCT_ANALYTICS = 'accepted-non-pruduct-analytics';
const COOKIE_VALUE_FALSE = 'declined';

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
    }

    if (cookieValue === COOKIE_VALUE_NON_PRODUCT_ANALYTICS) {
      window?.analytics?.track('Cookie Banner', {
        disableClientPersistence: true,
      });
    }
  }, [cookieValue]);

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {isOpen && (
          <>
            <m.div
              className="fixed bottom-14 left-8 z-40 max-w-[354px] rounded-xl bg-gradient-to-b from-gray-3 to-gray-2 px-6 py-5 md:bottom-8 sm:bottom-0 sm:left-0 sm:w-full sm:max-w-none sm:rounded-none sm:px-4 sm:py-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="text-sm leading-snug text-gray-8 sm:text-center">{TEXT}</p>

              <div className="mt-5 flex items-center justify-between sm:justify-center sm:gap-x-5">
                <Link tag="button" theme="white-underline" size="xs" onClick={handleOpenModal}>
                  Manage
                </Link>
                <div className="flex gap-x-3">
                  <Button theme="gray-outline" size="xs" onClick={handleDeclineClick}>
                    Decline
                  </Button>
                  <Button theme="primary" size="xs" onClick={handleAcceptClick}>
                    Accept
                  </Button>
                </div>
              </div>
            </m.div>
            <Modal
              className="!max-w-[464px] px-10 py-8 sm:px-4"
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
