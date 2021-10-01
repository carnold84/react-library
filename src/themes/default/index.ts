import { Theme } from 'styled-components';
import { neutral, primary, text } from './_colors';
import { primaryFont } from './_typography';
import button from './button';
import global from './global';
import header from './header';

const defaultTheme: Theme = {
  button,
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
};

export default defaultTheme;
