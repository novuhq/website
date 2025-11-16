import { getCalApi } from '@calcom/embed-react';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';

const SchedulingModal = ({ isOpen, utmSource }) => {
  const buttonRef = useRef(null);
  const initializedRef = useRef(false);

  const utmParams = utmSource
    ? `?utm_source=${encodeURIComponent(utmSource)}&utm_campaign=pricing_contact`
    : '?utm_campaign=pricing_contact';
  const calLink = `team/novu/intro${utmParams}`;

  useEffect(() => {
    let isCancelled = false;

    const initAndOpen = async () => {
      try {
        const cal = await getCalApi({ namespace: 'novu-meeting' });
        if (isCancelled) return;

        if (!initializedRef.current) {
          cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
          initializedRef.current = true;
        }

        setTimeout(() => {
          buttonRef.current?.click();
        }, 0);
      } catch {
        // ignore
      }
    };

    if (isOpen && buttonRef.current) {
      initAndOpen();
    }

    return () => {
      isCancelled = true;
    };
  }, [isOpen, utmSource]);

  return (
    <button
      ref={buttonRef}
      type="button"
      aria-hidden="true"
      tabIndex={-1}
      data-cal-namespace="novu-meeting"
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
};

SchedulingModal.defaultProps = {
  utmSource: null,
};

export default SchedulingModal;
