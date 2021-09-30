import React from 'react';
import { Story } from '@storybook/react';
import Button from '../Button/Button';
import defaultTheme from '../../themes/default';

import App, { Props } from './App';

export default {
  argTypes: {},
  component: App,
  title: 'Components/App',
};

const Template: Story<Props> = (args) => <App {...args} />;

export const DefaultTheme = Template.bind({});
DefaultTheme.args = {
  children: <Button isPrimary={true}>Example Button</Button>,
  theme: defaultTheme,
};

export const CustomTheme = Template.bind({});
CustomTheme.args = {
  children: <Button isPrimary={true}>Example Button</Button>,
  theme: {
    ...defaultTheme,
    button: {
      ...defaultTheme.button,
      bgColor: 'crimson',
    },
  },
};
