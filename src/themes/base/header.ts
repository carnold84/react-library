import { ThemeModuleVariables } from '../themeTypes';

export type HeaderTypes = {
  backgroundColor: string;
  borderColor: string;
};

const header = ({ colors }: ThemeModuleVariables): HeaderTypes => {
  return {
    backgroundColor: colors.neutral.color50,
    borderColor: colors.neutral.color300,
  };
};

export default header;
