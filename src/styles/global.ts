import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.background};
    -webkit-font-smoothing: antialiased;
  }

  body,
  button,
  input,
  textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme.text};
  }
`;
