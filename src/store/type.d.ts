interface TodoInterface {
  id: number;
  title: string;
}

type TodoState = {
  todos: TodoInterface[];
};

type TodoAction = {
  type: string;
  todo: TodoInterface;
};

type DispatchType = (args: TodoAction) => TodoAction;
