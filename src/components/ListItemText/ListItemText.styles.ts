import styled from 'styled-components';
import Typography from '../Typography';

export const Wrapper = styled(Typography)`
  color: inherit;
  margin: 0;
  text-decoration: none;

  &.is_secondary {
    font-size: 1.3rem;
    opacity: 0.8;
    margin: 1px 0 0;
  }
`;
