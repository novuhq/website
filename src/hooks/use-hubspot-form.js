/* eslint-disable consistent-return */
import { useEffect } from 'react';

import injectScript from 'utils/inject-script';

const formScriptSrc = 'https://js.hsforms.net/forms/v2.js';
const formPortalId = process.env.GATSBY_HUBSPOT_FORM_PORTAL_ID;

export const initForm = async (element, onFormHandles) => {
  await injectScript(formScriptSrc);
  const formId = element.getAttribute('data-form-id');

  window.hbspt?.forms?.create({
    portalId: formPortalId,
    formId,
    target: `div[data-form-id='${formId}']`,
    ...onFormHandles,
  });
};

export default function useHubspotForm(lazyBlockSelector, onFormHandles = null) {
  useEffect(() => {
    const elements = document.getElementsByClassName(lazyBlockSelector);
    Array.from(elements).forEach((element) => {
      initForm(element, onFormHandles);
    });
  }, [lazyBlockSelector, onFormHandles]);
}
