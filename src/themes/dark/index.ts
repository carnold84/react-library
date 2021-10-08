import colors from './_colors';
import fonts from './_fonts';
import button from './button';
import checkbox from './checkbox';
import global from './global';
import header from './header';
import listItemText from './listItemText';
import typography from './typography';

import createTheme from '../createTheme';

export default createTheme({
  colors,
  fonts,
  id: 'dark-theme',
  name: 'Dark',
  theme: {
    button,
    checkbox,
    global,
    header,
    listItemText,
    typography,
  },
});
