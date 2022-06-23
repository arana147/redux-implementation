import { createStore, Store } from "redux";
import reducer from "./reducer";

const store: Store<TodoState, TodoAction> & {
  dispatch: DispatchType;
} = createStore(reducer);

export default store;
