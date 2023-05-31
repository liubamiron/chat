import React from "react";

const Loader = () => {
  return (
    <div className="container">
      <div className="col">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
