import { DefaultTheme } from 'styled-components';
import { neutral, primary, text } from './_colors';
import button from './button';
import global from './global';
import header from './header';

const defaultTheme: DefaultTheme = {
  button,
  colors: {
    primary,
    neutral,
    text,
  },
  global,
  header,
};

export default defaultTheme;
