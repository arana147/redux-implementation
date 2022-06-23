import { createStore } from "redux";

import * as actionTypes from "./actionTypes";

const initialState: TodoState = {
  todos: [
    {
      id: 1,
      title: "post 1",
    },
    {
      id: 2,
      title: "post 2",
    },
  ],
};
const reducer = (
  state: TodoState = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      const newTodo: TodoInterface = {
        id: Math.random(), // not really unique
        title: action.todo.title,
      };
      return {
        ...state,
        todos: state.todos.concat(newTodo),
      };
    case actionTypes.REMOVE_TODO:
      const updatedTodos: TodoInterface[] = state.todos.filter(
        (todo) => todo.id !== action.todo.id
      );
      return {
        ...state,
        todos: updatedTodos,
      };
  }
  return state;
};

export default reducer;

// function counterReducer(state = { value: 0 }, action: TodoAction) {
//   switch (action.type) {
//     case "counter/incremented":
//       return { value: state.value + 1 };
//     case "counter/decremented":
//       return { value: state.value - 1 };
//     default:
//       return state;
//   }
// }

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
// let store = createStore(counterReducer);

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.

// store.subscribe(() => console.log(store.getState()));

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
// store.dispatch({
//   type: "A",
//   todo: { id: 4, title: "new todo" },
// });
// {value: 1}
// store.dispatch({ type: "counter/incremented", article: "20" });
// // {value: 2}
// store.dispatch({ type: "counter/decremented", article: "20" });
// {value: 1}
