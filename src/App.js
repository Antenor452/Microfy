import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Redirect from "./Pages/Redirect";
import Error from "./Pages/Error";
import HomeWrapper from "./Components/HomeWrapper";

const App = () => {
  const logInStatus = JSON.parse(localStorage.getItem("isLoggedIn"));
  const [isSignedIn, setIsSignedIn] = useState(logInStatus);
  const updateIsLoggedIn = (state) => {
    setIsSignedIn(state);
    localStorage.setItem("isLoggedIn", JSON.stringify(state));
  };
  return (
    <React.Fragment>
      <div className="container-fluid">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <HomeWrapper
                  isSignedIn={logInStatus}
                  updateIsLoggedIn={updateIsLoggedIn}
                />
              }
            />
            <Route path="/guest-:uid" element={<Redirect />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </div>
    </React.Fragment>
  );
};
export default App;
