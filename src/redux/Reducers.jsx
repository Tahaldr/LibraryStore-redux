import { AJOUT_LIVRE, DELETE_LIVRE } from "./Actions";

const initialState = {
  livres: [],
};

export const LivreReducer = (state = initialState, action) => {
  switch (action.type) {
    case AJOUT_LIVRE:
      return {
        ...state,
        livres: [...state.livres, action.payload],
      };
    case DELETE_LIVRE:
      return {
        ...state,
        livres: state.livres.filter((livre) => {
          return action.payload !== livre.id;
        }),
      };
    default:
      return state;
  }
};
