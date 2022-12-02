import React from "react";
import classes from "./ButtonClose.module.css";
import { ReactComponent as IconFechar } from "../../assets/x.svg";

const ButtonClose = ({ onClose, className }) => {
  const styles = classes.button + " " + className;
  return (
    <button className={styles} onClick={onClose}>
      <IconFechar />
    </button>
  );
};

export default ButtonClose;
