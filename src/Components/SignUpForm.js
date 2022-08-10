import React, { useState } from "react";

const SignUpForm = () => {
  return (
    <>
      <div className="container ">
        <form>
          <input
            className="form-control"
            type="text"
            placeholder="Please enter your email"
            value={email}
          />
          <input
            className="form-control"
            type="password"
            placeholder="Please enter your password"
            value={password}
          />
          <input
            className="form-control"
            type="password"
            placeholder="Please confirm ypur password"
            value={ConfirmPassword}
          />
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
