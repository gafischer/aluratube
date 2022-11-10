import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import ColorModeContext from "../contexts/ColorMode";

import { ProviderWrapper } from "../providers/Wrapper";

import { GlobalStyle } from "../styles/global";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  const colorModeContext = useContext(ColorModeContext);

  return (
      <ThemeProvider theme={theme[colorModeContext.mode]}>
        <GlobalStyle />
        <Component {...pageProps} />;
      </ThemeProvider>
  );
}

export default function _App(props) {
  return (
    <ProviderWrapper>
      <MyApp {...props} />
    </ProviderWrapper>
  )
}
