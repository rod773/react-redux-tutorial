import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();

  console.log(productId);

  return (
    <div>
      <div className="text-2xl"></div>
    </div>
  );
};

export default ProductDetail;
