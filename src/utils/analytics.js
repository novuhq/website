import mixpanel from 'mixpanel-browser';

import { COOKIE_VALUE_TRUE } from 'constants/cookie';

let isInitialized = false;

function initializeMixpanel() {
  if (typeof window === 'undefined' || isInitialized) {
    return;
  }

  const token = process.env.GATSBY_MIXPANEL_TOKEN;

  if (!token) {
    // eslint-disable-next-line no-console
    console.warn('Mixpanel token not found');

    return;
  }

  mixpanel.init(token, {
    track_pageview: false,
    persistence: 'localStorage',
  });

  isInitialized = true;
}

export function trackEvent(eventName, properties = {}) {
  if (typeof window === 'undefined') {
    return;
  }

  if (!isInitialized) {
    initializeMixpanel();
  }

  if (!isInitialized) {
    return;
  }

  mixpanel.track(eventName, properties);
}

export function setTrackingEnabled(enabled) {
  if (typeof window === 'undefined' || !isInitialized) {
    return;
  }

  if (enabled) {
    mixpanel.opt_in_tracking();
  } else {
    mixpanel.opt_out_tracking();
  }
}

export function trackPageView() {
  if (typeof window === 'undefined') {
    return;
  }

  if (!isInitialized) {
    initializeMixpanel();
  }

  if (!isInitialized) {
    return;
  }

  const { href: url, pathname: path, search } = window.location;
  const { referrer, title } = document;

  mixpanel.track('Market Page Visit', {
    url,
    path,
    search,
    referrer,
    title,
    $current_url: url,
    $referrer: referrer,
  });
}

export function initializeAnalytics() {
  if (typeof window === 'undefined') {
    return;
  }

  initializeMixpanel();

  if (!isInitialized) {
    return;
  }

  const cookieValue = localStorage.getItem('cookie-consent');

  if (cookieValue === COOKIE_VALUE_TRUE) {
    mixpanel.opt_in_tracking();
  } else {
    mixpanel.opt_out_tracking();
  }
}
