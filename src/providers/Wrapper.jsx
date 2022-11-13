import React from "react";
import ColorModeProvider from "./ColorMode";

function ProviderWrapper({ children }) {
	return <ColorModeProvider initialMode="dark">{children}</ColorModeProvider>;
}

export default ProviderWrapper;
