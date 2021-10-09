import { ThemeModuleVariables } from '../types';

const global = ({ fonts }: ThemeModuleVariables) => {
  return {
    color: '#222222',
    htmlFontFamily: fonts.primary.family,
    htmlFontSize: '10px',
    htmlFontWeight: fonts.primary.weight,
  };
};

export default global;
