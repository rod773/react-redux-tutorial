import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  return (
    <div className="four col wide">
      <div className="ui link cards">
        <div className="card">
          <div className="image"></div>
          <div className="content">
            <div className="header">{}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
