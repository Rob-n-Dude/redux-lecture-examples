import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { mockAsyncFunction } from "../../api"

const initialState = {
  counter: 0,
  isFetching: false,
  isError: false,
}

export const fetchAndIncrement = createAsyncThunk(
  'fetchAndIncrement', 
  async () => {
    await mockAsyncFunction()

    return 1 // goes to action.payload
  }
)

export const fetchAndDecrement = createAsyncThunk(
  'fetchAndDecrement',
  async () => {
    await mockAsyncFunction()

    return -1 // goes to action.payload
  }
)

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter = state.counter + 1
    },
    decrement: (state) => {
      state.counter = state.counter - 1
    },
    setValue: (state, action: PayloadAction<number>) => {
      state.counter = action.payload
    }
  },
  extraReducers: (builder) => (
    builder
    .addCase(fetchAndIncrement.pending, (state) => {
      state.isFetching = true
      state.isError = false
    }).addCase(fetchAndIncrement.rejected, (state) => {
      state.isError = true
      state.isFetching = false
    }).addCase(fetchAndIncrement.fulfilled, (state, action) => {
      state.counter = state.counter + action.payload
      state.isFetching = false
    })
    .addCase(fetchAndDecrement.pending, (state) => {
      state.isFetching = true
      state.isError = false
    }).addCase(fetchAndDecrement.rejected, (state) => {
      state.isError = true
      state.isFetching = false
    }).addCase(fetchAndDecrement.fulfilled, (state, action) => {
      state.counter = state.counter + action.payload
      state.isFetching = false
    })
  )
})

export const { increment, decrement, setValue } = counterSlice.actions

export default counterSlice.reducer