import React from 'react';

import ActionBar from './ActionBar';
import Typography from '../Typography';

export default {
  argTypes: {},
  component: ActionBar,
  title: 'Components/ActionBar',
};

const Template = (args) => <ActionBar justifyContent={'flex-end'} {...args} />;

export const Main = Template.bind({});
Main.args = {
  children: (
    <>
      <Typography mb={0}>Logo</Typography>
      <Typography mb={0}>Menu</Typography>
    </>
  ),
};
