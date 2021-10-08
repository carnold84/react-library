import { ThemeModuleVariables } from '../../types';

const button = ({ colors, fonts }: ThemeModuleVariables) => {
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
