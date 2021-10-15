import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import useModals from '../../hooks/useModals';
import Modal from '../../../Modal';
import { Wrapper } from './ModalManager.styles';

/**
 * Managing showing and hiding modals.
 */
const ModalManager = () => {
  const { modals, removeModal } = useModals();
  const [elPortal, setElPortal] = useState<Element | null>(null);

  useEffect(() => {
    const domNode = document.querySelector('#portal');

    if (!domNode) {
      console.error(`
        App component requires a div at the same level 
        as the root div of your React app.
        See https://reactjs.org/docs/portals.html
      `);
    }

    setElPortal(domNode);
  });

  if (!elPortal) {
    return null;
  }

  const onModalDismiss = (id: string) => {
    removeModal(id);
  };

  return (
    <Wrapper>
      {modals.map(({ content, id, showCloseButton = true, title }) => {
        return createPortal(
          <Modal
            onDismiss={showCloseButton ? onModalDismiss : undefined}
            id={id}
            key={id}
            title={title}>
            {content}
          </Modal>,
          elPortal
        );
      })}
    </Wrapper>
  );
};

export default ModalManager;
