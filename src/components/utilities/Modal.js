import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose}></div>;
};

const ModalContent = ({ children, isDarkMode }) => {
  useEffect(() => {
    console.log(isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={`${classes.modal} ${isDarkMode ? "darkMode" : ""}`}>
      <div className={classes.content}>
        {children} {isDarkMode}
      </div>
    </div>
  );
};

const Modal = ({ children, onClose, isDarkMode }) => {
  const modalRoot = document.getElementById("modal");
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, modalRoot)}
      {ReactDOM.createPortal(
        <ModalContent isDarkMode={isDarkMode}>{children}</ModalContent>,
        modalRoot
      )}
    </>
  );
};

export default Modal;
