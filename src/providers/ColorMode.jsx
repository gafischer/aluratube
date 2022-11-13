import React, { useMemo, useState } from "react";
import ColorModeContext from "../context/ColorMode";

function ColorModeProvider({ initialMode, children }) {
	const [mode, setMode] = useState(initialMode);

	const changeTheme = (theme) => {
		setMode(theme);
	};

	const values = useMemo(() => ({ mode, changeTheme }), [mode]);

	return (
		<ColorModeContext.Provider value={values}>
			{children}
		</ColorModeContext.Provider>
	);
}

export default ColorModeProvider;
