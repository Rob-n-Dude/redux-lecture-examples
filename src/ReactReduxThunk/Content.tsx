import { useSelector } from "react-redux"
import { CounterWithButtons } from "../components/CounterWithButtons"
import { 
  counterSelector, 
  fetchAndDecrement, 
  fetchAndIncrement, 
  fetchTillReject, 
  isErrorSelector, 
  isFetchingSelector, 
  setCounter, 
  useAppDispatch 
} from "./store"


export const Content = () => {
  const dispatch = useAppDispatch()

  const isError = useSelector(isErrorSelector)
  const isFetching = useSelector(isFetchingSelector)
  const counter = useSelector(counterSelector)

  const increment = () => {
    dispatch(fetchAndIncrement())
  }

  // const incrementByFive = () => {
  //   dispatch(setCounter(counter + 5))
  // }

  const decrement = () => {
    dispatch(fetchAndDecrement())
  }

  // const decrementWithError = () => {
  //   dispatch(fetchTillReject())
  // }

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