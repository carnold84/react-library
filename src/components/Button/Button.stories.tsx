import React from 'react';

import Button from './Button';

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
};

const Template = (args) => (
  <>
    <Button className={'test'} {...args}>
      Button
    </Button>
  </>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  onClick: () => {
    alert('Clicked!');
  },
};
