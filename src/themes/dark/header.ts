import { HeaderTypes } from '../base/header';
import { ThemeModuleVariables } from '../themeTypes';

const header = ({ colors }: ThemeModuleVariables): HeaderTypes => {
  return {
    backgroundColor: colors.neutral.color50,
    borderColor: colors.neutral.color300,
  };
};

export default header;
