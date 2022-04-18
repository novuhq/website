import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

import Button from 'components/shared/button';

import CheckIcon from './images/check.inline.svg';
import LoadingIcon from './images/loading.inline.svg';

const STATES = {
  DEFAULT: 'default',
  LOADING: 'loading',
  ERROR: 'error',
  SUCCESS: 'success',
};

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

const Form = () => {
  const [value, setValue] = useState('');
  const [formState, setFormState] = useState(STATES.DEFAULT);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = ({ currentTarget: { value } }) => setValue(value.trim());

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!value) {
      setErrorMessage('Please enter your email');
    } else if (!emailRegexp.test(value)) {
      setErrorMessage('Please enter a valid email');
    } else {
      setErrorMessage('');
      setFormState(STATES.LOADING);

      const loadingAnimationStartedTime = Date.now();
      // TODO: is test api, replace with real api
      fetch('https://reqbin.com/echo/post/json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ value }),
      })
        .then((response) => {
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
        })
        .catch(() => {
          doNowOrAfterSomeTime(() => {
            setFormState(STATES.ERROR);
            setErrorMessage(
              'Oops! Something went wrong.  Please, try to submit the form again or reload the page.'
            );
          }, loadingAnimationStartedTime);
        });
    }
  };

  const isStateLoadingOrSuccess = formState === STATES.LOADING || formState === STATES.SUCCESS;

  return (
    <form
      className="autocomplete input-border-gradient relative mx-auto mt-10 h-16 w-full max-w-[464px] rounded-md bg-black"
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        className="remove-autocomplete-styles h-full w-full appearance-none whitespace-nowrap rounded border-none bg-transparent pr-32 pl-5 text-lg !leading-none text-white placeholder-white outline-none"
        name="email"
        type="email"
        placeholder="Your email..."
        autoComplete="email"
        value={value}
        readOnly={isStateLoadingOrSuccess}
        onChange={handleInputChange}
      />

      <AnimatePresence>
        {errorMessage && (
          <motion.span
            className="absolute left-1/2 -bottom-2 w-full max-w-[330px] -translate-x-1/2 translate-y-full text-center text-sm text-gray-8"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={appearAndExitAnimationVariants}
          >
            {errorMessage}
          </motion.span>
        )}
      </AnimatePresence>

      <Button
        className={clsx('absolute top-1/2 right-3 -translate-y-1/2', {
          'w-[108px]': formState === STATES.LOADING,
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
            <motion.span
              initial="initial"
              animate="animate"
              exit="exit"
              variants={appearAndExitAnimationVariants}
            >
              subscribe
            </motion.span>
          )}
          {formState === STATES.LOADING && (
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={appearAndExitAnimationVariants}
            >
              <LoadingIcon className="h-6 w-6 animate-spin" />
            </motion.div>
          )}
          {formState === STATES.SUCCESS && (
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={appearAndExitAnimationVariants}
            >
              <CheckIcon class="h-3 w-4" />
            </motion.div>
          )}
        </AnimatePresence>
      </Button>
    </form>
  );
};

export default Form;
