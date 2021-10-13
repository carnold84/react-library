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
    backgroundColor: colors.neutral.color300,
    boxShadow: '0 0 15px 0 rgba(0, 0, 0, 0.25)',
    footer: {
      borderColor: colors.neutral.color400,
    },
    header: {
      borderColor: colors.neutral.color400,
    },
    overlay: {
      backgroundColor: '#000000',
    },
  };
};

export default modal;
