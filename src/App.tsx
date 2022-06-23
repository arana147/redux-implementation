import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Layout } from "./components/Layout";
import { Products } from "./pages/Products";
import { Box, Grid } from "@mui/material";

function App() {
  return (
    <Layout>
      <Box pl={2} pr={2}>
        <Routes>
          <Route path={"/home"} element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path={"/"} element={<Home />} />
          <Route path={"/products"} element={<Products />} />
        </Routes>
      </Box>
    </Layout>
  );
}

export default App;
