import React from 'react';
import styled from 'styled-components';
import Typography from '../components/Typography';
import * as arrow from './svg/arrow';
import * as attention from './svg/attention';
import * as basic from './svg/basic';
import * as brand from './svg/brand';
import * as calendar from './svg/calendar';
import * as chart from './svg/chart';
import * as communication from './svg/communication';
import * as device from './svg/device';
import * as edit from './svg/edit';
import * as experimental from './svg/experimental';
import * as file from './svg/file';
import * as grid from './svg/grid';
import * as home from './svg/home';
import * as media from './svg/media';
import * as menu from './svg/menu';
import * as misc from './svg/misc';
import * as notification from './svg/notification';
import * as system from './svg/system';
import * as user from './svg/user';

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

export const Arrow = Template.bind({});
Arrow.args = {
  icons: arrow,
};

export const Attention = Template.bind({});
Attention.args = {
  icons: attention,
};

export const Basic = Template.bind({});
Basic.args = {
  icons: basic,
};

export const Brand = Template.bind({});
Brand.args = {
  icons: brand,
};

export const Calendar = Template.bind({});
Calendar.args = {
  icons: calendar,
};

export const Chart = Template.bind({});
Chart.args = {
  icons: chart,
};

export const Communication = Template.bind({});
Communication.args = {
  icons: communication,
};

export const Device = Template.bind({});
Device.args = {
  icons: device,
};

export const Edit = Template.bind({});
Edit.args = {
  icons: edit,
};

export const Experimental = Template.bind({});
Experimental.args = {
  icons: experimental,
};

export const File = Template.bind({});
File.args = {
  icons: file,
};

export const Grid = Template.bind({});
Grid.args = {
  icons: grid,
};

export const Home = Template.bind({});
Home.args = {
  icons: home,
};

export const Media = Template.bind({});
Media.args = {
  icons: media,
};

export const Menu = Template.bind({});
Menu.args = {
  icons: menu,
};

export const Misc = Template.bind({});
Misc.args = {
  icons: misc,
};

export const Notification = Template.bind({});
Notification.args = {
  icons: notification,
};

export const System = Template.bind({});
System.args = {
  icons: system,
};

export const User = Template.bind({});
User.args = {
  icons: user,
};
