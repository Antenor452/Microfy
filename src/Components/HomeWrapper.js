import React from "react";
import GuestHomePage from "../Pages/GuestHomePage";
import HomePage from "../Pages/HomePage";

const HomeWrapper = (props) => {
  //Props
  const isSignedIn = props.isSignedIn;
  const updateIsLoggedIn = props.updateIsLoggedIn;
  console.log(isSignedIn);

  return (
    <>
      {isSignedIn ? (
        <HomePage updateIsLoggedIn={updateIsLoggedIn} />
      ) : (
        <GuestHomePage updateIsLoggedIn={updateIsLoggedIn} />
      )}
    </>
  );
};

export default HomeWrapper;
