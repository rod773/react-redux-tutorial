import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;

    return (
      <div className="four col wide" key={id}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="header">{price}</div>
              <div className="header">{category}</div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div>{renderList}</div>;
};

export default ProductComponent;
