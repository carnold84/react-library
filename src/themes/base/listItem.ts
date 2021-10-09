import { ThemeModuleVariables } from '../themeTypes';

export type ListItemTypes = {
  borderColor: string;
};

const listItem = ({ colors, fonts }: ThemeModuleVariables): ListItemTypes => {
  return {
    borderColor: colors.neutral.color400,
  };
};

export default listItem;
