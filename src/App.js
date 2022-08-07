import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import GuestHomePage from "./Pages/GuestHomePage";
import HomePage from "./Pages/HomePage";
import Redirect from "./Pages/Redirect";
import Error from "./Pages/Error";
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
      <div className="container-fluid">
        <Router>
          <Routes>
            <Route
              path="/"
              element={isSignedIn ? <HomePage /> : <GuestHomePage />}
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
