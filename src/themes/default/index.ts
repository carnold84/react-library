import { Theme } from 'styled-components';
import { neutral, primary, text } from './_colors';
import { primaryFont } from './_fonts';
import button from './button';
import checkbox from './checkbox';
import global from './global';
import header from './header';
import typography from './typography';

const defaultTheme: Theme = {
  button,
  checkbox,
  colors: {
    primary,
    neutral,
    text,
  },
  fontFamily: primaryFont.family,
  global,
  header,
  id: 'default-theme',
  label: 'Default',
  typography,
};

export default defaultTheme;
