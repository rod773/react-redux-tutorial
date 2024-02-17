import React from "react";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.product);

  return (
    <div style={{ height: "100%" }}>
      <div style={{ marginTop: "50px" }} className="ui grid container">
        <ProductComponent />
      </div>
    </div>
  );
};

export default ProductListing;
