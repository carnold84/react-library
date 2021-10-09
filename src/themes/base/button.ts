import { ThemeModuleVariables } from '../themeTypes';

export type ButtonTypes = {
  bgColor: string;
  borderColor: string;
  color: string;
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
  _disabled: {
    bgColor: string;
    borderColor: string;
    color: string;
  };
  _hover: {
    bgColor: string;
    borderColor: string;
    color: string;
  };
  _primary: {
    bgColor: string;
    borderColor: string;
    color: string;
    _disabled: {
      bgColor: string;
      borderColor: string;
      color: string;
    };
    _hover: {
      bgColor: string;
      borderColor: string;
      color: string;
    };
  };
};

const button = ({ colors, fonts }: ThemeModuleVariables): ButtonTypes => {
  return {
    bgColor: colors.neutral.color50,
    borderColor: colors.neutral.color400,
    color: colors.text.color200,
    fontFamily: fonts.primary.family,
    fontSize: '1.4rem',
    fontWeight: fonts.primary.weight,
    _disabled: {
      bgColor: colors.neutral.color50,
      borderColor: colors.neutral.color400,
      color: colors.text.color400,
    },
    _hover: {
      bgColor: colors.neutral.color50,
      borderColor: colors.neutral.color900,
      color: colors.text.color100,
    },
    _primary: {
      bgColor: colors.primary.color500,
      borderColor: colors.primary.color500,
      color: colors.text.alt100,
      _disabled: {
        bgColor: colors.primary.color200,
        borderColor: colors.primary.color200,
        color: colors.text.alt100,
      },
      _hover: {
        bgColor: colors.primary.color400,
        borderColor: colors.primary.color400,
        color: colors.text.alt100,
      },
    },
  };
};

export default button;
