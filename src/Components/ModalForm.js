import React, { useState } from "react";
import "../styling/modalstyling.css";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
const ModalForm = (props) => {
  //
  //Final
  const SIGN_IN = "SIGN_IN";
  const SIGN_UP = "SIGN_UP";
  //Props
  const updateIsLoggedIn = props.updateIsLoggedIn;
  const type = props.type;
  const closeModal = props.closeModal;

  //Component state and functions
  const [formType, setFormType] = useState(type);
  //
  //Form onChangeHandler
  const changeFormType = (formType) => {
    setFormType(formType);
  };
  //
  const FormTypeWrapper = (props) => {
    const formType = props.formType;
    switch (formType) {
      case SIGN_IN:
        return (
          <SignInForm
            updateIsLoggedIn={updateIsLoggedIn}
            changeFormType={changeFormType}
          />
        );

      case SIGN_UP:
        return (
          <SignUpForm
            updateIsLoggedIn={updateIsLoggedIn}
            changeFormType={changeFormType}
          />
        );

      default:
        return <h5>Form type invalid</h5>;
    }
  };
  //Return :
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
          <FormTypeWrapper formType={formType} />
        </div>
      </div>
    </>
  );
};

export default ModalForm;
