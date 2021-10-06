import { Theme } from 'styled-components';
import { neutral, primary, text } from './_colors';
import { primaryFont } from './_typography';
import button from './button';
import checkbox from './checkbox';
import global from './global';
import header from './header';

const darkTheme: Theme = {
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
  id: 'dark-theme',
  label: 'Dark',
};

export default darkTheme;
