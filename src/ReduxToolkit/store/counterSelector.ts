import { createSelector } from "@reduxjs/toolkit"
import { AppState } from "./store"

const rootSelector = (state: AppState) => state

export const counterSelector = createSelector(
  [rootSelector],
  (state) => state.counter
)

export const isFetchingSelector = createSelector(
  [rootSelector],
  (state) =>  state.isFetching
)

export const isErrorSelector = createSelector(
  [rootSelector],
  (state) => state.isError
)