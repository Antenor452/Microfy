import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import GuestHomePage from "./Pages/GuestHomePage";
import HomePage from "./Pages/HomePage";
import Redirect from "./Pages/Redirect";
import Error from "./Pages/Error";

const App = () => {
  const logInStatus = JSON.parse(localStorage.getItem("isLoggedIn"));
  const [isSignedIn, setIsSignedIn] = useState(logInStatus);
  useEffect(() => {
    console.log(logInStatus);
    if (logInStatus) {
      setIsSignedIn(true);
    }
    setIsSignedIn(false);
  }, [logInStatus]);

  const updateIsLoggedIn = (state) => {
    setIsSignedIn(state);
  };
  return (
    <React.Fragment>
      <div className="container-fluid">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                isSignedIn ? (
                  <HomePage updateIsLoggedIn={updateIsLoggedIn} />
                ) : (
                  <GuestHomePage updateIsLoggedIn={updateIsLoggedIn} />
                )
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
