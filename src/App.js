import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom"
import StudentReg from "./components/StudentReg";
import StudentList from "./components/StudentList";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentReg />} />
          <Route path="/studentlist" element={<StudentList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
