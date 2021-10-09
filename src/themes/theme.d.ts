import 'styled-components';
import { ButtonTypes } from './base/button';
import { CheckboxTypes } from './base/checkbox';
import { GlobalTypes } from './base/global';
import { HeaderTypes } from './base/header';
import { ListItemTextTypes } from './base/listItemText';
import { TypographyTypes } from './base/typography';
import { ThemeColors, ThemeFonts } from './types';

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
