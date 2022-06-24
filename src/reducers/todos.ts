

import * as actionTypes from "../actions/actionTypes";

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
const todos = (
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

export default todos;
