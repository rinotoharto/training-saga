import produce from "immer";
import { SET_ALL_POKEMON } from "../constants/index";

export const initialState = {
  pokemons: [],
};

const invitationState = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_ALL_POKEMON:
        draft.pokemons = action.pokemons;
        break;
      default:
        return state;
    }
  });

export default invitationState;
