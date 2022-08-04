import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import GuestHomePage from "./Pages/GuestHomePage";
import HomePage from "./Pages/HomePage";
const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(null);
  useEffect(() => {
    const logInStatus = JSON.parse(localStorage.getItem("logInStatus"));
    if (logInStatus) {
      setIsSignedIn(true);
    }
    setIsSignedIn(false);
  }, []);
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route
            path="/"
            element={isSignedIn ? <HomePage /> : <GuestHomePage />}
          />
        </Routes>
      </Router>
    </React.Fragment>
  );
};
export default App;
