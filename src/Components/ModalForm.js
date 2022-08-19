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
      return <SignUpForm changeFormType={changeFormType} />;
    }
    if (formType === "SIGN_IN") {
      return <SignInForm changeFormType={changeFormType} />;
    }
    return "Error :no type selected";
  };

  const changeFormType = (formType) => {
    setFormType(formType);
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
