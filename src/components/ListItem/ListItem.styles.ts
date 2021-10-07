import styled from 'styled-components';
import Box from '../Box';

export const Wrapper = styled(Box).attrs({
  forwardedAs: 'li',
})`
  align-items: center;
  background-color: ${({ theme }) => theme.header.backgroundColor};
  border-bottom: 1px solid ${({ theme }) => theme.header.borderColor};
  display: flex;
`;

export const Content = styled(Box)`
  display: flex;
  height: 100%;
  padding: 15px 20px;
  width: 100%;
`;

export const ContentLeft = styled(Box)`
  display: flex;
`;

export const ContentMain = styled(Box)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const ContentRight = styled(Box)`
  display: flex;
`;
