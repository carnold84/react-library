import React from 'react';
import { Circle, Loader, Path, Wrapper } from './Progress.styles';

type Props = {
  size?: 'small' | 'medium' | 'large';
  [x: string]: any;
};

/**
 * Progress spinner to display loading state.
 */
const Progress = ({ size = 'medium', ...rest }: Props) => {
  let diameter = 34;

  if (size === 'small') {
    diameter = 26;
  } else if (size === 'large') {
    diameter = 42;
  }

  return (
    <Wrapper diameter={diameter} {...rest}>
      <Loader diameter={diameter}>
        <Circle diameter={diameter} viewBox="25 25 50 50">
          <Path
            cx={50}
            cy={50}
            diameter={diameter}
            r={15}
            fill={'none'}
            stroke-width={'3'}
            stroke-miterlimit={'10'}
          />
        </Circle>
      </Loader>
    </Wrapper>
  );
};

export default Progress;
