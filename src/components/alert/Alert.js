import React from "react";
import ReactDOM from "react-dom";
import classes from "./Alert.module.css";

const AlertContent = ({ alertIsShown, content }) => {
  return <>{alertIsShown && <div className={classes.alert}>{content}</div>}</>;
};

const Alert = ({ alertIsShown, content }) => {
  const alertElement = document.getElementById("alert");
  return (
    <>
      {ReactDOM.createPortal(
        <AlertContent
          alertIsShown={alertIsShown}
          content={content}
        ></AlertContent>,
        alertElement
      )}
    </>
  );
};

export default Alert;
