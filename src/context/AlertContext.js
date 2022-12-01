import React, { createContext, useRef, useState } from "react";

export const AlertContext = createContext();

const AlertContextProvider = ({ children }) => {
  const [alertIsShown, setAlertIsShown] = useState(false);
  const [alertContent, setAlertContent] = useState("");

  const timeOutRef = useRef();

  const showAlert = (msg) => {
    clearTimeout(timeOutRef.current);

    setAlertIsShown(true);
    setAlertContent(msg);

    timeOutRef.current = setTimeout(() => {
      setAlertIsShown(false);
      setAlertContent("");
    }, 1500);
  };

  return (
    <AlertContext.Provider value={{ alertIsShown, alertContent, showAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContextProvider;
