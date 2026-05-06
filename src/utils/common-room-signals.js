export function identifyKnownVisitor({ email, name } = {}) {
  if (typeof window === 'undefined') return false;

  const normalizedEmail = typeof email === 'string' ? email.trim() : '';
  if (!normalizedEmail || !window.signals || typeof window.signals.identify !== 'function') {
    return false;
  }

  const payload = { email: normalizedEmail };
  const normalizedName = typeof name === 'string' ? name.trim() : '';

  if (normalizedName) {
    payload.name = normalizedName;
  }

  try {
    window.signals.identify(payload);
    return true;
  } catch {
    return false;
  }
}

function getFieldValue(fields, fieldName) {
  if (!Array.isArray(fields)) return '';

  const field = fields.find(({ name }) => name === fieldName);
  return typeof field?.value === 'string' ? field.value : '';
}

function getInputValue(form, selector) {
  if (!form || typeof form.querySelector !== 'function') return '';

  const input = form.querySelector(selector);
  return typeof input?.value === 'string' ? input.value : '';
}

function getFormElement(form) {
  if (!form) return null;
  if (typeof form.querySelector === 'function') return form;
  if (typeof form.get === 'function') return form.get(0);
  if (form[0] && typeof form[0].querySelector === 'function') return form[0];
  return null;
}

export function identifyHubspotFormSubmission(form, submissionData) {
  const formElement = getFormElement(form);
  const email =
    getFieldValue(submissionData?.submissionValues, 'email') ||
    getFieldValue(submissionData?.values, 'email') ||
    getInputValue(formElement, 'input[name="email"]');
  const firstName =
    getFieldValue(submissionData?.submissionValues, 'firstname') ||
    getFieldValue(submissionData?.values, 'firstname') ||
    getInputValue(formElement, 'input[name="firstname"]');
  const lastName =
    getFieldValue(submissionData?.submissionValues, 'lastname') ||
    getFieldValue(submissionData?.values, 'lastname') ||
    getInputValue(formElement, 'input[name="lastname"]');
  const name = [firstName, lastName].filter(Boolean).join(' ');

  return identifyKnownVisitor({ email, name });
}
