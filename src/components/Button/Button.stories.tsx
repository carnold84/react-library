import React from 'react';

import Button from './Button';

export default {
  argTypes: {},
  component: Button,
  title: 'Components/Button',
};

const Template = (args) => (
  <>
    <Button {...args} style={{ margin: '0 5px 0 0' }}>
      Default
    </Button>
    <Button {...args} isPrimary={true}>
      Primary
    </Button>
  </>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Button',
  isDisabled: true,
};
