import React from "react";
import classes from "./WrapperButton.module.css";

const WrapperButton = ({ children, className, onClick, title }) => {
  const styles = classes.button + " " + className;
  return (
    <button className={styles} onClick={onClick} title={title}>
      {children}
    </button>
  );
};

export default WrapperButton;
