import { createContext, useState } from "react";

export const ColorModeContext = createContext();

const ColorModeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const changeMode = () => {
    setIsDarkMode((currMode) => !currMode);
  };

  return (
    <ColorModeContext.Provider value={{ isDarkMode, changeMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

export default ColorModeContextProvider;
