import React, { useState } from "react";
import ModalForm from "../Components/ModalForm";

const GuestHomePage = () => {
  const [url, setUrl] = useState("http://");
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState(null);

  return (
    <>
      <div className="container guest-container">
        <div className="row  align-center">
          <div className="col mb-4">
            <form className="url-input-form ">
              <div className="container d-flex">
                <input
                  className="form-control url-input"
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Enter valid url to microfy"
                />
                <button className="btn btn-microfy ms-2">Microfy</button>
              </div>
            </form>
          </div>
          <h6 className="text-center mb-2">
            Login Or Sign Up to access link analytics
          </h6>
          <div className="container d-flex justify-content-center ">
            <button className="btn btn-login me-2">Login</button>
            <button className="btn btn-sign-up ms-2">Sign Up</button>
          </div>
        </div>
      </div>
      <ModalForm showModal={showModal} type={type} />
    </>
  );
};

export default GuestHomePage;
