import React, { ReactNode } from 'react';
import { Wrapper } from './ListItemText.styles';

type ListItemTitleProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  [x: string]: any;
};

/**
 * Title for list item.
 */
const ListItemText = ({
  children,
  variant = 'primary',
  ...rest
}: ListItemTitleProps) => {
  return (
    <Wrapper
      className={`is_${variant}`}
      component={variant === 'primary' ? 'h3' : 'p'}
      variant={'p'}
      weight={variant === 'primary' ? 'bold' : 'normal'}
      {...rest}>
      {children}
    </Wrapper>
  );
};

export default ListItemText;
