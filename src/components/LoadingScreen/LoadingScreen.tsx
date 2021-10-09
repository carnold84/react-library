import React from 'react';
import Progress from '../Progress';
import { Wrapper } from './LoadingScreen.styles';

type Props = {
  [x: string]: any;
};

/**
 * Fills container and shows a progress spinner in the centre.
 */
const LoadingScreen = (props: Props) => {
  return (
    <Wrapper {...props}>
      <Progress />
    </Wrapper>
  );
};

export default LoadingScreen;
