import styled from 'styled-components';
import Box from '../Box';

export const Wrapper = styled(Box)`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Container = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.modal.backgroundColor};
  box-shadow: ${({ theme }) => theme.modal.boxShadow};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 400px;
  z-index: 1;
`;

export const Header = styled.div`
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.modal.header.borderColor};
  display: flex;
  justify-content: space-between;
  padding: 10px 15px 10px 20px;
  width: 100%;
`;

export const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
  width: 100%;
`;

export const Footer = styled.div`
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.modal.footer.borderColor};
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  width: 100%;
`;

export const Control = styled.div`
  align-items: center;
  display: flex;
`;

export const Overlay = styled.div`
  background-color: ${({ theme }) => theme.modal.overlay.backgroundColor};
  height: 100%;
  left: 0;
  opacity: 0.5;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 0;
`;
