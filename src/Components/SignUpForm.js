import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import authFunctions from "../HelperFiles/firebaseAuthFunctions";
import { useNavigate } from "react-router-dom";
import { auth } from "../HelperFiles/firebaseSetup";
import formValidation from "../HelperFiles/formValidation";

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
  const { changeFormType, updateIsLoggedIn } = props;

  //
  //Useeffect
  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged((userCredential) => {
      if (userCredential) {
        updateIsLoggedIn(true);
        navigate("/");
      }
    });
    return () => unsubcribe();
  }, []);
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
  //Validate Form//
  const validate = () => {
    if (!formValidation.isUsernameValid(formState.username)) {
      console.log("Invalid username");
      return false;
    } else if (!formValidation.isEmailValid(formState.email)) {
      console.log("Invalid email");
      return false;
    } else if (!formValidation.isValidPassword(formState.password)) {
      console.log("Invalid password");
      return false;
    }
    return true;
  };
  //
  //onForm Submit //
  const onSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      authFunctions.createAccount(
        formState.username,
        formState.email,
        formState.password
      );
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
            required
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
