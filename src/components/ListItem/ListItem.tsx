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
  component?: any;
  contentLeft?: ReactNode;
  contentRight?: ReactNode;
  isActive?: boolean;
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
  isActive = false,
  ...rest
}: ListItemProps) => {
  return (
    <Wrapper className={isActive ? 'is_active' : ''} {...rest}>
      <Content>
        {contentLeft && <ContentLeft>{contentLeft}</ContentLeft>}
        <ContentMain forwardedAs={component}>{children}</ContentMain>
        {contentRight && <ContentRight>{contentRight}</ContentRight>}
      </Content>
    </Wrapper>
  );
};

export default ListItem;
