import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal';

import './modal.css';

const customStyles = {
  overlay: {
    display: 'flex',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(10px)',
    webkitBackdropFilter: 'blur(10px)',
    padding: '28px 14px',
    zIndex: 40,
    overflowY: 'auto',
  },
};

const styles = {
  base: 'relative inset-0 m-auto w-full max-w-[508px] rounded-lg border-none p-4 outline-none',
  theme: {
    gradient: 'bg-gradient-to-b from-gray-3 to-gray-2',
    'gradient-with-blur':
      'overflow-hidden bg-[linear-gradient(180deg,rgba(38,38,38,0.6)_0%,rgba(24,24,24,0.6)_100%)] backdrop-blur-[50px]',
  },
};

const Modal = ({ className, isOpen, children, closeModal, theme }) => (
  <ReactModal
    style={customStyles}
    className={clsx(styles.base, styles.theme[theme], className)}
    bodyOpenClassName="overflow-hidden touch-none"
    isOpen={isOpen}
    ariaHideApp={false}
    closeTimeoutMS={200}
    shouldCloseOnOverlayClick
    onRequestClose={closeModal}
  >
    {children}
  </ReactModal>
);

Modal.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(Object.keys(styles.theme)),
};

Modal.defaultProps = {
  className: null,
  theme: 'gradient',
};

export default Modal;
