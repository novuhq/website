import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Button from 'components/shared/button';

import CheckIcon from '/Users/mac3/Documents/Den/work/Novu/novu-gatsby/src/components/shared/subscribe/images/check.svg';
import ErrorIcon from '/Users/mac3/Documents/Den/work/Novu/novu-gatsby/src/components/shared/subscribe/images/error-icon.svg';
import LoadingIcon from '/Users/mac3/Documents/Den/work/Novu/novu-gatsby/src/components/shared/subscribe/images/loading-icon.svg';

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
  const LOADING_ANIMATION_FULL_DURATION = 2200; // 2000 (loading animation duration) + 200 (loading animation delay) = 2200

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

              setTimeout(() => {
                setFormState('default');
                setEmail('');
                setErrorMessage('');
              }, 5000);
            }, loadingAnimationStartedTime);
          }
        })
        .catch(() => {
          doNowOrAfterSomeTime(() => {
            setFormState('error');
            setErrorMessage('Oops! Something went wrong.');

            // setTimeout(() => {
            //   setFormState('default');
            //   setEmail('');
            // }, 5000);
          }, loadingAnimationStartedTime);
        });
    }
  };

  return (
    <form
      className={clsx(
        'input relative flex h-16 w-full items-center justify-between rounded-md border border-transparent bg-black bg-clip-border pl-5 pr-3',
        inputBeforeClassNames,
        inputAfterClassNames,
        className
      )}
      noValidate
      onSubmit={handleSubmit}
    >
      {/* Input */}
      <input
        className={clsx(
          'remove-autocomplete-styles input-text appearance-none whitespace-nowrap rounded-md border border-black bg-black font-mono text-lg !leading-none text-white placeholder-white outline-none'
        )}
        name="email"
        type="email"
        placeholder="Your email..."
        autoComplete="email"
        value={email}
        readOnly={formState !== 'default'}
        onChange={handleInputChange}
      />

      {/* Error message */}
      {errorMessage && (
        <span
          className=" absolute left-1/2 -bottom-5 w-full translate-y-2/3 -translate-x-1/2 text-center text-sm text-gray-8"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={appearAndExitAnimationVariants}
        >
          {errorMessage}
        </span>
      )}

      {/* Button */}
      {formState === 'default' && (
        <div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={appearAndExitAnimationVariants}
        >
          <Button
            className="relative"
            size="xs"
            theme="white-filled"
            name="subscribe"
            type="submit"
          >
            <span className="">subscribe</span>
            {/* <span className="aria-hidden opacity-1 absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2">
              <img className="" src={LoadingIcon} loading="lazy" aria-hidden />
            </span> */}
          </Button>
        </div>
      )}

      {/* Loading state */}

      {formState === 'loading' && (
        <div
          className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full bg-white"
          initial="initial"
          size="xs"
          animate="animate"
          exit="exit"
          variants={appearAndExitAnimationVariants}
          aria-hidden
        >
          <div
            className="relative flex h-[40px] w-[108px] items-center justify-center rounded-md bg-white"
            size="xs"
            theme="white-filled"
            name="loading"
          >
            <img className="" src={LoadingIcon} alt="" loading="lazy" aria-hidden />
          </div>
        </div>
      )}

      {/* Success state */}

      {(formState === 'success' || formState === 'error') && (
        <div
          className="absolute right-3 top-1/2 -translate-y-1/2 2xl:right-2.5 xl:right-2"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={appearAndExitAnimationVariants}
          aria-hidden
        >
          {/* {formState === 'success' && <CheckIcon className="2xl:w-[60px] xl:w-[56px]" />} */}
          {formState === 'success' && (
            <div className="relative flex h-[40px] w-[40px] items-center justify-center rounded-md bg-white">
              <img className="" src={CheckIcon} alt="" loading="lazy" aria-hidden />
            </div>
          )}
          {formState === 'error' && (
            <div className="relative flex h-[40px] w-[40px] items-center justify-center rounded-md bg-white">
              <img className="" src={ErrorIcon} alt="" loading="lazy" aria-hidden />
            </div>
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
