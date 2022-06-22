import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={"/home"} element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path={"/"} element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
