import React, { useState } from "react";
import UrlForm from "../Components/UrlForm";
import { db } from "../HelperFiles/firebaseSetup";
import { addDoc, collection } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import shortUUID from "short-uuid";
import CopyToClipboard from "../Components/CopyToClipboard";
import ModalForm from "../Components/ModalForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

const GuestHomePage = () => {
  const [url, setUrl] = useState("http://");
  const [microUrl, setMicroUrl] = useState(null);
  const [showLink, setShowLink] = useState(false);
  const modalInit = {
    showModal: false,
    type: "",
  };
  const [modalStatus, setModalStatus] = useState(modalInit);
  const closeModal = () => {
    setModalStatus({ ...modalStatus, showModal: false });
  };

  const onChangeHandler = (e) => {
    setUrl(e.target.value);
    setShowLink(false);
  };

  const onSubmit = async () => {
    const uid = shortUUID.uuid();
    try {
      await addDoc(collection(db, "GuestLinks"), {
        url: uid,
        visits: 0,
      }).then(() => {
        const microUrl = window.location.href + "guest-" + uid;
        setMicroUrl(microUrl);
        setShowLink(true);
      });
    } catch (e) {
      console.log("error adding doc");
    }
  };

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
          {showLink ? <CopyToClipboard urlLink={microUrl} /> : null}

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
            <button
              className="btn btn-success me-2"
              onClick={() => {
                setModalStatus({
                  ...modalStatus,
                  showModal: true,
                  type: "SIGN_UP",
                });
              }}
            >
              Create Free Account
            </button>
          </div>
        </div>
      </div>
      {modalStatus.showModal ? (
        <ModalForm type={modalStatus.type} closeModal={closeModal} />
      ) : null}
    </>
  );
};

export default GuestHomePage;
