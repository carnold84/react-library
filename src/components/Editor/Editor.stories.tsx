import React from 'react';
import Box from '../Box';

import Editor from './Editor';

export default {
  argTypes: {},
  component: Editor,
  title: 'Components/Editor',
};

const Template = (args) => (
  <Box height={'200px'}>
    <Editor {...args} />
  </Box>
);

export const Main = Template.bind({});
Main.args = {
  content: 'Hello world!',
};
