import React from 'react';

import ListItem from './ListItem';
import { LocationOutline } from '../../icons';
import ListItemText from '../ListItemText/ListItemText';

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
      <ListItemText>Primary item text</ListItemText>
      <ListItemText variant={'secondary'}>Secondary item text</ListItemText>
    </>
  ),
  contentLeft: (
    <LocationOutline style={{ alignSelf: 'center', margin: '0 15px 0 0' }} />
  ),
};
