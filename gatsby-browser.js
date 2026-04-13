import './src/styles/main.css';

const UTM_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'fbclid', 'ttclid', 'wbraid'];
const SIGNUP_HOST = 'dashboard.novu.co';

function getStoredUtmParams() {
  try {
    const stored = sessionStorage.getItem('novu_utm_params');
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function captureUtmParams() {
  const params = new URLSearchParams(window.location.search);
  const utms = {};
  UTM_PARAMS.forEach((key) => {
    const value = params.get(key);
    if (value) utms[key] = value;
  });

  if (Object.keys(utms).length > 0) {
    try {
      sessionStorage.setItem('novu_utm_params', JSON.stringify(utms));
    } catch {
      // sessionStorage unavailable
    }
  }
}

function forwardUtmToSignupLinks() {
  const utms = getStoredUtmParams();
  if (Object.keys(utms).length === 0) return;

  document.querySelectorAll(`a[href*="${SIGNUP_HOST}"]`).forEach((link) => {
    try {
      const url = new URL(link.href);
      Object.entries(utms).forEach(([key, value]) => {
        if (!url.searchParams.has(key)) {
          url.searchParams.set(key, value);
        }
      });
      link.href = url.toString();
    } catch {
      // skip malformed URLs
    }
  });
}

export const onRouteUpdate = () => {
  if (process.env.NODE_ENV === 'production' && typeof window.plausible !== 'undefined') {
    window.plausible('pageview');
  }

  captureUtmParams();
  requestAnimationFrame(forwardUtmToSignupLinks);
};

export const shouldUpdateScroll = ({ routerProps: { location }, getSavedScrollPosition }) => {
  if (location.state && location.state.preventScroll === true) {
    return false;
  }

  if (location.hash) {
    window.history.scrollRestoration = 'auto';
    return true;
  }

  // Fix for Gatsby 5 issue with scroll-behavior - https://github.com/gatsbyjs/gatsby/issues/38201

  window.history.scrollRestoration = 'manual';

  const currentPosition = getSavedScrollPosition(location, location.key);
  const top = currentPosition ? currentPosition[1] : 0;

  window.setTimeout(() => {
    window.requestAnimationFrame(() => {
      try {
        window.scrollTo({ top, behavior: 'instant' });
      } catch (e) {
        window.scrollTo(top);
      }
    });
  }, 0);

  return false;
};
