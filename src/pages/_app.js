import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import RegisterVideo from "../components/RegisterVideo";
import ColorModeContext from "../context/ColorMode";

import { ProviderWrapper } from "../providers/Wrapper";

import { GlobalStyle } from "../styles/global";
import * as theme from '../styles/themes/_index'

const Root = ({ Component, pageProps }) => {
  const colorModeContext = useContext(ColorModeContext);

  return (
      <ThemeProvider theme={theme[colorModeContext.mode]}>
        <GlobalStyle />
        <Component {...pageProps} />;
        <RegisterVideo />
      </ThemeProvider>
  );
}

const _App = (props) => {
  return (
    <ProviderWrapper>
      <Root {...props} />
    </ProviderWrapper>
  )
}

export default _App;
