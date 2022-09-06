import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Redirect from "./Pages/Redirect";
import Error from "./Pages/Error";
import HomeWrapper from "./Components/HomeWrapper";
import { useState } from "react";

const App = () => {
  const logInStatus = JSON.parse(localStorage.getItem("isLoggedIn"));
  const [isLoggedIn, setIsLoggedIn] = useState(logInStatus);
  const updateIsLoggedIn = (state) => {
    setIsLoggedIn(state);
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
                  isSignedIn={isLoggedIn}
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
