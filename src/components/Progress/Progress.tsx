import React from 'react';
import { Circle, Loader, Path, Wrapper } from './Progress.styles';

type Props = {
  [x: string]: any;
};

/**
 * Progress spinner to display loading state.
 */
const Progress = (props: Props) => {
  return (
    <Wrapper {...props}>
      <Loader>
        <Circle viewBox="25 25 50 50">
          <Path
            cx={50}
            cy={50}
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
