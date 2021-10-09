import baseColors from './base/_colors';
import baseFonts from './base/_fonts';
import baseTheme from './base';
import { BaseTheme, ThemeColors, ThemeFonts } from './types';

export type CreateThemeProps = {
  colors?: ThemeColors;
  fonts?: ThemeFonts;
  id: string;
  name: string;
  theme?: BaseTheme;
};

const createTheme = ({ colors, fonts, id, name, theme }: CreateThemeProps) => {
  colors = colors ?? baseColors;
  fonts = fonts ?? baseFonts;
  theme = theme ?? baseTheme;

  const nextTheme = {
    button: theme.button({ colors, fonts }),
    checkbox: theme.checkbox({ colors, fonts }),
    colors,
    fonts,
    global: theme.global({ colors, fonts }),
    header: theme.header({ colors, fonts }),
    id,
    listItemText: theme.listItemText({ colors, fonts }),
    name,
    typography: theme.typography({ colors, fonts }),
  };

  return nextTheme;
};

export default createTheme;
