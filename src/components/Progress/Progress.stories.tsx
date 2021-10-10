import React from 'react';

import Progress from './Progress';

export default {
  argTypes: {
    size: {
      control: {
        options: ['small', 'medium', 'large'],
        type: 'select',
      },
    },
  },
  component: Progress,
  title: 'Components/Progress',
};

const Template = (args) => <Progress {...args} />;

export const Main = Template.bind({});
Main.args = {
  size: 'medium',
};
