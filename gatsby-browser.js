import './src/styles/main.css';

export const onRouteUpdate = () => {
  if (process.env.NODE_ENV === 'production' && typeof window.plausible !== 'undefined') {
    window.plausible('pageview');
  }
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
