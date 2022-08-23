import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
// import { authFunctions } from "../HelperFiles/firebaseAuthFunctions";

const SignInForm = (props) => {
  const changeFormType = props.changeFormType;
  const SIGN_UP = "SIGN_UP";
  const initFormState = {
    email: "",
    password: "",
    isValid: false,
    validationError: "",
  };
  const [formState, setFormState] = useState(initFormState);
  const [showPassword, setShowPassword] = useState(false);

  const onChangeHandler = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const toggleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const formValidator = () => {
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
  const onFormSubmit = (e) => {
    e.preventDefault();
    formValidator();
    if (formState.isValid) {
      console.log("IsValid");
    }
  };
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
        <div className="container mt-2 ">
          <h6 className="text-end">Forgot Password?</h6>
        </div>

        <input
          type={"submit"}
          value="Sign In"
          className="btn btn-primary mt-3 form-control"
          onClick={(e) => {
            onFormSubmit(e);
          }}
        />

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
