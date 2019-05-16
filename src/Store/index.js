import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const INITIAL_STATE = {
  heros: [
    {
      id: 1,
      nome: "Pedro",
      descricao: "primeiro heroe"
    },
    {
      id: 2,
      nome: "Daniel",
      descricao: "Segundo heroe"
    },
    {
      id: 3,
      nome: "Renan",
      descricao: "terceiro heroe"
    },
    {
      id: 4,
      nome: "Andre",
      descricao: "Quarto heroe"
    },
    {
      id: 5,
      nome: "Reinaldo",
      descricao: "quinto heroe"
    }
  ],
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
