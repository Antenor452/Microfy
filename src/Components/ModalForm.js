import React, { useState } from "react";
import "../styling/modalstyling.css";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
const ModalForm = (props) => {
  const type = props.type;
  const [formType, setFormType] = useState(type);
  const closeModal = props.closeModal;

  const FormType = () => {
    if (formType === "SIGN_UP") {
      return <SignUpForm />;
    }
    if (formType === "SIGN_IN") {
      return <SignInForm />;
    }
    return "Error :no type selected";
  };
  const changeFormTypeButton = () => {
    if (formType === "SIGN_UP") {
      return <SignUpForm />;
    }
    if (formType === "SIGN_IN") {
      return <SignInForm />;
    }
  };
  const changeFormType = () => {
    if (formType === "SIGN_UP") {
      setFormType("SIGN_IN");
    } else {
      setFormType("SIGN_UP");
    }
  };

  return (
    <>
      <div className="container  vh-100 d-flex justify-content-center align-items-center">
        <div
          className="container-fluid modal-container"
          onClick={() => {
            closeModal();
          }}
        ></div>
        <div className="container form-container d-flex justify-content-center p-2 align-items-center">
          {<FormType />}
        </div>
      </div>
    </>
  );
};

export default ModalForm;
