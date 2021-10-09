import { ThemeModuleVariables } from '../types';

export type CheckboxTypes = {
  icon: {
    fill: string;
  };
  label: {
    color: string;
  };
  _hover: {
    icon: {
      fill: string;
    };
    label: {
      color: string;
    };
  };
};

const checkbox = ({ colors }: ThemeModuleVariables): CheckboxTypes => {
  return {
    icon: {
      fill: colors.text.color200,
    },
    label: {
      color: colors.text.color100,
    },
    _hover: {
      icon: {
        fill: colors.primary.color500,
      },
      label: {
        color: colors.primary.color500,
      },
    },
  };
};

export default checkbox;
