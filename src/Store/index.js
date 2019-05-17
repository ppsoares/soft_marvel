import { createStore, compose } from "redux";
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
    case "SET_EDIT":
      return {
        ...state,
        filter: action.edit
      };
    default:
      return state;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers();

const store = createStore(reducer, enhancer);

export default store;
