import React from "react";
import "../styling/errorstyle.css";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/");
  };
  return (
    <>
      <main>
        <div className="container vh-100 d-flex align-items-center justify-content-center">
          <h4 className="ms-lg-5 mt-lg-5">404 not found</h4>
          <div className="row mt-lg-0 mt-4 ">
            <div className="col-lg-6 d-flex justify-content-center align-items-center ">
              <img
                src={require("../Images/Scarecrow.png")}
                className="img-fluid scare"
                alt="Error 404 Image"
              />
            </div>

            <div className="col-lg-6">
              <h3>I have bad news for you</h3>
              <div className="col-md-8">
                <p>
                  The page you are looking does not exist or might have been
                  removed
                </p>
              </div>
              <button className="btn btn-home mt-3 " onClick={backToHome}>
                Back to homepage
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Error;
