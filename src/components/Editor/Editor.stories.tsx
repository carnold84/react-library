import React, { useState } from 'react';
import Box from '../Box';
import Button from '../Button';

import Editor from './Editor';

export default {
  argTypes: {},
  component: Editor,
  title: 'Components/Editor',
};

const Template = (args) => {
  const [content, setContent] = useState({ html: 'Hello world!' });

  return (
    <>
      <Button mb={3} onClick={() => setContent({ html: 'New Content!' })}>
        Change content
      </Button>
      <Box height={'200px'}>
        <Editor content={content} {...args} />
      </Box>
    </>
  );
};

export const Main = Template.bind({});
Main.args = {
  onUpdate: (content) => {
    console.log(content);
  },
};
