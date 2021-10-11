import { ThemeModuleVariables } from '../themeTypes';

export type IconButtonTypes = {
  fill: string;
  _disabled: {
    fill: string;
  };
  _hover: {
    fill: string;
  };
  _primary: {
    fill: string;
    _disabled: {
      fill: string;
    };
    _hover: {
      fill: string;
    };
  };
};

const button = ({ colors }: ThemeModuleVariables): IconButtonTypes => {
  return {
    fill: colors.text.color200,
    _disabled: {
      fill: colors.text.color400,
    },
    _hover: {
      fill: colors.primary.color500,
    },
    _primary: {
      fill: colors.primary.color500,
      _disabled: {
        fill: colors.primary.color200,
      },
      _hover: {
        fill: colors.primary.color400,
      },
    },
  };
};

export default button;
