import React, { createContext, useReducer } from 'react';
import reducer from './reducer';
import { ProviderProps, Store } from '../store/types';

const initialState = {
  modals: {
    allIds: [],
    byId: {},
  },
};

export const AppContext = createContext<Store>({
  state: initialState,
  dispatch: () => null,
});

const AppProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ dispatch, state }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
