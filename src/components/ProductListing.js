import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "./../redux/actions/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state);

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const url = "https://fakestoreapi.com/products/";

    const config = {
      method: "GET",
      url: url,
      "Cpntent-Type": "aplication/json",
      Acept: "aplication/json",
    };

    const response = await axios(config).catch((error) => console.log(error));

    console.log(response.data);

    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div style={{ height: "100%" }}>
      <div style={{ marginTop: "50px" }} className="ui grid container">
        <ProductComponent />
      </div>
    </div>
  );
};

export default ProductListing;
