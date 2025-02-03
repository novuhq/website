import { useEffect } from 'react';

const styles = `
  div[id^='hs-overlay-cta'] {
    height: 36px !important;
  }
  [data-hs-container-type='BANNER'] {
    height: 36px !important;
    min-height: 36px !important;
  }
  .body-wrapper {
    width: 100% !important;
  }
  a.interactive-button {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 0.75rem !important;
    background-color: #0B0C0F !important;
    background-image: url('/images/bg-banner.jpg') !important;
    padding: 9px !important;
    font-family: sans-serif !important;
    font-size: 0.875rem !important;
    font-weight: 500 !important;
    color: white !important;
    transition: all 200ms !important;
  }
  a.interactive-button:hover {
    gap: 1.5rem !important;
    color: var(--primary-1) !important;
  }
`;

const injectBannerStyles = () => {
  const observer = new MutationObserver(() => {
    const bannerFrame = document.querySelector('#hs-web-interactives-top-anchor iframe');

    // Debug log to check if iframe is found
    console.log('Found banner frame:', bannerFrame);

    try {
      // Try to access contentDocument - this will throw if cross-origin
      if (bannerFrame?.contentDocument) {
        console.log('Successfully accessed iframe content');

        const style = document.createElement('style');
        style.textContent = styles;
        bannerFrame.contentDocument.head.appendChild(style);
        observer.disconnect();
      }
    } catch (error) {
      console.error('Error accessing iframe content:', error);

      // Alternative approach using iframe load event
      bannerFrame?.addEventListener('load', () => {
        try {
          if (bannerFrame.contentDocument) {
            const style = document.createElement('style');
            style.textContent = styles;
            bannerFrame.contentDocument.head.appendChild(style);
          }
        } catch (e) {
          console.error('Error in load event handler:', e);
        }
      });
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
};

export default function useHubspotBanner() {
  useEffect(() => {
    // Wait for DOM to be ready
    if (document.readyState === 'complete') {
      injectBannerStyles();
    } else {
      window.addEventListener('load', injectBannerStyles);
      return () => window.removeEventListener('load', injectBannerStyles);
    }
  }, []);
}
