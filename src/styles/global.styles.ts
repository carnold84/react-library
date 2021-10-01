import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    color: ${({ theme }) => theme.global.color};
  }
`;

export default GlobalStyles;
