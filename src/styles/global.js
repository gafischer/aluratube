import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Helvetica', sans-serif;
    background-color: ${({ theme }) => theme.background.base};
    color: ${({ theme }) => theme.text.primary}
  }

  /* NextJS */
  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    max-width: 100%;
  }
  body {
    display: flex;
    flex: 1;
  }
  #__next {
    display: flex;
    flex: 1;
  }

  main {
    width: 100%;
  }

  /* Globals */
  a {
    text-decoration: none;
    opacity: 1;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`;

export default GlobalStyle;
