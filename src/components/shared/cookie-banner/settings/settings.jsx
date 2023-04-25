import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';

import Checkbox from './checkbox';

const Settings = ({ productAnalyticsValue, setProductAnalyticsValue, handleCloseModal }) => {
  const handleCheckboxChange = () => setProductAnalyticsValue((prevState) => !prevState);

  return (
    <>
      <h3 className="text-center text-[30px] leading-denser sm:text-3xl">Cookie preferences</h3>
      <p className="mx-auto mt-3 text-center text-base font-book leading-tight text-gray-8">
        We are using cookies to measure and improve your experience.
      </p>

      <div className="mt-7 flex flex-col">
        <Checkbox
          id="essentialCookiesCheckbox"
          labelTitle="Essential Cookies"
          labelDescription="Enable basic functions like page navigation and access to secure areas of the website. Without these cookies, the website cannot function properly."
          isChecked
          isDisabled
        />
        <span className="my-5 h-px bg-gray-3" aria-hidden />
        <Checkbox
          id="productAnalyticsCheckbox"
          labelTitle="Product analytics"
          labelDescription="Сookies are used to collect information about how visitors use the website. This information is used to improve the website and the user experience."
          isChecked={productAnalyticsValue}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className="mt-10 flex justify-end gap-x-5">
        <Button theme="gray-outline" size="xs" onClick={handleCloseModal}>
          Cancel
        </Button>
        <Button theme="primary" size="xs" onClick={handleCloseModal}>
          Save settings
        </Button>
      </div>
    </>
  );
};

Settings.propTypes = {
  productAnalyticsValue: PropTypes.bool.isRequired,
  setProductAnalyticsValue: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
};

export default Settings;
