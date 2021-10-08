import baseColors from './base/_colors';
import baseFonts from './base/_fonts';
import baseTheme from './base';
import { BaseTheme, ThemeColors, ThemeFonts } from '../types';
import { DefaultTheme } from 'styled-components';

export type CreateThemeProps = {
  colors?: ThemeColors;
  fonts?: ThemeFonts;
  id: string;
  name: string;
  theme?: BaseTheme;
};

const createTheme = ({
  colors,
  fonts,
  id,
  name,
  theme,
}: CreateThemeProps): DefaultTheme => {
  colors = colors ?? baseColors;
  fonts = fonts ?? baseFonts;

  const nextTheme: DefaultTheme = {
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
