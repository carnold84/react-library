import App from '../src/components/App/App';
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
    <App theme={defaultTheme}>
      <GlobalStyles />
      <Story />
    </App>
  ),
];
