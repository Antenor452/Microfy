import React from "react";

const CopyToClipboard = (props) => {
  const { urlLink } = props;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <input type={text} value={urlLink} className="form-control" />
            <button>Copy</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CopyToClipboard;
