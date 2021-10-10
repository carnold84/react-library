import styled, { keyframes } from 'styled-components';

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

type Props = {
  diameter: number;
};

export const Wrapper = styled.div<Props>`
  bottom: 0;
  height: ${({ diameter }) => diameter}px;
  left: 0;
  right: 0;
  top: 0;
  width: ${({ diameter }) => diameter}px;
`;

export const Loader = styled.div<Props>`
  position: relative;
  margin: 0 auto;
  width: ${({ diameter }) => diameter}px;

  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

export const Circle = styled.svg<Props>`
  animation: ${rotate} 2s linear infinite;
  bottom: 0;
  height: ${({ diameter }) => diameter}px;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  stroke: ${({ theme }) => theme.colors.primary.color500};
  top: 0;
  transform-origin: center center;
  width: ${({ diameter }) => diameter}px;
`;

export const Path = styled.circle<Props>`
  animation: ${dash} 1.5s ease-in-out infinite;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  stroke-width: 3px;
`;
