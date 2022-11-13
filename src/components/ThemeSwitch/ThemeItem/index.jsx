import React, { useContext } from "react";
import ColorModeContext from "../../../context/ColorMode";
import getThemeIcon from "../../../styles/themes/_icons";

import StyledThemeItem from "./styles";

function ThemeItem({ theme }) {
	const colorModeContext = useContext(ColorModeContext);

	const handleThemeClick = (newTheme) => {
		colorModeContext.changeTheme(newTheme);
	};

	return (
		<StyledThemeItem selected={colorModeContext.mode === theme}>
			<button type="button" onClick={() => handleThemeClick(theme)}>
				{getThemeIcon(theme)} {theme}
			</button>
		</StyledThemeItem>
	);
}

export default ThemeItem;
