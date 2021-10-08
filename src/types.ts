export type ThemeColors = {
  [key: string]: any;
};

export type ThemeFonts = {
  [key: string]: any;
};

export type ThemeModuleVariables = {
  colors: ThemeColors;
  fonts: ThemeFonts;
};

export type BaseTheme = {
  [key: string]: ({ colors, fonts }: ThemeModuleVariables) => object | object;
};
