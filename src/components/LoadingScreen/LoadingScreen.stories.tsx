import React from 'react';

import LoadingScreen from './LoadingScreen';

export default {
  argTypes: {},
  component: LoadingScreen,
  title: 'Components/LoadingScreen',
};

const Template = (args) => (
  <div style={{ height: '200px', position: 'relative', width: '100%' }}>
    <LoadingScreen {...args} />
  </div>
);

export const Main = Template.bind({});
Main.args = {};
