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
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setIsLoading(false);
      }
    });
  }, []);
  const logOut = () => {
    authFunctions.logOut();
    updateIsLoggedIn(false);
    navigate("/");
  };
  const HomePageWrapper = () => {
    return (
      <div>
        <div className="d-flex justify-content-between ms-5 me-5">
          <h3>Hello,{user.email}</h3>
          <button className="btn btn-danger mt-2" onClick={logOut}>
            Log Out
          </button>
        </div>
      </div>
    );
  };
  const Loading = () => {
    return (
      <div className="vh-100 d-flex justify-content-center align-item-center">
        Loading...
      </div>
    );
  };
  return <>{!isLoading ? <HomePageWrapper /> : <Loading />}</>;
};

export default HomePage;
