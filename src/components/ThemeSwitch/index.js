import React, { useContext } from "react";
import ColorModeContext from "../../context/ColorMode";

import { StyledSwitch } from "./styles";

const ThemeSwitch = () => {
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
      </label>
    </StyledSwitch>
  );
}

export default ThemeSwitch;
