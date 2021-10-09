import { ThemeModuleVariables } from '../types';

const typography = ({ colors, fonts }: ThemeModuleVariables) => {
  return {
    color: colors.text.color100,
    fontFamily: fonts.primary.family,
    fontWeight: fonts.primary.weight,
    _bold: {
      fontWeight: 500,
    },
  };
};

export default typography;
