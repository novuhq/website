import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Button from 'components/shared/button';

import CheckIcon from './images/check.inline.svg';

/* TODO: find a way to simplify the styles for applying a gradient border for the input field */
const inputBeforeClassNames =
  'before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:-z-10 before:-m-0.5 before:rounded-[inherit] before:bg-input-gradient';

const inputAfterClassNames =
  'after:absolute after:left-0 after:top-0 after:right-0 after:bottom-0 after:-z-20 after:-m-0.5 after:rounded-[inherit] after:bg-input-gradient after:blur-sm';

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

const SubscriptionForm = ({ className }) => {
  const [email, setEmail] = useState('');
  const [formState, setFormState] = useState('default');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => setEmail(event.currentTarget.value.trim());

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email) {
      setErrorMessage('This field is required');
    } else if (!emailRegexp.test(email)) {
      setErrorMessage('Please enter a valid email');
    } else {
      setErrorMessage('');
      setFormState('loading');

      const loadingAnimationStartedTime = Date.now();

      fetch('#', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ email }),
      })
        .then((response) => {
          if (response.ok) {
            doNowOrAfterSomeTime(() => {
              setFormState('success');
              setEmail('Thanks for subscribing!');

              setTimeout(() => {
                setFormState('default');
                setEmail('');
              }, 2000);
            }, loadingAnimationStartedTime);
          } else {
            doNowOrAfterSomeTime(() => {
              setFormState('error');
              setErrorMessage('Oops! Something went wrong.');
            }, loadingAnimationStartedTime);
          }
        })
        .catch(() => {
          doNowOrAfterSomeTime(() => {
            setFormState('error');
            setErrorMessage('Oops! Something went wrong.');
          }, loadingAnimationStartedTime);
        });
    }
  };

  return (
    <form
      className={clsx(
        'input relative flex h-16 w-full items-center justify-between rounded-md border border-transparent bg-black bg-clip-border',
        inputBeforeClassNames,
        inputAfterClassNames,
        className
      )}
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        className={clsx(
          'remove-autocomplete-styles input-text h-full w-full appearance-none whitespace-nowrap rounded-md border border-black bg-black pr-[132px] pl-5 font-mono text-lg !leading-none text-white placeholder-white outline-none'
        )}
        name="email"
        type="email"
        placeholder="Your email..."
        autoComplete="email"
        value={email}
        readOnly={formState !== 'default'}
        onChange={handleInputChange}
      />

      {errorMessage && (
        <span
          className="absolute left-1/2 -bottom-5 w-full translate-y-2/3 -translate-x-1/2 text-center text-sm text-gray-8"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={appearAndExitAnimationVariants}
        >
          {errorMessage}
        </span>
      )}

      {formState === 'default' && (
        <div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={appearAndExitAnimationVariants}
        >
          <Button
            className="absolute top-1/2 right-3 -translate-y-1/2"
            size="xs"
            theme="white-filled"
            name="subscribe"
            type="submit"
          >
            <span className="">subscribe</span>
          </Button>
        </div>
      )}

      {formState === 'loading' && (
        <div className="absolute top-1/2 right-3 flex h-10 w-[107px] -translate-y-1/2 items-center justify-center rounded bg-white ">
          <svg
            className=" animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <circle cx="13" cy="13" r="12" stroke="#E6E6E6" strokeWidth="2" />
            <path
              d="M25 13C25 6.37258 19.6274 1 13 1"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}

      {(formState === 'success' || formState === 'error') && (
        <div
          className="relative "
          initial="initial"
          animate="animate"
          exit="exit"
          variants={appearAndExitAnimationVariants}
          aria-hidden
        >
          {formState === 'success' && (
            <div className="absolute top-1/2 right-3 flex h-[40px] w-[40px] -translate-y-1/2 items-center justify-center rounded-md bg-white">
              <CheckIcon class="h-3 w-4" />
            </div>
          )}
          {formState === 'error' && (
            <Button
              className="absolute top-1/2 right-3 -translate-y-1/2"
              size="xs"
              theme="white-filled"
              name="subscribe"
              type="submit"
            >
              <span className="">subscribe</span>
            </Button>
          )}
        </div>
      )}
    </form>
  );
};

SubscriptionForm.propTypes = {
  className: PropTypes.string,
};

SubscriptionForm.defaultProps = {
  className: null,
};

export default SubscriptionForm;
