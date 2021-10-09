import styled, { keyframes } from 'styled-components';
import Box from '../Box';

const rotate = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

const dash = keyframes`
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
`;

export const Wrapper = styled(Box)`
  width: 34px;
  height: 34px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Loader = styled.div`
  position: relative;
  margin: 0 auto;
  width: 34px;

  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

export const Circle = styled.svg`
  position: absolute;
  width: 34px;
  height: 34px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  animation: ${rotate} 2s linear infinite;
  transform-origin: center center;
  margin: auto;
  stroke: ${({ theme }) => theme.progress.fill};
`;

export const Path = styled.circle`
  stroke-width: 3px;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: ${dash} 1.5s ease-in-out infinite;
  stroke-linecap: round;
`;
