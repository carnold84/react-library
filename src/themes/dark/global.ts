import { GlobalTypes } from '../base/global';
import { ThemeModuleVariables } from '../themeTypes';

const global = ({ fonts }: ThemeModuleVariables): GlobalTypes => {
  return {
    color: '#222222',
    htmlFontFamily: fonts.primary.family,
    htmlFontSize: '10px',
    htmlFontWeight: fonts.primary.weight,
  };
};

export default global;
