import { ThemeModuleVariables } from '../types';

export type ListItemTextTypes = {
  color: string;
  _secondary: {
    color: string;
  };
};

const listItemText = ({ colors }: ThemeModuleVariables): ListItemTextTypes => {
  return {
    color: colors.text.color100,
    _secondary: {
      color: colors.text.color200,
    },
  };
};

export default listItemText;
