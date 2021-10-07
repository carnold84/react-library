import React from 'react';

import ListItemText from './ListItemText';

export default {
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    variant: {
      control: {
        options: ['primary', 'secondary'],
        type: 'select',
      },
    },
  },
  component: ListItemText,
  title: 'Components/List Item Text',
};

const Template = (args) => <ListItemText {...args} />;

export const Main = Template.bind({});
Main.args = {
  children: 'List Item Text',
  variant: 'primary',
};
