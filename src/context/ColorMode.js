import { createContext } from "react";

const ColorModeContext = createContext({
	mode: "",
	changeTheme: () => {}
});

export default ColorModeContext;
