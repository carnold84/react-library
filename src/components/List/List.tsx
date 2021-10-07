import React, { ReactNode } from 'react';
import { Wrapper } from './List.styles';

type ListProps = {
  children: ReactNode;
  [x: string]: any;
};

/**
 * Primary UI component for user interaction
 */
const List = ({ children, ...rest }: ListProps) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export default List;
