import { ThemeModuleVariables } from '../themeTypes';

export type IconButtonTypes = {
  fill: string;
  _disabled: {
    fill: string;
  };
  _hover: {
    fill: string;
  };
  _focus: {
    fill: string;
    outline: string;
  };
  _primary: {
    fill: string;
    _disabled: {
      fill: string;
    };
    _hover: {
      fill: string;
    };
    _focus: {
      fill: string;
      outline: string;
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
    _focus: {
      fill: string;
      outline: string;
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
    _focus: {
      fill: colors.primary.color500,
      outline: `2px solid ${colors.primary.color200}`,
    },
    _primary: {
      fill: colors.primary.color500,
      _disabled: {
        fill: colors.primary.color200,
      },
      _hover: {
        fill: colors.primary.color400,
      },
      _focus: {
        fill: colors.primary.color400,
        outline: `2px solid ${colors.primary.color200}`,
      },
    },
    _active: {
      bgColor: colors.primary.color400,
      borderColor: colors.primary.color500,
      fill: colors.text.alt200,
      _disabled: {
        bgColor: colors.primary.color100,
        borderColor: colors.primary.color300,
        fill: colors.primary.color200,
      },
      _hover: {
        bgColor: colors.primary.color600,
        borderColor: colors.primary.color600,
        fill: colors.text.alt100,
      },
      _focus: {
        fill: colors.text.alt100,
        outline: `2px solid ${colors.primary.color200}`,
      },
    },
  };
};

export default button;
