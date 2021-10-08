import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/global.styles';
import defaultTheme from '../../themes/default';

export interface Props {
  children: React.ReactNode;
  selectedThemeId?: string;
  themes?: Array<DefaultTheme>;
}

interface ThemesById {
  [index: string]: DefaultTheme;
}

/**
 * Wrapper component that provides theming for components.
 *
 * This must wrap the all the elements, so it's recommended adding at
 * the top level of your application.
 */
const App = ({ children, selectedThemeId, themes }: Props) => {
  let selectedTheme: DefaultTheme;
  const themesById: ThemesById = {};

  if (themes) {
    themes.forEach((theme: DefaultTheme) => {
      themesById[theme.id] = theme;
    });
    selectedTheme = themesById[selectedThemeId ?? themes[0].id];
  } else {
    themesById[defaultTheme.id] = defaultTheme;
    selectedTheme = themesById[defaultTheme.id];
  }

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default App;
