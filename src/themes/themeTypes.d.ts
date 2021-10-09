import 'styled-components';
import { ButtonTypes } from './base/button';
import { CheckboxTypes } from './base/checkbox';
import { GlobalTypes } from './base/global';
import { HeaderTypes } from './base/header';
import { ListItemTextTypes } from './base/listItemText';
import { TypographyTypes } from './base/typography';

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
  button: ({ colors, fonts }: ThemeModuleVariables) => ButtonTypes;
  checkbox: ({ colors, fonts }: ThemeModuleVariables) => CheckboxTypes;
  global: ({ colors, fonts }: ThemeModuleVariables) => GlobalTypes;
  header: ({ colors, fonts }: ThemeModuleVariables) => HeaderTypes;
  listItemText: ({ colors, fonts }: ThemeModuleVariables) => ListItemTextTypes;
  typography: ({ colors, fonts }: ThemeModuleVariables) => TypographyTypes;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    button: ButtonTypes;
    checkbox: CheckboxTypes;
    colors: ThemeColors;
    fonts: ThemeFonts;
    global: GlobalTypes;
    header: HeaderTypes;
    id: string;
    listItemText: ListItemTextTypes;
    name: string;
    typography: TypographyTypes;
  }
}
