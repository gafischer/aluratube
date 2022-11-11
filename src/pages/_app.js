import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import RegisterVideo from "../components/RegisterVideo";
import ColorModeContext from "../context/ColorMode";

import { ProviderWrapper } from "../providers/Wrapper";

import { GlobalStyle } from "../styles/global";
import { theme } from "../styles/theme";

function Root({ Component, pageProps }) {
  const colorModeContext = useContext(ColorModeContext);

  return (
      <ThemeProvider theme={theme[colorModeContext.mode]}>
        <GlobalStyle />
        <Component {...pageProps} />;
        <RegisterVideo />
      </ThemeProvider>
  );
}

export default function _App(props) {
  return (
    <ProviderWrapper>
      <Root {...props} />
    </ProviderWrapper>
  )
}
