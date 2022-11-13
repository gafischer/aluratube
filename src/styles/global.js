import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Helvetica', sans-serif;
    background-color: ${({ theme }) => theme.backgroundBase};
    color: ${({ theme}) => theme.textColorBase}
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
