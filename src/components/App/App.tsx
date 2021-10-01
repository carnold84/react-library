import React from 'react';
import { Theme, ThemeProvider } from 'styled-components';
import defaultTheme from '../../themes/default';

export interface Props {
  children: React.ReactNode;
  selectedThemeId?: string;
  themes?: Array<Theme>;
}

interface ThemesById {
  [index: string]: Theme;
}

/**
 * Wrapper component that provides theming for components.
 *
 * This must wrap the all the elements, so it's recommended adding at
 * the top level of your application.
 */
const App = ({ children, selectedThemeId, themes }: Props) => {
  let selectedTheme: Theme;
  const themesById: ThemesById = {};

  if (themes) {
    themes.forEach((theme: Theme) => {
      themesById[theme.id] = theme;
    });
    selectedTheme = themesById[selectedThemeId ?? themes[0].id];
  } else {
    themesById[defaultTheme.id] = defaultTheme;
    selectedTheme = themesById[defaultTheme.id];
  }

  return <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>;
};

export default App;
