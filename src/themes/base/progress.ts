import { ThemeModuleVariables } from '../themeTypes';

export type ProgressTypes = {
  fill: string;
};

const progress = ({ colors }: ThemeModuleVariables): ProgressTypes => {
  return {
    fill: colors.primary.color500,
  };
};

export default progress;
