import { Provider } from "react-redux";
import { store } from "./store";
import { Content } from "./Content";

export const ReactRedux = () => (
  <Provider store={store}>
    <Content />
  </Provider>
)

