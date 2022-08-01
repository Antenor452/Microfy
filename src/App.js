import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};
export default App;
