import { Modal } from '../store/types';
import useAppState from './useAppState';

const useModals = () => {
  const {
    dispatch,
    state: { modals },
  } = useAppState();

  const addModal = (payload: Modal) => {
    dispatch({
      payload: payload,
      type: 'add-modal',
    });
  };

  const removeModal = (payload: string) => {
    dispatch({
      payload,
      type: 'remove-modal',
    });
  };

  return {
    addModal,
    modals: modals.allIds.map((id) => {
      return modals.byId[id];
    }),
    removeModal,
  };
};

export default useModals;
