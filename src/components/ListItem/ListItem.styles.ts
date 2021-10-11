import styled from 'styled-components';
import Box from '../Box';

export const Wrapper = styled(Box).attrs({
  forwardedAs: 'li',
})`
  align-items: center;
  background-color: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.listItem.borderColor};
  display: flex;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral.color200};
    color: ${({ theme }) => theme.colors.primary.color500};
  }

  &.is_active {
    background-color: ${({ theme }) => theme.colors.neutral.color200};
  }
`;

export const Content = styled(Box)`
  display: flex;
  height: 100%;
  padding: 12px 20px;
  width: 100%;
`;

export const ContentLeft = styled(Box)`
  display: flex;
  fill: currentColor;
`;

export const ContentMain = styled(Box)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
`;

export const ContentRight = styled(Box)`
  display: flex;
  fill: currentColor;
`;
