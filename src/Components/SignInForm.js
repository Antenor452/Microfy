import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import authFunctions from "../HelperFiles/firebaseAuthFunctions";
import { auth } from "../HelperFiles/firebaseSetup";

const SignInForm = (props) => {
  //
  //final
  const SIGN_UP = "SIGN_UP";
  const navigate = useNavigate;
  const initFormState = {
    email: "",
    password: "",
    isValid: false,
    validationError: "",
    showPassword: false,
  };
  //
  //Props
  const changeFormType = props.changeFormType;
  const updateIsLoggedIn = props.updateIsLoggedIn;
  //
  //
  //UseEffect/
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        updateIsLoggedIn(true);
        navigate("/");
      } else {
      }
    });
    return () => unsubscribe();
  }, []);
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
  //validateForm
  const formValidator = (e) => {
    e.preventDefault();
    if (formState.email.trim().length === 0) {
      setFormState({
        ...formState,
        isValid: false,
        validationError: "Please enter a valid email",
      });
    } else if (formState.password.length < 8) {
      setFormState({
        ...formState,
        isValid: false,
        validationError:
          "Please enter a password of length greater than or equal to 8",
      });
    } else {
      setFormState({ ...formState, isValid: true, validationError: null });
    }
  };
  //onFormSubmit
  const onFormSubmit = (e) => {
    e.preventDefault();
    authFunctions.signIn(formState.email, formState.password);
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
