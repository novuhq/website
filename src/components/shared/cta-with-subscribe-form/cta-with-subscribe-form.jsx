import clsx from 'clsx';
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useLocation } from 'react-use';
import useCookie from 'react-use/lib/useCookie';

import Button from 'components/shared/button';
import { FORM_ID, UTM_PARAMS } from 'constants/forms';
import CheckIcon from 'images/check.inline.svg';

import codeDots from './images/code-dots.svg';
import LoadingIcon from './images/loading.inline.svg';

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

const SubscribeForm = ({
  className = null,
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
      const utms = {};

      UTM_PARAMS.forEach((param) => {
        try {
          const paramValue = sessionStorage.getItem(param);

          if (paramValue) {
            utms[param] = paramValue;
          }
        } catch (err) {
          // Do nothing
        }
      });

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
                ...Object.entries(utms).map(([name, value]) => ({
                  objectTypeId: '0-1',
                  name,
                  value,
                })),
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
        'autocomplete relative w-full rounded-md border border-transparent bg-black bg-clip-border shadow-[#C2B2FF_0_0_6px_0]',
        'before:absolute before:-inset-0.5 before:-z-10 before:rounded-[inherit] before:bg-[linear-gradient(0deg,rgba(255,255,255,0.5),rgba(255,255,255,0.5)),radial-gradient(30.74%_144.53%_at_59.44%_100%,#FFFFFF_2.5%,#A7BBFF_21.5%,rgba(183,165,255,0.2)_100%)]',
        alignment === 'center' && 'mx-auto',
        alignment === 'left' && 'md:mx-auto',
        className
      )}
      noValidate
      onSubmit={handleSubmit}
    >
      <LazyMotion features={domAnimation}>
        <input
          className="remove-autocomplete-styles h-full w-full appearance-none whitespace-nowrap rounded border-none bg-transparent pl-5 pr-32 text-[16px] !leading-none text-white placeholder-white outline-none sm:pl-4 sm:pr-24 sm:text-base"
          name="email"
          type="email"
          placeholder={placeholder}
          autoComplete="email"
          value={value}
          readOnly={isStateLoadingOrSuccess}
          onChange={handleInputChange}
        />
        <div
          className="absolute -top-0.5 right-px h-[3px] w-[144px] bg-[linear-gradient(91.15deg,rgba(205,204,255,0)_2.67%,rgba(205,204,255,0.76156)_21.19%,#CDCCFF_60.95%,rgba(205,204,255,0)_93.27%)] opacity-70 mix-blend-plus-lighter blur-[2px]"
          aria-hidden
        />
        <div
          className="absolute -bottom-[3px] left-[155px] h-[3px] w-[144px] before:absolute before:inset-0 before:bg-[linear-gradient(91.15deg,rgba(205,204,255,0)_2.67%,rgba(205,204,255,0.76156)_21.19%,#CDCCFF_60.95%,rgba(205,204,255,0)_93.27%)] before:opacity-60 before:blur-[5px] after:absolute after:inset-0 after:bg-[linear-gradient(91.15deg,rgba(205,204,255,0)_2.67%,rgba(205,204,255,0.76156)_21.19%,#CDCCFF_60.95%,rgba(205,204,255,0)_93.27%)] after:opacity-50 after:mix-blend-plus-lighter after:blur-[2px]"
          aria-hidden
        />
        <img
          className="pointer-events-none absolute -bottom-[105px] -left-[69px] z-0 max-w-none"
          src={codeDots}
          width={482}
          height={206}
          alt=""
          loading="lazy"
          aria-hidden
        />

        {errorMessage && (
          <AnimatePresence>
            <m.span
              className={clsx(
                'absolute -bottom-2 w-full max-w-[330px] translate-y-full text-sm text-gray-8',
                {
                  'left-1/2 -translate-x-1/2 text-center': alignment === 'center',
                  'left-5 md:left-1/2 md:-translate-x-1/2 md:text-center': alignment === 'left',
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
          className={clsx('absolute right-1.5 top-1/2 !h-9 -translate-y-1/2 sm:!px-2', {
            'w-[108px] sm:w-[60px]': formState === STATES.LOADING,
            'w-10 px-0': formState === STATES.SUCCESS,
            'pointer-events-none': isStateLoadingOrSuccess,
          })}
          size="xs"
          theme="white-filled"
          name="subscribe"
          type="submit"
          disabled={isStateLoadingOrSuccess}
        >
          <AnimatePresence>
            {(formState === STATES.DEFAULT || formState === STATES.ERROR) && (
              <m.span
                className="text-xs"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={appearAndExitAnimationVariants}
              >
                Subscribe
              </m.span>
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
  placeholder: PropTypes.string,
  alignment: PropTypes.oneOf(['center', 'left']),
};

SubscribeForm.defaultProps = {
  className: null,
  placeholder: 'Your email...',
  alignment: 'center',
};

export default SubscribeForm;
