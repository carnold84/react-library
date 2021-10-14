import { useContext } from 'react';
import { AppContext } from '../store/AppProvider';

export const useAppState = () => {
  const context = useContext(AppContext);
  return context;
};

export default useAppState;
