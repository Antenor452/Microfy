import React from "react";
import "../styling/modalstyling.css";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
const ModalForm = (props) => {
  const type = props.type;
  const closeModal = props.closeModal;

  const FormType = (props) => {
    if (type === "SIGN_UP") {
      return <SignUpForm />;
    }
    if (type === "SIGN_IN") {
      return <SignInForm />;
    }
    return "Error :no type selected";
  };

  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center"
        onClick={() => {
          closeModal();
        }}
      >
        <div className="container-fluid modal-container"></div>
        <div className="container form-container d-flex justify-content-center p-2">
          {<FormType />}
        </div>
      </div>
    </>
  );
};

export default ModalForm;
