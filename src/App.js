import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(null);
  useEffect(() => {
    const logInStatus = JSON.parse(localStorage.getItem("logInStatus"));
    if (logInStatus) {
      setIsSignedIn(true);
    }
    setIsSignedIn(false);
    console.log(logInStatus, isSignedIn);
  }, []);
  return (
    <React.Fragment>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage isSignedIn={isSignedIn} />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};
export default App;
