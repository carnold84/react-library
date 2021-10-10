import React, { useState } from 'react';

import Typography from './Typography';

export default {
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    component: {
      control: {
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
        type: 'select',
      },
    },
    variant: {
      control: {
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
        type: 'select',
      },
    },
  },
  component: Typography,
  title: 'Components/Typography',
};

const Template = (args) => (
  <>
    <Typography width={'700px'} {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus vitae
      mi at tristique. Suspendisse porttitor ipsum a pulvinar vulputate.
    </Typography>
  </>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Typography',
  component: 'p',
  variant: 'p',
};

const Template2 = (args) => (
  <>
    <Typography variant={'h1'}>Heading 1</Typography>
    <Typography variant={'h2'}>Heading 2</Typography>
    <Typography variant={'h3'}>Heading 3</Typography>
    <Typography variant={'h4'}>Heading 4</Typography>
    <Typography variant={'h5'}>Heading 5</Typography>
    <Typography variant={'h6'}>Heading 6</Typography>
    <Typography variant={'p'}>Paragraph</Typography>
  </>
);

export const AllVariants = Template2.bind({});
AllVariants.args = {
  children: 'Typography',
  component: 'p',
  variant: 'p',
};

const Template3 = (args) => {
  const [value, setValue] = useState('Value');

  const onChange = (evt) => {
    setValue(evt.target.value);
  };

  return (
    <>
      <Typography {...args} onChange={onChange} value={value} />
    </>
  );
};

export const AsInput = Template3.bind({});
AsInput.args = {
  component: 'input',
  variant: 'h4',
};
