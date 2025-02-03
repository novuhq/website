import { useEffect } from 'react';

const injectBannerStyles = () => {
  const observer = new MutationObserver(() => {
    const bannerFrame = document.querySelector('#hs-web-interactives-top-anchor iframe');
    if (bannerFrame?.contentDocument) {
      const style = document.createElement('style');
      style.textContent = `
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
        }
      `;
      bannerFrame.contentDocument.head.appendChild(style);
      observer.disconnect();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
};

export default function useHubspotBanner() {
  useEffect(() => {
    injectBannerStyles();
  }, []);
}
