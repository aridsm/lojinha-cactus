import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose}></div>
}

const ModalContent = ({ children }) => {
  return <div className={classes.modal}>
    <div className={classes.content}>{children}</div>
  </div>
}

const Modal = ({ children, onClose }) => {

  const modalRoot = document.getElementById('modal');
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, modalRoot)}
      {ReactDOM.createPortal(<ModalContent>{children}</ModalContent>, modalRoot)}
    </>
  )
}

export default Modal