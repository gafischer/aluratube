import { useState } from "react";
import ColorModeContext from "../context/ColorMode";

function ColorModeProvider({ initialMode, children }) {
  const [mode, setMode] = useState(initialMode);

  function toggleMode() {
    if (mode === "dark") setMode("light");

    if (mode === "light") setMode("dark");
  }

  return (
    <ColorModeContext.Provider value={{ mode: mode, setMode: setMode, toggleMode: toggleMode }}>
      {children}
    </ColorModeContext.Provider>
  );
}

export default ColorModeProvider;
