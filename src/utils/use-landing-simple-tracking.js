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

export default useLandingSimpleTracking;
