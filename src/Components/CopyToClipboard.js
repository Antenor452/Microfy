import React, { useState } from "react";

const CopyToClipboard = (props) => {
  const { urlLink } = props;
  const [copyStat, setCopyStat] = useState("Copy");

  const CopyClipboard = () => {
    navigator.clipboard.writeText(urlLink);
    setCopyStat("Copied");
  };
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 d-flex justify-content-center">
            <input
              type="text"
              value={urlLink}
              className="form-control"
              readOnly
            />
            <button className="btn btn-primary ms-2" onClick={CopyClipboard}>
              {copyStat}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CopyToClipboard;
