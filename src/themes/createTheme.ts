import baseColors from './base/_colors';
import baseFonts from './base/_fonts';
import baseTheme from './base';
import { ThemeVariables } from '../types';

export type NextThemeVariables = {
  [key: string]: any;
  id?: string;
  name?: string;
};

const createTheme = ({ colors, fonts, id, name, theme }: ThemeVariables) => {
  colors = colors ?? baseColors;
  fonts = fonts ?? baseFonts;

  const nextTheme: NextThemeVariables = {
    colors,
    fonts,
    id,
    name,
  };

  for (const [key, value] of Object.entries(baseTheme)) {
    nextTheme[key] = value({ colors, fonts });
  }

  if (theme) {
    for (const [key, value] of Object.entries(theme)) {
      let themeValues = value({ colors, fonts });
      console.log(themeValues);
      nextTheme[key] = {
        ...nextTheme,
        ...themeValues,
      };
    }
  }

  return nextTheme;
};

export default createTheme;
