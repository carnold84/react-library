import React from 'react';

import Header from './Header';

export default {
  argTypes: {},
  component: Header,
  title: 'Components/Header',
};

const Template = (args) => <Header {...args} />;

export const Main = Template.bind({});
Main.args = {
  children: (
    <>
      <div>Logo</div>
      <div>Menu</div>
    </>
  ),
};
