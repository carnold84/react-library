import App from '../src/components/App/App';
import darkTheme from '../src/themes/dark';
import defaultTheme from '../src/themes/default';
import GlobalStyles from '../src/styles/global.styles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <App themes={[defaultTheme, darkTheme]}>
      <GlobalStyles />
      <Story />
    </App>
  ),
];
