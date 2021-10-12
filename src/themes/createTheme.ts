import baseColors from './base/_colors';
import baseFonts from './base/_fonts';
import baseTheme from './base';
import { BaseTheme, ThemeColors, ThemeFonts } from './themeTypes';

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
    editor: theme.editor({ colors, fonts }),
    fonts,
    global: theme.global({ colors, fonts }),
    header: theme.header({ colors, fonts }),
    iconButton: theme.iconButton({ colors, fonts }),
    id,
    listItem: theme.listItem({ colors, fonts }),
    listItemText: theme.listItemText({ colors, fonts }),
    progress: theme.progress({ colors, fonts }),
    name,
    typography: theme.typography({ colors, fonts }),
  };

  return nextTheme;
};

export default createTheme;
