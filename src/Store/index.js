import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const INITIAL_STATE = {
  heros: [],
  filter: ""
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_HEROS":
      return {
        ...state,
        heros: action.heros
      };
    case "SET_FILTER":
      return {
        ...state,
        filter: action.filter
      };
    default:
      return state;
  }
}

const store = createStore(reducer, composeWithDevTools());

export default store;
