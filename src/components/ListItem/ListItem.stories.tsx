import React from 'react';

import ListItem from './ListItem';

export default {
  argTypes: {},
  component: ListItem,
  title: 'Components/List Item',
};

const Template = (args) => <ListItem {...args} />;

export const Main = Template.bind({});
Main.args = {
  children: (
    <>
      <div>Logo</div>
      <div>Menu</div>
    </>
  ),
};
