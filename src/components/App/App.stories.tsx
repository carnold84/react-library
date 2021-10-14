import React from 'react';
import { Story } from '@storybook/react';
import styled from 'styled-components';
import Button from '../Button/Button';
import darkTheme from '../../themes/dark';
import defaultTheme from '../../themes/default';

import App, { Props } from './App';
import useModals from './hooks/useModals';

export default {
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    selectedThemeId: {
      control: {
        options: ['default-theme', 'dark-theme'],
        type: 'select',
      },
    },
    themes: {
      control: {
        type: null,
      },
    },
  },
  component: App,
  title: 'Components/App',
};

const Template: Story<Props> = (args) => <App {...args} />;

const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral.color100};
  box-sizing: border-box;
  height: 100px;
  padding: 20px;
  width: 100%;
`;

const ModalContent = () => {
  const { addModal, removeModal } = useModals();
  const onAddModal = () => {
    addModal({
      content: 'Modal content',
      id: 'modal-1',
      title: 'My first modal!',
    });
  };
  return (
    <Background>
      <Button isPrimary={true} onClick={onAddModal}>
        Show modal
      </Button>
    </Background>
  );
};

export const DefaultApp = Template.bind({});
DefaultApp.args = {
  children: <ModalContent />,
  selectedThemeId: defaultTheme.id,
  themes: [defaultTheme, darkTheme],
};
