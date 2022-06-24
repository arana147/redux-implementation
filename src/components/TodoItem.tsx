import { Paper, Grid, Button } from "@mui/material";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_TODO } from "../actions/actionTypes";

export const TodoItem = ({ todo }: { todo: TodoInterface }) => {
  const dispatch: Dispatch<any> = useDispatch();
  const handleRemoveTodo = () => {
    dispatch({ type: REMOVE_TODO, todo: { id: todo.id } });
  };

  return (
    <Paper elevation={1} sx={{ margin: "8px", padding: "8px" }}>
      <Grid container>
        <Grid item xs={8}>
          {todo.title}
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" color="error" onClick={handleRemoveTodo}>
            Remove
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
