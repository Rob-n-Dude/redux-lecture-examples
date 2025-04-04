import { connect, useDispatch, useSelector } from "react-redux"
import { AppDispatch, AppState, counterSelector, decrementCounter, incrementCounter, useAppDispatch } from "./store"
import { Component } from "react"
import { CounterWithButtons } from "../components/CounterWithButtons"

// FC

export const Content = () => {
  const dispatch = useAppDispatch()
  const counter = useSelector(counterSelector)

  const increment  = () => {
    dispatch(incrementCounter())
  }

  const decrement  = () => {
    dispatch(decrementCounter())
  }

  return (
    <CounterWithButtons
      counter={counter} 
      increment={increment} 
      decrement={decrement} 
    />
  )
}

// Class component

// type ContentProps = {
//   counter: number,
//   increment: () => void
//   decrement: () => void
// }

// const mapStateToProps = (state: AppState) => {
//   return {
//     counter: counterSelector(state)
//   }
// }

// // const mapDispatchToProps = {
// //   increment: incrementCounter, 
// //   decrement: decrementCounter
// // }

// const mapDispatchToProps = (dispatch: AppDispatch) => ({
//   increment: () => {
//     dispatch(incrementCounter()) 
//   },
//   decrement: () => {
//     dispatch(decrementCounter())
//   },
// })

// class Content extends Component<ContentProps> {
//   constructor(props: ContentProps) {
//     super(props)
//   }

//   increment = () => {
//     this.props.increment()
//   }

//   decrement = () => {
//     this.props.decrement()
//   }

//   render() {
//      return (
//         <CounterWithButtons 
//           counter={this.props.counter} 
//           increment={this.increment} 
//           decrement={this.decrement} 
//         />
//   )
//   }
// }

// const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Content) 

// export {
//   ConnectedComponent as Content
// }