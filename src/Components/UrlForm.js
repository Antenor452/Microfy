import React, { useState, useRef } from "react";
import formValidation from "../HelperFiles/formValidation";

const UrlForm = (props) => {
  const isUrlValid = formValidation.isUrlValid;

  const { url, onChangeHandler, onSubmit } = props;
  const [error, setError] = useState(false);
  const inputRef = useRef(null);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (isUrlValid(url)) {
      setError(false);
      onSubmit();
    } else {
      setError(true);
      inputRef.current.focus();
    }
  };

  return (
    <>
      <form className="url-input-form ">
        <div className="container d-flex">
          <input
            className="form-control url-input"
            type="url"
            value={url}
            ref={inputRef}
            onChange={(e) => onChangeHandler(e)}
            placeholder="Enter valid url to microfy"
          />
          <button className="btn btn-microfy ms-2" onClick={onSubmitHandler}>
            Microfy
          </button>
        </div>
        {error ? (
          <h5 className="text-center text-danger">Please enter a valid url</h5>
        ) : null}
      </form>
    </>
  );
};

export default UrlForm;
