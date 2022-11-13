import { useState } from "react";
import ColorModeContext from "../context/ColorMode";

const ColorModeProvider = ({ initialMode, children }) => {
  const [mode, setMode] = useState(initialMode);

  const changeTheme = (theme) => {
    setMode(theme);
  }

  return (
    <ColorModeContext.Provider
      value={{ mode: mode, changeTheme: changeTheme }}
    >
      {children}
    </ColorModeContext.Provider>
  );
};

export default ColorModeProvider;
