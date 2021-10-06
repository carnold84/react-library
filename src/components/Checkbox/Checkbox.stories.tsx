import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';

import Checkbox, { CheckboxProps } from './Checkbox';

export default {
  argTypes: {
    isDisabled: {
      control: {
        type: 'boolean',
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    onChange: {
      control: {
        type: null,
      },
    },
  },
  component: Checkbox,
  title: 'Components/Checkbox',
} as Meta;

const Template: Story<CheckboxProps> = (args) => {
  const [value, setValue] = useState(false);

  const onChange = () => {
    setValue(!value);
  };

  return (
    <>
      <Checkbox {...args} onChange={onChange} value={value} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  id: 'my-checkbox',
  label: 'Check me!',
};
