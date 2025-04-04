import { mockAsyncFunction, mockAsyncRejectFunction } from "../../api"
import { ActionType, ActionUnion } from "../../enums/actionType"
import { AppDispatch, AppState, AppThunk } from "../store"

export const incrementCounter = (): ActionUnion => ({
  type: ActionType.INCREMENT
})

export const decrementCounter = (): ActionUnion => ({
  type: ActionType.DECREMENT
})

export const setCounter = (value: number): ActionUnion => ({
  type: ActionType.SET_VALUE,
  payload: value
})

//

export const startFetching = (): ActionUnion => ({
  type: ActionType.FETCH_START
})

export const endFetching = (): ActionUnion => ({
  type: ActionType.FETCH_FINISH,
})

export const raiseFetchingError = (): ActionUnion => ({
  type: ActionType.FETCH_ERROR
})

// thunks

export const fetchAndIncrement = (): AppThunk => async (dispatch: AppDispatch, getState: () => AppState) => {
  try {
    dispatch(startFetching())

    await mockAsyncFunction()

    dispatch(incrementCounter())
  } catch {
    dispatch(raiseFetchingError())
  } finally {
    dispatch(endFetching())
  }
}

export const fetchAndDecrement = (): AppThunk => async (dispatch: AppDispatch, getState: () => AppState) => {
  try {
    dispatch(startFetching())

    await mockAsyncFunction()

    dispatch(decrementCounter())
  } catch {
    dispatch(raiseFetchingError())
  } finally {
    dispatch(endFetching())
  }
}

export const fetchTillReject = (): AppThunk => async (dispatch: AppDispatch, getState: () => AppState) => {
  try {
    dispatch(startFetching())

    await mockAsyncRejectFunction()

    dispatch(decrementCounter())
  } catch {
    dispatch(raiseFetchingError())
  } finally {
    dispatch(endFetching())
  }
}