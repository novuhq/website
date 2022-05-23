/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import './src/styles/main.css';

export const shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (location.state && location.state.preventScroll === true) {
    return false;
  }

  return true;
};
