import React from 'react';
import { Story, Meta } from '@storybook/react';

import IconButton, { IconButtonProps } from './IconButton';
import { Trash } from '../../icons';

export default {
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    component: {
      control: {
        type: null,
      },
    },
    isActive: {
      control: {
        type: 'boolean',
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
  component: IconButton,
  title: 'Components/IconButton',
} as Meta;

const Template: Story<IconButtonProps> = (args) => (
  <>
    <IconButton {...args}>
      <Trash height={20} width={20} />
    </IconButton>
  </>
);

export const Default = Template.bind({});
Default.args = {
  children: 'IconButton',
  isActive: false,
  isDisabled: false,
  isPrimary: false,
  onClick: () => {
    alert('Clicked!');
  },
};
