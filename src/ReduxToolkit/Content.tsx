import { useSelector } from "react-redux"
import { CounterWithButtons } from "../components/CounterWithButtons"
import { 
  counterSelector, 
  fetchAndDecrement, 
  fetchAndIncrement, 
  isErrorSelector, 
  isFetchingSelector, 
  useAppDispatch,
  increment as incrementAction,
  decrement as decrementAction,
  setValue,
} from "./store"

export const Content = () => {
  const dispatch = useAppDispatch()

  const isError = useSelector(isErrorSelector)
  const isFetching = useSelector(isFetchingSelector)
  const counter = useSelector(counterSelector)

  const increment = () => {
    dispatch(fetchAndIncrement())
  }

  // const incrementSync = () => {
  //   dispatch(incrementAction())
  // }

  // const incrementBy = () => {
  //   dispatch(setValue(counter + 2))
  // }

  // const decrementSync = () => {
  //   dispatch(decrementAction())
  // }

  const decrement = () => {
    dispatch(fetchAndDecrement())
  }

  if (isError) {
    return <p>Something went wrong</p>
  }

  return  (
    <CounterWithButtons
      disabled={isFetching}
      counter={counter} 
      increment={increment} 
      decrement={decrement} 
    />
  )
}