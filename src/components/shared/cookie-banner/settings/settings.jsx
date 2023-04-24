import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';

import Checkbox from './checkbox';

const Settings = ({ productAnalyticsValue, setProductAnalyticsValue, handleCloseModal }) => {
  const handleCheckboxChange = () => setProductAnalyticsValue((prevState) => !prevState);

  return (
    <>
      <h3 className="text-center text-3xl leading-snug">Cookie preferences</h3>
      <p className="mx-auto mt-3 text-center text-sm text-gray-8">
        We are using cookies to measure and improve your experience.
      </p>

      <div className="mt-7 flex flex-col gap-y-6">
        <Checkbox
          id="essentialCookiesCheckbox"
          labelTitle="Essential Cookies"
          labelDescription="Enable basic functions like page navigation and access to secure areas of the website. Without these cookies, the website cannot function properly."
          isChecked
          isDisabled
        />
        <Checkbox
          id="productAnalyticsCheckbox"
          labelTitle="Product analytics"
          labelDescription="Сookies are used to collect information about how visitors use the website. This information is used to improve the website and the user experience."
          isChecked={productAnalyticsValue}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className="mt-10 flex gap-x-5">
        <Button className="flex-1" theme="gray-outline" size="sm" onClick={handleCloseModal}>
          Cancel
        </Button>
        <Button className="flex-1" theme="primary" size="sm" onClick={handleCloseModal}>
          Save
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
