import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { NewTodoForm } from "../components/NewTodoForm";
import { TodoItem } from "../components/TodoItem";

export const Home = () => {
  const todos: TodoInterface[] = useSelector(
    (store: StoreInterface) => store.todos.todos
  );

  return (
    <Grid container alignItems={"center"} columnSpacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">To Do List</Typography>
      </Grid>
      <Grid item sm={6} xs={12}>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </Grid>
      <NewTodoForm />
    </Grid>
  );
};
