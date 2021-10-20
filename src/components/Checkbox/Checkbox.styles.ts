import styled from 'styled-components';
import { Circle, CheckCircledOutline } from '../../icons';
import Box from '../Box';
import Typography from '../Typography';

const size = '20px';

// extend box so we can use styled stystem spacing, sizes etc
export const Wrapper = styled(Box)`
  display: inline-flex;
  position: relative;

  &.is_disabled {
    opacity: 0.4;
    pointer-events: none;
  }
`;

export const Label = styled(Typography).attrs({
  component: 'label',
})`
  align-items: center;
  color: ${({ theme }) => theme.checkbox.label.color};
  display: flex;
  margin: 0;
`;

export const Icon = styled.div`
  cursor: pointer;
  fill: ${({ theme }) => theme.checkbox.icon.fill};
  height: ${size};
  position: relative;
  width: ${size};
`;

export const Input = styled.input`
  appearance: none;
  cursor: pointer;
  height: 100%;
  left: 0;
  opacity: 0;
  padding: 0;
  position: absolute;
  top: 0;
  width: 100%;

  &:hover + ${Label} {
    color: ${({ theme }) => theme.checkbox._hover.label.color};
  }

  &:hover + ${Label} ${Icon} {
    fill: ${({ theme }) => theme.checkbox._hover.icon.fill};
  }
`;

export const Text = styled.span`
  margin: 0 0 0 6px;
`;

export const UncheckedIcon = styled(Circle)`
  height: ${size};
  left: 0;
  opacity: 1;
  padding: 0;
  position: absolute;
  top: 0;
  transition: opacity 300ms ease;
  width: ${size};

  ${Input}:checked + ${Label} & {
    opacity: 0;
  }
`;

export const CheckedIcon = styled(CheckCircledOutline)`
  height: ${size};
  left: 0;
  opacity: 0;
  padding: 0;
  position: absolute;
  top: 0;
  transition: opacity 300ms ease;
  width: ${size};

  ${Input}:checked + ${Label} & {
    opacity: 1;
  }
`;
