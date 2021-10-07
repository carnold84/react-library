import React, { ComponentType, FunctionComponent, ReactNode } from 'react';
import {
  Content,
  ContentLeft,
  ContentMain,
  ContentRight,
  Wrapper,
} from './ListItem.styles';

type ListItemProps = {
  children: ReactNode;
  component?: FunctionComponent | ComponentType | string;
  contentLeft?: ReactNode;
  contentRight?: ReactNode;
  [x: string]: any;
};

/**
 * Primary UI component for user interaction
 */
const ListItem = ({
  children,
  component = 'div',
  contentLeft,
  contentRight,
  ...rest
}: ListItemProps) => {
  return (
    <Wrapper {...rest}>
      <Content forwardedAs={component}>
        {contentLeft && <ContentLeft>{contentLeft}</ContentLeft>}
        <ContentMain>{children}</ContentMain>
        {contentRight && <ContentRight>{contentRight}</ContentRight>}
      </Content>
    </Wrapper>
  );
};

export default ListItem;
