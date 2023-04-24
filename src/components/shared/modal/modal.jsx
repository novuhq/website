import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal';

import './modal.css';

const customStyles = {
  overlay: {
    display: 'flex',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '28px 14px',
    zIndex: 40,
    overflowY: 'auto',
  },
};

const Modal = ({ className, isOpen, children, closeModal }) => (
  <ReactModal
    style={customStyles}
    className={clsx(
      'relative inset-0 m-auto w-full max-w-[508px] rounded-lg border-none bg-gradient-to-b from-gray-3 to-gray-2 p-4 outline-none',
      className
    )}
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
};

Modal.defaultProps = {
  className: null,
};

export default Modal;
