import { ThemeModuleVariables } from '../../types';

const listItemText = ({ colors }: ThemeModuleVariables) => {
  return {
    color: colors.text.color100,
    _secondary: {
      color: colors.text.color200,
    },
  };
};

export default listItemText;
