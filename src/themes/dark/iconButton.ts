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
  _active: {
    bgColor: string;
    borderColor: string;
    fill: string;
    _disabled: {
      bgColor: string;
      borderColor: string;
      fill: string;
    };
    _hover: {
      bgColor: string;
      borderColor: string;
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
        fill: colors.primary.color300,
      },
    },
    _active: {
      bgColor: colors.primary.color400,
      borderColor: colors.primary.color500,
      fill: colors.text.color200,
      _disabled: {
        bgColor: colors.primary.color100,
        borderColor: colors.primary.color300,
        fill: colors.primary.color200,
      },
      _hover: {
        bgColor: colors.primary.color600,
        borderColor: colors.primary.color600,
        fill: colors.text.color100,
      },
    },
  };
};

export default button;
