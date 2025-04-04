import { createSelector } from "reselect";
import { AppState } from "../store";


// export const counterSelector = (state: AppState) => console.log('called counterSelector') || state.counter

// export const isFetchingSelector = (state: AppState) => console.log('called isFetchingSelector') || state.isFetching

// export const isErrorSelector = (state: AppState) => console.log('called isErrorSelector') || state.isError

export const counterSelector = createSelector(
  [(state: AppState) => state.counter],
  (counter) => console.log('called counterSelector') || counter
)

export const isFetchingSelector = createSelector(
  [(state: AppState) => state.isFetching],
  (isFetching) => console.log('called isFetchingSelector') || isFetching
)

export const isErrorSelector = createSelector(
  [(state: AppState) => state.isError],
  (isError) => console.log('called isErrorSelector') || isError
)