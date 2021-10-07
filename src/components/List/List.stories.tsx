import React from 'react';

import List from './List';
import ListItem from '../ListItem';
import ListItemText from '../ListItemText/ListItemText';

export default {
  argTypes: {},
  component: List,
  title: 'Components/List',
};

const Template = (args) => <List {...args} />;

export const Main = Template.bind({});
Main.args = {
  children: (
    <>
      <ListItem>
        <ListItemText>Primary item text</ListItemText>
        <ListItemText variant={'secondary'}>Secondary item text</ListItemText>
      </ListItem>
      <ListItem>Menu</ListItem>
    </>
  ),
};
