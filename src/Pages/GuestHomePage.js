import React, { useState } from "react";
import ModalForm from "../Components/ModalForm";
import UrlForm from "../Components/UrlForm";
import { db } from "../HelperFiles/firebaseSetup";
import { doc, setDoc } from "firebase/firestore";

const GuestHomePage = () => {
  const [url, setUrl] = useState("http://");

  const onChangeHandler = (e) => {
    setUrl(e.target.value);
  };

  const onSubmit = () => {};

  return (
    <>
      <div className="container guest-container">
        <div className="row  align-center">
          <div className="col-sm-12  mb-4 d-flex justify-content-center">
            <UrlForm
              url={url}
              onChangeHandler={onChangeHandler}
              onSubmit={onSubmit}
            />
          </div>

          <h6 className="text-center mb-2">
            Create an account to enjoy :
            <div className="container container-list">
              <ul>
                <li>Easy Link Shortening</li>
                <li>Full Link History</li>
                <li>Link Analytics</li>
              </ul>
            </div>
          </h6>
          <div className="container d-flex justify-content-center ">
            <button className=" btn-login me-2" onClick={() => {}}>
              Create Free Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuestHomePage;
