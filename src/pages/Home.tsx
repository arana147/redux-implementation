import { Grid, Typography, Box, TextField, Button, Paper } from "@mui/material";
import { useState } from "react";
export const Home = () => {
  const TODO = [1, 2, 4, 6];
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    setNewTodo("");
  };

  return (
    <Grid container alignItems={"center"} columnSpacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">To Do List</Typography>
      </Grid>
      <Grid item sm={6} xs={12}>
        {TODO.map((data) => (
          <Paper elevation={1} sx={{ margin: "8px", padding: "8px" }}>
            Todo
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
