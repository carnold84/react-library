import React, { ReactNode } from 'react';
import { CloseSmall } from '../../icons';
import IconButton from '../IconButton';
import Typography from '../Typography';
import {
  Container,
  Content,
  Control,
  Footer,
  Header,
  Overlay,
  Wrapper,
} from './Modal.styles';

type Props = {
  children: ReactNode;
  footerContentLeft?: ReactNode;
  footerContentRight?: ReactNode;
  onDismiss?(id: string): void;
  title: string;
  [x: string]: any;
};

/**
 * Component for displaying information over the current content.
 */
const Modal = ({
  children,
  footerContentLeft,
  footerContentRight,
  id,
  onDismiss,
  title,
  ...rest
}: Props) => {
  return (
    <Wrapper id={id} {...rest}>
      <Container>
        <Header>
          <Typography component={'h1'} mb={0} variant={'h4'}>
            {title}
          </Typography>
          {onDismiss && (
            <IconButton onClick={() => onDismiss(id)}>
              <CloseSmall />
            </IconButton>
          )}
        </Header>
        <Content>{children}</Content>
        {footerContentLeft ||
          (footerContentRight && (
            <Footer>
              <Control>{footerContentLeft}</Control>
              <Control>{footerContentRight}</Control>
            </Footer>
          ))}
      </Container>
      <Overlay />
    </Wrapper>
  );
};

export default Modal;
