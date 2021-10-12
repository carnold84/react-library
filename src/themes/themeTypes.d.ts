import 'styled-components';
import { ButtonTypes } from './base/button';
import { CheckboxTypes } from './base/checkbox';
import { EditorTypes } from './base/editor';
import { GlobalTypes } from './base/global';
import { HeaderTypes } from './base/header';
import { IconButtonTypes } from './base/iconButton';
import { ListItemTypes } from './base/listItem';
import { ListItemTextTypes } from './base/listItemText';
import { ProgressTypes } from './base/progress';
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
  editor: ({ colors, fonts }: ThemeModuleVariables) => EditorTypes;
  global: ({ colors, fonts }: ThemeModuleVariables) => GlobalTypes;
  header: ({ colors, fonts }: ThemeModuleVariables) => HeaderTypes;
  iconButton: ({ colors, fonts }: ThemeModuleVariables) => IconButtonTypes;
  listItem: ({ colors, fonts }: ThemeModuleVariables) => ListItemTypes;
  listItemText: ({ colors, fonts }: ThemeModuleVariables) => ListItemTextTypes;
  progress: ({ colors, fonts }: ThemeModuleVariables) => ProgressTypes;
  typography: ({ colors, fonts }: ThemeModuleVariables) => TypographyTypes;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    button: ButtonTypes;
    checkbox: CheckboxTypes;
    colors: ThemeColors;
    editor: EditorTypes;
    fonts: ThemeFonts;
    global: GlobalTypes;
    header: HeaderTypes;
    iconButton: IconButtonTypes;
    id: string;
    listItem: ListItemTypes;
    listItemText: ListItemTextTypes;
    progress: ProgressTypes;
    name: string;
    typography: TypographyTypes;
  }
}
