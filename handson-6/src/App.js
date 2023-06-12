import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
// import Student from './Components/Student';
import Contact from "./Components/Contact";
import ContextData from "./Components/ContextData";
import Addnew from "./Components/Addnew";
import Table from "./Components/Table";
import Edit from "./Components/Edit";

const App = () => {
  const [data, setData] = useState([
    { name: "Sara", age: 22, course: "Fashion Designing", batch: "2022" },
    { name: "Varun", age: 22, course: "Engineering", batch: "2022" },
    { name: "Aditi", age: 22, course: "MCA", batch: "2022" },
  ]);
  return (
    <div className="background">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/Student"
            element={
              <ContextData.Provider
                value={{ entries: data, UpdateFun: setData }}
              >
                <Table />
              </ContextData.Provider>
            }
          />

          <Route
            path="/addnew"
            element={
              <ContextData.Provider
                value={{ entries: data, UpdateFun: setData }}
              >
                <Addnew />
              </ContextData.Provider>
            }
          />

          <Route
            path="/editStudent"
            element={
              <ContextData.Provider
                value={{ entries: data, UpdateFun: setData }}
              >
                <Edit />
              </ContextData.Provider>
            }
          />

          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
