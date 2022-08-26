import React, { useState } from "react";
import "../styling/modalstyling.css";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
const ModalForm = (props) => {
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
  //Form Type Update
  const FormType = () => {
    if (formType === "SIGN_UP") {
      return (
        <SignUpForm
          changeFormType={changeFormType}
          updateIsLoggedIn={updateIsLoggedIn}
        />
      );
    }
    if (formType === "SIGN_IN") {
      return (
        <SignInForm
          changeFormType={changeFormType}
          updateIsLoggedIn={updateIsLoggedIn}
        />
      );
    }
    return "Error :no type selected";
  };

  //
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
          {<FormType />}
        </div>
      </div>
    </>
  );
};

export default ModalForm;
