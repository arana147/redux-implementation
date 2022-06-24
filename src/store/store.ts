import { createStore, Store } from "redux";
import reducer from "../reducers/reducer";

// use combine reducer
// todos action and reducer should be in one folder
const store: Store<TodoState, TodoAction> & {
  dispatch: DispatchType;
} = createStore(reducer);

export default store;
