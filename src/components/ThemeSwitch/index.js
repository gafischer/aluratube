import React, { useContext } from "react";
import ColorModeContext from "../../contexts/ColorMode";

import { StyledSwitch } from "./styles";

function ThemeSwitch() {
  const colorModeContext = useContext(ColorModeContext);

  return (
    <StyledSwitch>
      <input
        id="darkmode"
        type="checkbox"
        onChange={() => {
          colorModeContext.toggleMode();
        }}
      />
      <label htmlFor="darkmode">
        <span>🌙</span>
        <span>☀️</span>
      </label>
    </StyledSwitch>
  );
}

export default ThemeSwitch;
