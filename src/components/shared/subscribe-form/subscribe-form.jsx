import clsx from 'clsx';
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useLocation } from 'react-use';
import useCookie from 'react-use/lib/useCookie';

import Button from 'components/shared/button';
import FORM_ID from 'constants/forms';
import CheckIcon from 'images/check.inline.svg';

import LoadingIcon from './images/loading.inline.svg';
import SendIcon from './images/send.inline.svg';

const STATES = {
  DEFAULT: 'default',
  LOADING: 'loading',
  ERROR: 'error',
  SUCCESS: 'success',
};

const API_ENDPOINT = '/api/hubspot';

const emailRegexp =
  // eslint-disable-next-line no-control-regex, no-useless-escape
  /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;

const appearAndExitAnimationVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

function doNowOrAfterSomeTime(callback, loadingAnimationStartedTime) {
  const LOADING_ANIMATION_FULL_DURATION = 2000; // 2000 (loading animation duration) + 200 (loading animation delay) = 2200

  if (Date.now() - loadingAnimationStartedTime > LOADING_ANIMATION_FULL_DURATION) {
    callback();
  } else {
    setTimeout(
      callback,
      LOADING_ANIMATION_FULL_DURATION - (Date.now() - loadingAnimationStartedTime)
    );
  }
}

const THEMES = {
  default: 'before:bg-input-gradient after:bg-input-gradient',
  'pink-red-gradient': 'before:bg-pink-red-gradient after:bg-pink-red-gradient',
};

const SubscribeForm = ({
  className = null,
  theme = 'default',
  alignment = 'center',
  placeholder = 'Your email...',
}) => {
  const [value, setValue] = useState('');
  const [formState, setFormState] = useState(STATES.DEFAULT);
  const [errorMessage, setErrorMessage] = useState('');
  const [hubspotutk] = useCookie('hubspotutk');
  const { href } = useLocation();

  const context = {
    hutk: hubspotutk,
    pageUri: href,
  };

  const handleInputChange = ({ target: { value } }) => setValue(value.trim());

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!value) {
      setErrorMessage('Please enter your email');
    } else if (!emailRegexp.test(value)) {
      setErrorMessage('Please enter a valid email');
    } else {
      setErrorMessage('');
      setFormState(STATES.LOADING);

      const loadingAnimationStartedTime = Date.now();

      try {
        const response = await fetch(API_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            formId: FORM_ID.SUBSCRIBE,
            data: {
              context,
              fields: [
                {
                  objectTypeId: '0-1',
                  name: 'email',
                  value,
                },
              ],
            },
          }),
        });

        if (response.ok) {
          doNowOrAfterSomeTime(() => {
            setFormState(STATES.SUCCESS);
            setValue('Thanks for subscribing!');
          }, loadingAnimationStartedTime);
        } else {
          doNowOrAfterSomeTime(() => {
            setFormState(STATES.ERROR);
            setErrorMessage(
              'Oops! Something went wrong.  Please, try to submit the form again or reload the page.'
            );
          }, loadingAnimationStartedTime);
        }
      } catch (error) {
        doNowOrAfterSomeTime(() => {
          setFormState(STATES.ERROR);
          setErrorMessage(
            'Oops! Something went wrong.  Please, try to submit the form again or reload the page.'
          );
        }, loadingAnimationStartedTime);
      }
    }
  };

  const isStateLoadingOrSuccess = formState === STATES.LOADING || formState === STATES.SUCCESS;

  return (
    <form
      className={clsx(
        'autocomplete relative border border-transparent bg-clip-border rounded-md w-full',
        'before:absolute before:-inset-0.5 before:-z-10 before:rounded-[inherit]',
        'after:absolute after:-inset-px after:-z-20 after:rounded-[inherit] after:blur-sm',
        alignment === 'center' && 'mx-auto',
        alignment === 'left' && 'md:mx-auto',
        THEMES[theme],
        className
      )}
      noValidate
      onSubmit={handleSubmit}
    >
      <LazyMotion features={domAnimation}>
        <input
          className={clsx(
            'remove-autocomplete-styles h-full w-full appearance-none whitespace-nowrap rounded border-none bg-transparent pl-5 text-lg !leading-none text-white placeholder-white outline-none sm:pr-24 sm:text-base',
            {
              'pr-32': theme === 'default',
              'pr-36': theme === 'pink-red-gradient',
            }
          )}
          name="email"
          type="email"
          placeholder={placeholder}
          autoComplete="email"
          value={value}
          readOnly={isStateLoadingOrSuccess}
          onChange={handleInputChange}
        />

        {errorMessage && (
          <AnimatePresence>
            <m.span
              className={clsx(
                'absolute -bottom-2 w-full max-w-[330px] translate-y-full text-sm text-gray-8',
                {
                  'text-center left-1/2 -translate-x-1/2': alignment === 'center',
                  'left-5 md:text-center md:left-1/2 md:-translate-x-1/2': alignment === 'left',
                }
              )}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={appearAndExitAnimationVariants}
            >
              {errorMessage}
            </m.span>
          </AnimatePresence>
        )}

        <Button
          className={clsx('absolute top-1/2 -translate-y-1/2', {
            'w-[108px]': formState === STATES.LOADING,
            'w-10 px-0': formState === STATES.SUCCESS,
            'pointer-events-none': isStateLoadingOrSuccess,
            'right-3': theme === 'default',
            'right-2': theme === 'pink-red-gradient',
          })}
          size="xs"
          theme="white-filled"
          name="subscribe"
          type="submit"
          disabled={isStateLoadingOrSuccess}
        >
          <AnimatePresence>
            {(formState === STATES.DEFAULT || formState === STATES.ERROR) && (
              <>
                <m.span
                  className={clsx('sm:sr-only', {
                    'text-xs': theme === 'default',
                    'text-sm': theme === 'pink-red-gradient',
                  })}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={appearAndExitAnimationVariants}
                >
                  Subscribe
                </m.span>
                <m.span
                  className="hidden sm:block"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={appearAndExitAnimationVariants}
                >
                  <SendIcon className="ml-1.5 h-6" aria-hidden />
                </m.span>
              </>
            )}
            {formState === STATES.LOADING && (
              <m.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={appearAndExitAnimationVariants}
              >
                <LoadingIcon className="h-6 w-6 animate-spin" />
              </m.div>
            )}
            {formState === STATES.SUCCESS && (
              <m.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={appearAndExitAnimationVariants}
              >
                <CheckIcon class="h-3 w-4" />
              </m.div>
            )}
          </AnimatePresence>
        </Button>
      </LazyMotion>
    </form>
  );
};

SubscribeForm.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf(Object.keys(THEMES)),
  placeholder: PropTypes.string,
  alignment: PropTypes.oneOf(['center', 'left']),
};

SubscribeForm.defaultProps = {
  className: null,
  theme: 'default',
  placeholder: 'Your email...',
  alignment: 'center',
};

export default SubscribeForm;
