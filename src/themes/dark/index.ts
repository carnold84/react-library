import { Theme } from 'styled-components';
import { neutral, primary, text } from './_colors';
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
  global,
  header,
  id: 'dark-theme',
  label: 'Dark',
};

export default defaultTheme;
