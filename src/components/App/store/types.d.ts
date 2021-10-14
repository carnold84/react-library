import { ReactNode } from 'react';

export type Modal = {
  content: ReactNode;
  id: string;
  onDismiss?(id: string): void;
  showCloseButton?: boolean;
  text?: string;
  title: string;
};

export type ModalsById = {
  [key: string]: Modal;
};

export type State = {
  modals: {
    allIds: Array<string>;
    byId: ModalsById;
  };
};

export type Action =
  | { type: 'add-modal'; payload: any }
  | { type: 'remove-modal'; payload: any };

export type ProviderProps = {
  children: ReactNode;
};

export type Store = {
  state: State;
  dispatch: React.Dispatch<any>;
};
