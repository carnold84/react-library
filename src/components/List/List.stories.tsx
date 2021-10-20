import React from 'react';

import Checkbox from '../Checkbox';
import List from './List';
import ListItem from '../ListItem';
import ListItemText from '../ListItemText/ListItemText';
import { NavArrowRight } from '../../icons';

export default {
  argTypes: {},
  component: List,
  title: 'Components/List',
};

const Template = (args) => <List maxWidth={'400px'} {...args} />;

export const Main = Template.bind({});
Main.args = {
  children: (
    <>
      <ListItem
        contentLeft={
          <Checkbox
            id={'checkbox'}
            mr={2}
            value={true}
            onChange={() => console.log('change')}
          />
        }>
        <ListItemText>Primary text</ListItemText>
        <ListItemText variant={'secondary'}>Secondary text</ListItemText>
      </ListItem>
      <ListItem
        contentLeft={
          <Checkbox
            id={'checkbox2'}
            mr={2}
            value={false}
            onChange={() => console.log('change')}
          />
        }>
        <ListItemText>Single line item</ListItemText>
      </ListItem>
      <ListItem contentRight={<NavArrowRight />}>
        <ListItemText>Right content</ListItemText>
      </ListItem>
    </>
  ),
};
