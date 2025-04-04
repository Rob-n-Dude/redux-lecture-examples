import { useEffect, useState } from "react"
import { 
  store, 
  incrementCounter, 
  decrementCounter
 } from './store'
import { CounterWithButtons } from "../components/CounterWithButtons"

export const VanillaRedux = () => {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    store.dispatch(incrementCounter())
  }

  const decrement = () => {
    store.dispatch(decrementCounter())
  }

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const state = store.getState()

      setCounter(state.counter)
    })

    return () => unsubscribe()
  }, [])

  return (
    <CounterWithButtons
      counter={counter} 
      increment={increment} 
      decrement={decrement} 
    />
  )
}