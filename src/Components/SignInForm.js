import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, useRef } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { auth } from "../HelperFiles/firebaseSetup";
import formValidation from "../HelperFiles/formValidation";

const SignInForm = (props) => {
  //
  //final
  const SIGN_UP = "SIGN_UP";
  const navigate = useNavigate;
  const initFormState = {
    email: "",
    password: "",
    showPassword: false,
    isError: false,
    errorType: "",
  };
  //UseRef//
  const emailRef = useRef(null);
  //Props
  const { changeFormType, updateIsLoggedIn } = props;
  //Component State and functions
  const [formState, setFormState] = useState(initFormState);
  //Onchange
  const onChangeHandler = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  //toglle show password
  const toggleShowPassword = (e) => {
    e.preventDefault();
    setFormState({ ...formState, showPassword: !formState.showPassword });
  };
  ////
  ///Clear invalid class
  const clearInvalid = () => {
    emailRef.current.classList.remove("is-invalid");
  };
  //
  ///add invalid class//
  //

  const addInvalid = (refToUpdate) => {
    refToUpdate.current.classList.add("is-invalid");
    refToUpdate.current.focus();
  };
  //validateForm
  const formValidator = () => {
    if (!formValidation.isEmailValid(formState.email)) {
      clearInvalid();
      addInvalid(emailRef);
      return false;
    }
    clearInvalid();
    return true;
  };
  //onFormSubmit
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (formValidator()) {
      signInWithEmailAndPassword(auth, formState.email, formState.password)
        .then(() => {
          updateIsLoggedIn(true);
          navigate("/");
        })
        .catch((error) => {
          if (error.code) {
            if (
              error.code === "auth/wrong-password" ||
              error.code === "auth/user-not-found"
            ) {
              console.log("invalid");
              clearInvalid();
              setFormState({
                ...formState,
                errorType: "Invalid email or password",
                isError: true,
              });
            } else if (error.code === "auth/network-request-failed") {
              clearInvalid();
              setFormState({
                ...formState,
                errorType: "network-request-failed",
                isError: true,
              });
            } else if (error.code === "auth/too-many-requests") {
              clearInvalid();
              setFormState({
                ...formState,
                errorType: "Too many tries,try again later",
                isError: true,
              });
            }
          }
        });
    }
  };
  //
  //Return
  return (
    <>
      <form>
        <h4 className="text-center">Sign In</h4>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formState.email}
            ref={emailRef}
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="input-group">
            <input
              type={formState.showPassword ? "text" : "password"}
              className="form-control"
              name="password"
              value={formState.password}
              onChange={(e) => onChangeHandler(e)}
            />
            <span className="input-group-text">
              <button
                className="btn-show-pass"
                onClick={(e) => toggleShowPassword(e)}
              >
                {!formState.showPassword ? (
                  <AiFillEye />
                ) : (
                  <AiFillEyeInvisible />
                )}
              </button>
            </span>
          </div>
        </div>
        {formState.isError ? (
          <span className="text-danger">{formState.errorType}</span>
        ) : null}
        <div className="container mt-2 ">
          <h6 className="text-end">Forgot Password?</h6>
        </div>

        <button
          className="btn btn-primary mt-3 form-control"
          onClick={(e) => {
            onFormSubmit(e);
          }}
        >
          Sign In
        </button>

        <button
          className="btn btn-success mt-3 form-control "
          onClick={(e) => {
            e.preventDefault();
            changeFormType(SIGN_UP);
          }}
        >
          Create Account
        </button>
      </form>
    </>
  );
};

export default SignInForm;
