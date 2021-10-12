import { ThemeModuleVariables } from '../themeTypes';

export type EditorTypes = {
  borderColor: string;
  content: {
    color: string;
  };
  menuBar: {
    borderColor: string;
    fill: string;
  };
};

const editor = ({ colors }: ThemeModuleVariables): EditorTypes => {
  return {
    borderColor: colors.neutral.color300,
    content: {
      color: colors.text.color200,
    },
    menuBar: {
      borderColor: colors.neutral.color300,
      fill: colors.text.color200,
    },
  };
};

export default editor;
