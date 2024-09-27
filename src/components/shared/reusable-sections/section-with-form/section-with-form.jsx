import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Heading from 'components/shared/heading';
import useHubspotForm from 'hooks/use-hubspot-form';

import 'styles/hubspot-form.css';

const SectionWithForm = ({
  title,
  description,
  features,
  formPosition,
  hubspotFormId,
  hubspotTagClass,
  headingTag,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useHubspotForm(hubspotTagClass, {
    onFormReady: () => {
      setIsLoading(false);
    },
  });

  return (
    <section className="section-with-form safe-paddings mt-28 lg:mt-20 md:mt-16 sm:mt-12">
      <div className="container-lg relative grid grid-cols-12 gap-x-8 xl:px-0 lg:px-10 md:flex md:flex-col md:px-7 sm:px-4">
        <div
          className={clsx(
            'md:order-first',
            formPosition === 'left' ? 'col-start-7 col-end-13' : 'col-start-1 col-end-6'
          )}
        >
          <Heading
            className="font-medium leading-denser tracking-snug lg:text-5xl md:text-[32px] sm:text-3xl"
            tag={headingTag}
            size="44"
            theme="white"
          >
            {title}
          </Heading>
          <p className="mt-3 text-[17px] leading-snug md:text-sm">{description}</p>
          {features.length > 0 && (
            <ul className="mt-8 flex flex-col gap-y-4 pl-6 md:gap-y-2.5 md:pl-8">
              {features.map(({ title, description }, idx) => (
                <li
                  className="relative before:absolute before:-left-4 before:top-3 before:h-2 before:w-2 before:-translate-x-full before:rounded-full before:bg-primary-1"
                  key={idx}
                >
                  <Heading
                    className="text-2xl leading-snug md:text-xl"
                    size="xs"
                    tag={headingTag === 'h1' ? 'h2' : 'h3'}
                  >
                    {title}
                  </Heading>
                  <p className="mt-1 text-base font-light leading-snug text-gray-9">
                    {description}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div
          className={clsx(
            formPosition === 'left'
              ? 'order-first col-start-1 col-end-7'
              : 'col-start-7 col-end-13',
            'md:mt-20 sm:mt-16'
          )}
        >
          <div className="hubspot-form-wrapper">
            {isLoading && (
              <div className="flex w-full flex-col items-start justify-center gap-y-8 overflow-hidden md:gap-y-6">
                <span className="skeleton h-12" />
                <span className="skeleton h-12" />
                <span className="skeleton h-12" />
                <span className="skeleton h-12" />
              </div>
            )}
            <div
              className={clsx(
                `${hubspotTagClass} hubspot-form not-prose`,
                isLoading ? 'hidden' : 'block'
              )}
              data-form-id={hubspotFormId}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

SectionWithForm.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  formPosition: PropTypes.string.isRequired,
  hubspotFormId: PropTypes.string.isRequired,
  // If you want to use more than one form on the page, you need to provide unique tag ids
  hubspotTagClass: PropTypes.string,
  headingTag: PropTypes.string,
};

SectionWithForm.defaultProps = {
  description: '',
  features: [],
  headingTag: 'h2',
  hubspotTagClass: 'single-form',
};

export default SectionWithForm;
