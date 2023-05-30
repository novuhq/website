import './src/styles/main.css';

export const onRouteUpdate = () => {
  if (process.env.NODE_ENV === 'production' && typeof window.plausible !== 'undefined') {
    window.plausible('pageview');
  }
};

export const shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (location.state && location.state.preventScroll === true) {
    return false;
  }

  return true;
};
