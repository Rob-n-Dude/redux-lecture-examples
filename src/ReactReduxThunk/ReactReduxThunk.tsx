import { Provider } from "react-redux";
import { Content } from "./Content";
import { store } from "./store";

export const ReactReduxThunk = () => (
  <Provider store={store}>
    <Content />
  </Provider>
)