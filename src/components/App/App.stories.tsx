import React from 'react';
import { Story } from '@storybook/react';
import styled from 'styled-components';
import Button from '../Button/Button';
import darkTheme from '../../themes/dark';
import defaultTheme from '../../themes/default';

import App, { Props } from './App';

export default {
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    selectedThemeId: {
      control: {
        options: ['default-theme', 'dark-theme'],
        type: 'select',
      },
    },
    themes: {
      control: {
        type: null,
      },
    },
  },
  component: App,
  title: 'Components/App',
};

const Template: Story<Props> = (args) => <App {...args} />;

const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral.color100};
  box-sizing: border-box;
  height: 100px;
  padding: 20px;
  width: 100%;
`;

export const DefaultApp = Template.bind({});
DefaultApp.args = {
  children: (
    <Background>
      <Button isPrimary={true}>Example Button</Button>
    </Background>
  ),
  selectedThemeId: defaultTheme.id,
  themes: [defaultTheme, darkTheme],
};
