import { ThemeModuleVariables } from '../types';

const header = ({ colors }: ThemeModuleVariables) => {
  return {
    backgroundColor: colors.neutral.color50,
    borderColor: colors.neutral.color300,
  };
};

export default header;
