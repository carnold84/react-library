import React from 'react';

import Progress from './Progress';

export default {
  argTypes: {},
  component: Progress,
  title: 'Components/Progress',
};

const Template = (args) => <Progress {...args} />;

export const Main = Template.bind({});
Main.args = {
  size: 34,
};
