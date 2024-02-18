import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "./../redux/actions/productActions";

const ProductListing = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const url = "https://fakestoreapi.com/products/";

    const config = {
      method: "GET",
      url: url,
      headers: {
        "Cpntent-Type": "aplication/json",
        Acept: "aplication/json",
      },
    };

    const response = await axios(config).catch((error) => console.log(error));

    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container-fluid">
      <div className="grid grid-cols-4 gap-1">
        <ProductComponent />
      </div>
    </div>
  );
};

export default ProductListing;
