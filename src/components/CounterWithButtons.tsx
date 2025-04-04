import { FC } from "react"

type Props = {
  counter: number,
  increment: () => void,
  decrement: () => void
  disabled?: boolean
}

export const CounterWithButtons: FC<Props> = ({
  counter,
  increment,
  decrement,
  disabled = false,
 }) => (
  <div>
    Counter: {counter}
    <br />
    <button disabled={disabled} onClick={increment}>Increment</button>
    <button disabled={disabled} onClick={decrement}>Decrement</button>
  </div>
)
 