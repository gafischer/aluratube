import React, { useContext } from "react";
import ColorModeContext from "../../../context/ColorMode";
import { getThemeIcon } from "../../../styles/themes/_icons";

import { StyledThemeItem } from "./styles";

const ThemeItem = ({ theme }) => {
  const colorModeContext = useContext(ColorModeContext);

  const handleThemeClick = (theme) => {
    colorModeContext.changeTheme(theme);
  };

  return (
    <StyledThemeItem selected={colorModeContext.mode === theme}>
      <button type="button" onClick={() => handleThemeClick(theme)}>
        {getThemeIcon(theme)} {theme}
      </button>
    </StyledThemeItem>
  );
};

export default ThemeItem;
