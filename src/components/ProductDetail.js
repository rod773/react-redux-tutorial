import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProduct } from "../redux/actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);

  const { image, title, price, category, description } = product;

  const { productId } = useParams();

  const dispatch = useDispatch();

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

  useEffect(() => {
    if (productId && productId != "") fetchProductDetail();
  }, [productId]);

  return (
    <div className="grid grid-cols-2 container  items-center h-screen justify-center">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
            <img
              className="p-3 object-cover object-center  rounded-lg shadow-xl h-96 shadow-blue-gray-900/50"
              src={image}
              alt={title}
            />
          </div>
          <div className="text-2xl grid justify-center">{productId}</div>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
