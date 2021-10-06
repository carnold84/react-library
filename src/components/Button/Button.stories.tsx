import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button, { ButtonProps } from './Button';

export default {
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    isDisabled: {
      control: {
        type: 'boolean',
      },
    },
    isPrimary: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      control: {
        type: null,
      },
    },
  },
  component: Button,
  title: 'Components/Button',
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <>
    <Button {...args}>Button</Button>
  </>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  onClick: () => {
    alert('Clicked!');
  },
};
