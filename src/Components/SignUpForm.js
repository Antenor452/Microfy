import React, { useState, useEffect, useRef } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import authFunctions from "../HelperFiles/firebaseAuthFunctions";
import { useNavigate } from "react-router-dom";
import { auth } from "../HelperFiles/firebaseSetup";
import formValidation from "../HelperFiles/formValidation";

const SignUpForm = (props) => {
  //final//
  const SIGN_IN = "SIGN_IN";
  const initFormState = {
    email: "",
    password: "",
    username: "",
    isError: false,
    errorType: "",
  };
  const navigate = useNavigate();
  //
  //Props//
  const { changeFormType, updateIsLoggedIn } = props;
  //useRef
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();
  //
  //Useeffect
  useEffect(() => {
    console.log("start");
    const unsubcribe = auth.onAuthStateChanged((userCredential) => {
      if (userCredential) {
        updateIsLoggedIn(true);
        navigate("/");
      }
    });
    return () => unsubcribe();
  }, [updateIsLoggedIn, navigate]);
  //Component state and functions//
  const [formState, setFormState] = useState(initFormState);
  const [showPassword, setShowPassword] = useState(false);

  //
  //Form onchange handler//
  const onChangeHandler = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  //
  //toggleShowPassword//
  const toggleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  ////
  ///Clear invalid class
  const clearInvalid = () => {
    usernameRef.current.classList.remove("is-invalid");
    emailRef.current.classList.remove("is-invalid");
    passwordRef.current.classList.remove("is-invalid");
  };
  //
  ///add invalid class//
  //

  const addInvalid = (refToUpdate) => {
    refToUpdate.current.classList.add("is-invalid");
    refToUpdate.current.focus();
  };
  //Validate Form//
  const validate = () => {
    if (!formValidation.isUsernameValid(formState.username)) {
      clearInvalid();
      addInvalid(usernameRef);
      return false;
    } else if (!formValidation.isEmailValid(formState.email)) {
      clearInvalid();
      addInvalid(emailRef);
      return false;
    } else if (!formValidation.isValidPassword(formState.password)) {
      clearInvalid();
      addInvalid(passwordRef);
      return false;
    }
    clearInvalid();
    return true;
  };
  //
  //onForm Submit //
  const onSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      authFunctions
        .createAccount(formState.username, formState.email, formState.password)
        .then((error) => {
          if (error.code) {
            if (error.code === "auth/email-already-in-use") {
              setFormState({
                ...formState,
                errorType: "email-already-in-use",
                isError: true,
              });
              clearInvalid();
              addInvalid(emailRef);
            } else if (error.code === "auth/network-request-failed") {
              clearInvalid();
              setFormState({
                ...formState,
                errorType: "network-request-failed",
                isError: true,
              });
            }
          }
        });
    }
  };
  //Return://
  return (
    <>
      <form>
        <h4 className="text-center">Create New Account</h4>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={formState.username}
            ref={usernameRef}
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
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
              type={showPassword ? "text" : "password"}
              className="form-control"
              name="password"
              value={formState.password}
              ref={passwordRef}
              onChange={(e) => onChangeHandler(e)}
            />
            <span className="input-group-text">
              <button
                className="btn-show-pass"
                onClick={(e) => toggleShowPassword(e)}
              >
                {!showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </button>
            </span>
          </div>
        </div>
        {formState.isError ? (
          <span className="text-danger">{formState.errorType}</span>
        ) : null}
        <button
          type="submit"
          className="btn btn-primary mt-3 form-control"
          onClick={(e) => onSubmit(e)}
        >
          Create Account
        </button>
        <button
          className="btn btn-success mt-3 form-control"
          onClick={(e) => {
            e.preventDefault();
            changeFormType(SIGN_IN);
          }}
        >
          Sign In
        </button>
      </form>
    </>
  );
};

export default SignUpForm;
