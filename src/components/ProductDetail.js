import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

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
    return () => {
      dispatch(removeSelectedProduct());
    };
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
          <div className="grid justify-center">
            <Card className="mt-6 w-96">
              <CardBody>
                <Typography variant="h5" color="blue-gray">
                  <span>{title}</span>
                </Typography>
                <Typography>
                  <span>{description}</span>
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Buy Now</Button>
              </CardFooter>
            </Card>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
