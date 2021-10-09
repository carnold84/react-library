import { CheckboxTypes } from '../base/checkbox';
import { ThemeModuleVariables } from '../themeTypes';

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
