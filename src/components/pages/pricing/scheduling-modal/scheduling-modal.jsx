import { getCalApi } from '@calcom/embed-react';
import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useRef } from 'react';

const NAMESPACE = 'novu-meeting';

const SchedulingModal = ({ isOpen, utmSource = null, onClose }) => {
  const buttonRef = useRef(null);
  const initializedRef = useRef(false);

  const calLink = useMemo(() => {
    const utmParams = utmSource
      ? `?utm_source=${encodeURIComponent(utmSource)}&utm_campaign=pricing_contact`
      : '?utm_campaign=pricing_contact';
    return `team/novu/intro${utmParams}`;
  }, [utmSource]);

  useEffect(() => {
    let isCancelled = false;

    const initAndOpen = async () => {
      try {
        const cal = await getCalApi({ namespace: NAMESPACE });
        if (isCancelled) return;

        if (!initializedRef.current) {
          cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
          initializedRef.current = true;
        }

        // Ensure the button is ready before clicking
        // Use requestAnimationFrame to wait for the next paint cycle
        requestAnimationFrame(() => {
          if (isCancelled || !buttonRef.current) return;

          buttonRef.current.click();

          // Reset the modal state after opening to allow subsequent clicks
          if (onClose) {
            // Small delay to ensure the Cal.com modal opens before resetting state
            setTimeout(() => {
              if (!isCancelled) {
                onClose();
              }
            }, 100);
          }
        });
      } catch (e) {
        console.error('Scheduling modal failed to open:', e);
        // Also close on error to allow retrying
        if (onClose) {
          onClose();
        }
      }
    };

    if (isOpen) {
      initAndOpen();
    }

    return () => {
      isCancelled = true;
    };
  }, [isOpen, utmSource, onClose]);

  return (
    <button
      ref={buttonRef}
      type="button"
      aria-hidden="true"
      tabIndex={-1}
      data-cal-namespace={NAMESPACE}
      data-cal-link={calLink}
      data-cal-config='{"layout":"month_view"}'
      style={{
        position: 'fixed',
        left: '-99999px',
        top: '-99999px',
        width: 0,
        height: 0,
        opacity: 0,
      }}
    >
      Schedule a Call
    </button>
  );
};

SchedulingModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  utmSource: PropTypes.string,
  onClose: PropTypes.func,
};

SchedulingModal.defaultProps = {
  onClose: null,
};

export default SchedulingModal;
