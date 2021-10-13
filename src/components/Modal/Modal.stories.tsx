import React from 'react';

import Button from '../Button';
import Modal from './Modal';

export default {
  argTypes: {},
  component: Modal,
  title: 'Components/Modal',
};

const Template = (args) => <Modal height={'300px'} {...args} />;

export const Main = Template.bind({});
Main.args = {
  children: <div>Content</div>,
  footerContentLeft: <Button>Back</Button>,
  footerContentRight: (
    <>
      <Button mr={2}>Cancel</Button>
      <Button isPrimary={true}>Save</Button>
    </>
  ),
  title: 'Modal example',
};
