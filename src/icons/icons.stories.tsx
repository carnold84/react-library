import React from 'react';
import styled from 'styled-components';
import Typography from '../components/Typography';
import * as icons from './svg';

export default {
  title: 'Icons',
};

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 800px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(7, 1fr);
  }
`;

const Item = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 0 30px 0;
`;

const IconItem = ({ children, name }) => {
  return (
    <Item>
      {children}
      <Typography style={{ color: '#666666', margin: '8px 0 0' }}>
        {name}
      </Typography>
    </Item>
  );
};

const Template = (args) => (
  <IconGrid>
    {Object.entries(args.icons).map(([name, Icon]) => {
      return (
        <IconItem key={name} name={name}>
          <Icon />
        </IconItem>
      );
    })}
  </IconGrid>
);

export const Main = Template.bind({});
Main.args = {
  icons,
};
