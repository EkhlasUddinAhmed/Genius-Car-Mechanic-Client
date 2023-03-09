import React from "react";

const Spinner = () => {
  return (
    <div className="border border-2 border-danger">
      <div className="spinner-border text-danger " role="status">
        <span class="visually-hidden text-center"></span>
      </div>
    </div>
  );
};

export default Spinner;
