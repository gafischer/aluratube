import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import RegisterVideo from "../components/RegisterVideo";
import ColorModeContext from "../context/ColorMode";

import ProviderWrapper from "../providers/Wrapper";

import GlobalStyle from "../styles/global";
import * as theme from "../styles/themes/_index";

function Root({ Component }) {
	const colorModeContext = useContext(ColorModeContext);

	return (
		<ThemeProvider theme={theme[colorModeContext.mode]}>
			<GlobalStyle />
			<Component />;
			<RegisterVideo />
		</ThemeProvider>
	);
}

function App(props) {
	const { Component, err, router } = props;

	return (
		<ProviderWrapper>
			<Root {...{ Component, err, router }} />
		</ProviderWrapper>
	);
}

export default App;
