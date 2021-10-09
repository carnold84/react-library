import { addDecorator } from '@storybook/react';
import { withThemes } from 'storybook-addon-themes/react';
import App from '../src/components/App';
import Box from '../src/components/Box';
import darkTheme from '../src/themes/dark';
import defaultTheme from '../src/themes/default';
import orangeTheme from '../src/themes/orange';
import GlobalStyles from '../src/styles/global.styles';

//https://storybook.js.org/addons/storybook-addon-themes
const ThemeDecorator = ({ children, theme }) => {
  return (
    <App
      selectedThemeId={theme?.theme.id}
      themes={[defaultTheme, darkTheme, orangeTheme]}>
      <GlobalStyles />
      <Box
        p={20}
        style={{ backgroundColor: theme?.theme.colors.neutral.color100 }}>
        {children}
      </Box>
    </App>
  );
};
addDecorator(withThemes);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: { disable: true },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    clearable: false,
    default: defaultTheme.name,
    list: [
      {
        name: defaultTheme.name,
        color: defaultTheme.colors.neutral.color50,
        theme: defaultTheme,
      },
      {
        name: darkTheme.name,
        color: darkTheme.colors.neutral.color50,
        theme: darkTheme,
      },
      {
        name: orangeTheme.name,
        color: orangeTheme.colors.neutral.color50,
        theme: orangeTheme,
      },
    ],
    Decorator: ThemeDecorator,
  },
};

export const decorators = [
  (Story) => {
    return <Story />;
  },
];
