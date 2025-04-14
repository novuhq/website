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

  window.history.scrollRestoration = 'manual';
  const currentPosition = getSavedScrollPosition(location, location.key);

  if (!currentPosition) {
    window.scrollTo(0, 0);
  } else {
    window.setTimeout(() => {
      window.requestAnimationFrame(() => {
        window.scrollTo(...currentPosition);
      });
    }, 0);
  }

  return false;
};
