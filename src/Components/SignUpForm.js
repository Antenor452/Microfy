import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignUpForm = () => {
  const initFormState = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formState, setFormState] = useState(initFormState);
  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={formState.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="input-group">
            <input
              type="password"
              className="form-control"
              value={formState.password}
            />
            <span className="input-group-text">
              <button className="btn-show-pass">
                <AiFillEye />
              </button>
            </span>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
