import { ActionType, ActionUnion } from "../../enums/actionType"

export const incrementCounter = (): ActionUnion => ({
  type: ActionType.INCREMENT,
})

export const decrementCounter = (): ActionUnion => ({
  type: ActionType.DECREMENT
})
