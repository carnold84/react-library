import { ProgressTypes } from '../base/progress';
import { ThemeModuleVariables } from '../themeTypes';

const progress = ({ colors }: ThemeModuleVariables): ProgressTypes => {
  return {
    fill: colors.primary.color300,
  };
};

export default progress;
