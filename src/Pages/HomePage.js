import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authFunctions from "../HelperFiles/firebaseAuthFunctions";
import { auth } from "../HelperFiles/firebaseSetup";

const HomePage = (props) => {
  //
  //Props
  const updateIsLoggedIn = props.updateIsLoggedIn;
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const fetchUser = async () => {
    setUser(auth.currentUser);
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("Signed in");
        console.log(user.email);
        console.log(user.displayName);
      } else {
        console.log("Signed out");
      }
    });
  }, []);
  const logOut = () => {
    authFunctions.logOut();
    updateIsLoggedIn(false);
    navigate("/");
  };
  return (
    <div>
      HomePage of
      <button className="btn btn-danger mt-2" onClick={logOut}>
        Log Out
      </button>
    </div>
  );
};

export default HomePage;
