import { useCallback } from 'react';

const useLandingSimpleTracking = () =>
  useCallback(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const converted = localStorage.getItem('converted');
    const url = localStorage.getItem('conversion');

    if (converted) {
      return;
    }

    localStorage.setItem('converted', 'true');
    window?.plausible('SignupClick', {
      props: {
        landing: url,
      },
    });
  }, []);

export const buttonClick = (event, moreProps = {}) => {
  const url = localStorage.getItem('conversion');

  window?.plausible(event, {
    props: {
      landing: url,
      ...moreProps,
    },
  });
};
export const useButtonClick = (event, moreProps = {}) =>
  useCallback(() => {
    if (typeof window === 'undefined') {
      return;
    }

    buttonClick(event, moreProps);
  }, [event, moreProps]);

export default useLandingSimpleTracking;
