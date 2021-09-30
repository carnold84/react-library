import styled from 'styled-components';

export const Wrapper = styled.header`
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.header.borderColor};
  display: flex;
  height: 50px;
  justify-content: space-between;
`;
