import { ThemeModuleVariables } from '../types';

export type GlobalTypes = {
  color: string;
  htmlFontFamily: string;
  htmlFontSize: string;
  htmlFontWeight: number;
};

const global = ({ fonts }: ThemeModuleVariables): GlobalTypes => {
  return {
    color: '#222222',
    htmlFontFamily: fonts.primary.family,
    htmlFontSize: '10px',
    htmlFontWeight: fonts.primary.weight,
  };
};

export default global;
