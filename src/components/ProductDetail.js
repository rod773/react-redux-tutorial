import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProduct } from "../redux/actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);

  const { productId } = useParams();

  const dispatch = useDispatch();

  console.log(productId);

  const fetchProductDetail = async () => {
    const url = `https://fakestoreapi.com/products/${productId}`;

    const config = {
      method: "GET",
      url: url,
      headers: {
        "Cpntent-Type": "aplication/json",
        Acept: "aplication/json",
      },
    };

    const response = await axios(config).catch((error) => console.log(error));

    dispatch(selectedProduct(response.data));
  };

  return (
    <div>
      <div className="text-2xl"></div>
    </div>
  );
};

export default ProductDetail;
