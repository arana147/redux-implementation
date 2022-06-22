import { Grid } from "@mui/material";
import React, { Children } from "react";
import { Navbar } from "./Navbar";

export const Layout = (props: { children: React.ReactElement }) => {
  return (
    <Grid container>
      <Navbar />
      {props.children}
    </Grid>
  );
};
