import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.global.color};
  }
`;

export default GlobalStyles;
