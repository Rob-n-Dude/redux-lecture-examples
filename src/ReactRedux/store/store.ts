import { createStore } from "redux";
import { ActionType, ActionUnion } from "../../enums/actionType";
import { useDispatch } from "react-redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const initialState = {
  counter: 0
}

const reducer = (state = initialState, action: ActionUnion) => {
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

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
