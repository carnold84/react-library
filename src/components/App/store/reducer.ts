import { Action, ModalsById, State } from '../store/types';

const reducer = ({ modals }: State, { payload, type }: Action) => {
  let byId: ModalsById = {};

  switch (type) {
    case 'add-modal':
      return {
        modals: {
          ...modals,
          allIds: [...modals.allIds, payload.id],
          byId: {
            ...modals.byId,
            [payload.id]: payload,
          },
        },
      };

    case 'remove-modal':
      byId = {
        ...modals.byId,
      };
      delete byId[payload];

      return {
        modals: {
          ...modals,
          allIds: modals.allIds.filter((id) => {
            return id !== payload;
          }),
          byId,
        },
      };

    default:
      throw new Error();
  }
};

export default reducer;
