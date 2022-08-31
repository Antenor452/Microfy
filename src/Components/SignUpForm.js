import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import authFunctions from "../HelperFiles/firebaseAuthFunctions";
import { useNavigate } from "react-router-dom";

const SignUpForm = (props) => {
  //Static//
  const SIGN_IN = "SIGN_IN";
  const initFormState = {
    email: "",
    password: "",
    username: "",
  };
  //
  //Props//
  const changeFormType = props.changeFormType;
  const updateIsLoggedIn = props.updateIsLoggedIn;
  //
  //Component state and functions//
  const [formState, setFormState] = useState(initFormState);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
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
  //
  //onForm Submit //
  const onSubmit = (e) => {
    e.preventDefault();

    authFunctions.createAccount(
      formState.username,
      formState.email,
      formState.password
    );
    updateIsLoggedIn(true);
    navigate("/");
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

        <button
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
