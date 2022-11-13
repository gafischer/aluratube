import { MdDarkMode, MdLightMode } from "react-icons/md";

const themeIcons = {
  dark: <MdDarkMode />,
  light: <MdLightMode />,
};

export const getThemeIcon = (theme) => {
  return themeIcons[theme];
};
