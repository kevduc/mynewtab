import { FETCH_SECTIONS, NEW_SECTION } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SECTIONS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
