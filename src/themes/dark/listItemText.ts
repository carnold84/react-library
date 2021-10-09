import { ListItemTextTypes } from '../base/listItemText';
import { ThemeModuleVariables } from '../themeTypes';

const listItemText = ({ colors }: ThemeModuleVariables): ListItemTextTypes => {
  return {
    color: colors.text.color100,
    _secondary: {
      color: colors.text.color200,
    },
  };
};

export default listItemText;
