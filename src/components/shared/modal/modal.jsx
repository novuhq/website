import PropTypes from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal';

import './modal.css';

const Modal = ({ isOpen, onCloseButtonClick, children, ...props }) => (
  <ReactModal isOpen={isOpen} ariaHideApp={false} closeTimeoutMS={200} {...props}>
    {children}
  </ReactModal>
);

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
