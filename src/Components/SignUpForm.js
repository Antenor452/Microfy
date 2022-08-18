import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignUpForm = () => {
  const initFormState = {
    email: "",
    password: "",
    confirmPassword: "",
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
  return (
    <>
      <form>
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

        <button className="btn btn-primary mt-3 form-control">
          Create Account
        </button>
      </form>
    </>
  );
};

export default SignUpForm;
