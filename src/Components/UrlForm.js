import { useState } from "react";
import React from "react";

const UrlForm = (props) => {
  const { url, onChangeHandler, onSubmit } = props;
  const [error, setError] = useState(false);

  const validateUrl = () => {
    var urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // validate protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    return !!urlPattern.test(url);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (validateUrl()) {
      setError(false);
      onSubmit();
    } else {
      setError(true);
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
