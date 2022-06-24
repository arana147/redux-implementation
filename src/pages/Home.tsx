import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { ADD_TODO } from "../actions/actionTypes";

export const Home = () => {
  const [newTodo, setNewTodo] = useState<string>("");
  const todos: TodoInterface[] = useSelector(
    (store: { todos: TodoState }) => store.todos.todos
  );
  const dispatch: Dispatch<any> = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  // create a selector file
  const handleAddTodo = () => {
    dispatch({ type: ADD_TODO, todo: { title: newTodo } });
    setNewTodo("");
  };

  return (
    <Grid container alignItems={"center"} columnSpacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">To Do List</Typography>
      </Grid>
      <Grid item sm={6} xs={12}>
        {todos.map((todo) => (
          <Paper elevation={1} sx={{ margin: "8px", padding: "8px" }}>
            {todo.title}
          </Paper>
        ))}
      </Grid>
      <Grid item sm={6} xs={12}>
        <TextField
          id="standard-basic"
          label="New Todo"
          variant="standard"
          value={newTodo}
          onChange={handleChange}
          fullWidth
        />
        <Button
          variant="contained"
          onClick={handleAddTodo}
          fullWidth
          sx={{ marginTop: "16px" }}
        >
          Add Todo
        </Button>
      </Grid>
    </Grid>
  );
};
