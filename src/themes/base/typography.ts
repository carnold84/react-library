import { ThemeModuleVariables } from '../types';

export type TypographyTypes = {
  color: string;
  fontFamily: string;
  fontWeight: number;
  _bold: {
    fontWeight: number;
  };
};

const typography = ({
  colors,
  fonts,
}: ThemeModuleVariables): TypographyTypes => {
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
