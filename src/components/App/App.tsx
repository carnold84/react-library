import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { Wrapper } from './App.styles';
import defaultTheme from '../../themes/default';

export type Props = {
  children: React.ReactNode;
  theme?: DefaultTheme;
  [x: string]: any;
};

/**
 * Wrapper component that provides theming for components.
 *
 * This must wrap the all the elements, so it's recommended adding at
 * the top level of your application.
 */
const App = ({ children, theme, ...props }: Props) => {
  return (
    <Wrapper {...props}>
      <ThemeProvider theme={theme ?? defaultTheme}>{children}</ThemeProvider>
    </Wrapper>
  );
};

export default App;
