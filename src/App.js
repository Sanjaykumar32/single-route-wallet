import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "./Component/Table";
import AddData from "./Component/AddData";
import ReactDOM from "react-dom/client";
import { BrowserRouter ,Route , Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/add" element={  <AddData />}></Route>
        <Route path="/" element={  <Table />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
