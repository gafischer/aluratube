import React, { useContext } from "react";
import ColorModeContext from "../../context/ColorMode";
import { MdDarkMode, MdLightMode } from "react-icons/md";

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
        <span>
          <MdLightMode />
        </span>
        <span>
          <MdDarkMode />
        </span>
      </label>
    </StyledSwitch>
  );
}

export default ThemeSwitch;
