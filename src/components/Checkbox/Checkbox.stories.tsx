import React from 'react';

import Checkbox from './Checkbox';

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
  component: Checkbox,
  title: 'Components/Checkbox',
};

const Template = (args) => (
  <>
    <Checkbox {...args}>Checkbox</Checkbox>
  </>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Checkbox',
  onClick: () => {
    alert('Clicked!');
  },
};
