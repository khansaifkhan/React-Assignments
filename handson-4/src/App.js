import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routing/Home";
import Student from "./Routing/Student";
import Contact from "./Routing/Contact";

const App = () => {
  return (
    <div className="background">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Student" element={<Student />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
