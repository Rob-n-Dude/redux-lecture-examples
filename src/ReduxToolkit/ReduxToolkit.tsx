import { Provider } from "react-redux";
import { Content } from "./Content";
import { store } from "./store";

export const ReduxToolkit = () => (
  <Provider store={store}>
    <Content />
  </Provider>
)