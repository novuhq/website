import './src/styles/main.css';

const UTM_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'fbclid', 'ttclid', 'wbraid'];
const SIGNUP_HOST = 'dashboard.novu.co';

// Cal.com embed namespace shared by every booking entry point on the site
// (pricing scheduling modal, contact-us, and any future ones).
const CAL_NAMESPACE = 'novu-meeting';
let demoBookingTrackingInitialized = false;

function getStoredUtmParams() {
  try {
    const stored = sessionStorage.getItem('novu_utm_params');
    if (!stored) return {};
    const parsed = JSON.parse(stored);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {};
    return Object.fromEntries(
      UTM_PARAMS.flatMap((key) => {
        const value = parsed[key];
        return typeof value === 'string' && value ? [[key, value]] : [];
      })
    );
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
      const existing = getStoredUtmParams();
      const merged = { ...existing, ...utms };
      sessionStorage.setItem('novu_utm_params', JSON.stringify(merged));
    } catch {
      // sessionStorage unavailable
    }
  }
}

function forwardUtmToSignupLinks() {
  const utms = getStoredUtmParams();
  if (Object.keys(utms).length === 0) return;

  document.querySelectorAll('a[href]').forEach((link) => {
    try {
      const url = new URL(link.href);
      if (url.hostname !== SIGNUP_HOST) return;
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

// Register a single, app-wide listener for successful Cal.com bookings.
//
// Why this is needed: Cal.com renders the booking flow inside an app.cal.com
// iframe and fires its own tracking from *that* origin, so it cannot read the
// novu.co Google Ads cookie (gclid) and every booking lands as "direct" /
// unattributed. By listening for Cal.com's `bookingSuccessful` event here, the
// conversion is pushed to the dataLayer from the parent novu.co context, where
// GTM (server-rendered) and the Ads conversion linker can attribute it to the
// originating ad click. One namespace-level listener covers every booking
// surface and fires exactly once per booking.
async function initDemoBookingTracking() {
  if (demoBookingTrackingInitialized) return;
  demoBookingTrackingInitialized = true;

  try {
    const { getCalApi } = await import('@calcom/embed-react');
    const cal = await getCalApi({ namespace: CAL_NAMESPACE });

    cal('on', {
      action: 'bookingSuccessful',
      callback: () => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'demo_booked',
          demo_booking: {
            source: 'cal.com',
            namespace: CAL_NAMESPACE,
            // UTM/gclid captured on landing, for downstream/offline attribution.
            ...getStoredUtmParams(),
          },
        });
      },
    });
  } catch {
    // Cal.com embed unavailable; nothing to track.
  }
}

export const onClientEntry = () => {
  // Defer until idle so loading the Cal embed never competes with first render.
  // A booking takes many seconds to complete, so the listener is always ready
  // well before any `bookingSuccessful` fires.
  const start = () => initDemoBookingTracking();
  if (typeof window.requestIdleCallback === 'function') {
    window.requestIdleCallback(start, { timeout: 3000 });
  } else {
    window.setTimeout(start, 2000);
  }
};

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
