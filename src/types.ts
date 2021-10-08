type ThemeColors = {
  [key: string]: any;
};

type ThemeFonts = {
  [key: string]: any;
};

type ThemeProps = {
  colors: ThemeColors;
  fonts: ThemeFonts;
};

export type ThemeVariables = {
  colors?: ThemeColors;
  fonts?: ThemeFonts;
  id: string;
  name: string;
  theme?: BaseTheme;
};

export type ThemeModuleVariables = {
  colors: ThemeColors;
  fonts: ThemeFonts;
};

export type BaseTheme = {
  [key: string]: ({ colors, fonts }: ThemeProps) => any;
};
