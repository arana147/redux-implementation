import { Grid, TextField, Button } from "@mui/material";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { ADD_TODO } from "../actions/actionTypes";
import { useState } from "react";

export const NewTodoForm = () => {
  const [newTodo, setNewTodo] = useState<string>("");
  const dispatch: Dispatch<any> = useDispatch();
  const handleAddTodo = () => {
    dispatch({ type: ADD_TODO, todo: { title: newTodo } });
    setNewTodo("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  return (
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
  );
};
