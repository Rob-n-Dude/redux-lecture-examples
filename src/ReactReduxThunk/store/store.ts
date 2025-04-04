import { applyMiddleware, createStore } from "redux";
import { ActionType, ActionUnion } from "../../enums/actionType";
import { useDispatch } from "react-redux";
import { thunk, ThunkAction, ThunkDispatch } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

const initialState = {
  counter: 0,
  isFetching: false,
  isError: false,
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
    case ActionType.FETCH_START: 
      return {
        ...state,
        isFetching: true,
        isError: false,
      }
    case ActionType.FETCH_FINISH:
      return {
        ...state,
        isFetching: false,
      }
    case ActionType.FETCH_ERROR:
      return {
        ...state,
        isError: true
      }
    case ActionType.SET_VALUE:
      return {
        ...state,
        counter: action.payload
      }
    default:
      return state
  }
} 

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<AppState, unknown, ActionUnion>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  ActionUnion
>;


export const useAppDispatch: () => AppDispatch = useDispatch
