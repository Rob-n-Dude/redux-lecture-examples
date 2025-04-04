export enum ActionType {
  INCREMENT = 'increment',
  DECREMENT = 'decrement',
  FETCH_START = 'fetchStart',
  FETCH_FINISH = 'fetchFinish',
  FETCH_ERROR = 'fetchError',
  SET_VALUE = 'setValue'
} 

export type ActionKeyToPayload = {
  [ActionType.INCREMENT]: void,
  [ActionType.DECREMENT]: void,
  [ActionType.FETCH_START]: void,
  [ActionType.FETCH_FINISH]: void,
  [ActionType.FETCH_ERROR]: void,
  [ActionType.SET_VALUE]: number,
}

export type ActionUnion = {
  [K in keyof ActionKeyToPayload]: ActionKeyToPayload[K] extends void
    ? { type: K }
    : { type: K; payload: ActionKeyToPayload[K] };
}[keyof ActionKeyToPayload];