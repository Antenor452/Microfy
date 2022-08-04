import React from "react";
import "./Style.css";

const ModalForm = (props) => {
  const { showModal, type } = props;
  console.log(
    showModal
      ? "container container-modal d-block"
      : "container container-modal d-none"
  );
  return (
    <>
      <div
        className={
          showModal
            ? "container container-modal d-block"
            : "container container-modal d-none"
        }
      >
        <div className="container form-container">
          <h2 className="text-center">Beans</h2>
          <form></form>
        </div>
      </div>
    </>
  );
};

export default ModalForm;
