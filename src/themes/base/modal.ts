import { ThemeModuleVariables } from '../themeTypes';

export type ModalTypes = {
  backgroundColor: string;
  boxShadow: string;
  footer: {
    borderColor: string;
  };
  header: {
    borderColor: string;
  };
  overlay: {
    backgroundColor: string;
  };
};

const modal = ({ colors }: ThemeModuleVariables): ModalTypes => {
  return {
    backgroundColor: colors.neutral.color50,
    boxShadow: '0 0 15px 0 rgba(0, 0, 0, 0.35)',
    footer: {
      borderColor: colors.neutral.color300,
    },
    header: {
      borderColor: colors.neutral.color300,
    },
    overlay: {
      backgroundColor: '#000000',
    },
  };
};

export default modal;
