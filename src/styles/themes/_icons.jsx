import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const themeIcons = {
	dark: <MdDarkMode />,
	light: <MdLightMode />
};

const getThemeIcon = (theme) => themeIcons[theme];

export default getThemeIcon;
