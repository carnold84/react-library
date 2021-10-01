import React from 'react';

import Box from './Box';

export default {
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  component: Box,
  title: 'Components/Box',
};

const Template = (args) => <Box {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Box',
  mt: 2,
};
