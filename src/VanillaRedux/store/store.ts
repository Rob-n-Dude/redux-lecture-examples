import { createStore } from "redux";
import { ActionType, ActionUnion } from "../../enums/actionType";
import { composeWithDevTools } from "@redux-devtools/extension";

type AppState = {
  counter: number
}

const initialState = {
  counter: 0
}

const reducer = (state = initialState as AppState, action: ActionUnion): AppState => {
  switch (action.type) {
    case ActionType.INCREMENT: 
      return {
        ...state,
        counter: state.counter + 1,
      }
    case ActionType.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      }
    default:
      return state
  }
} 

export const store = createStore(reducer, composeWithDevTools())

// export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())