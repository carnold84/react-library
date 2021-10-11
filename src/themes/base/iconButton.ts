import { ThemeModuleVariables } from '../themeTypes';

export type IconButtonTypes = {
  color: string;
  _disabled: {
    color: string;
  };
  _hover: {
    color: string;
  };
  _primary: {
    color: string;
    _disabled: {
      color: string;
    };
    _hover: {
      color: string;
    };
  };
};

const button = ({ colors }: ThemeModuleVariables): IconButtonTypes => {
  return {
    color: colors.text.color200,
    _disabled: {
      color: colors.text.color400,
    },
    _hover: {
      color: colors.primary.color500,
    },
    _primary: {
      color: colors.primary.color500,
      _disabled: {
        color: colors.primary.color200,
      },
      _hover: {
        color: colors.primary.color400,
      },
    },
  };
};

export default button;
