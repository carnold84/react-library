import { createGlobalStyle, DefaultTheme } from 'styled-components';

const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-family: ${({ theme }) => theme.global.htmlFontFamily};
    font-size: ${({ theme }) => theme.global.htmlFontSize};
    font-weight: ${({ theme }) => theme.global.htmlFontWeight};
  }

  body {
    color: ${({ theme }) => theme.global.color};
  }
`;

export default GlobalStyles;
