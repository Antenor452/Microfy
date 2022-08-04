import React from "react";

const UrlForm = (props) => {
  const { url, onChangeHandler, onSubmit } = props;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <>
      <form className="url-input-form ">
        <div className="container d-flex">
          <input
            className="form-control url-input"
            type="url"
            value={url}
            onChange={(e) => onChangeHandler(e)}
            placeholder="Enter valid url to microfy"
          />
          <button className="btn btn-microfy ms-2" onClick={onSubmitHandler}>
            Microfy
          </button>
        </div>
      </form>
    </>
  );
};

export default UrlForm;
