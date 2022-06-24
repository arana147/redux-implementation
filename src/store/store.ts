import { createStore, Store } from "redux";
import reducers from "../reducers";

// use combine reducer
// todos action and reducer should be in one folder


const store: Store<{ todos: TodoState }, TodoAction> & {
  dispatch: DispatchType;
} = createStore(reducers);

export default store;
