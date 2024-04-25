import React from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./views/Home/Home";


const App = () => {
  return (
        <Routes>
        <Route path="/" element={<Navigate replace to="/home"  />} />  
        <Route path="/home" element={<Home />} />
      </Routes>
  );
};

export default App;
