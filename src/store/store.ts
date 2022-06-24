import { createStore, Store } from "redux";
import reducers from "../reducers";

const store: Store<StoreInterface, TodoAction> & {
  dispatch: DispatchType;
} = createStore(reducers);

export default store;
