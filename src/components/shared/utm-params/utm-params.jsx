import { useEffect } from 'react';

import { UTM_PARAMS } from 'constants/forms';

const UtmParams = () => {
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    UTM_PARAMS.forEach((param) => {
      const searchValue = searchParams?.get(param);

      try {
        const storedValue = sessionStorage.getItem(param);

        if (searchValue && searchValue !== storedValue) {
          sessionStorage.setItem(param, searchValue);
        }
      } catch (err) {
        // Do nothing, if sessionStorage is not available
      }
    });
  }, []);

  return null;
};

export default UtmParams;
