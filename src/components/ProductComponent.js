import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;

    return (
      <div className="col-3" key={id}>
        <div className="card">
          <div className="card-body">
            <div>
              <img src={image} alt={title} className="img-fluid" />
            </div>
            <div className="card-content">
              <div className="header">{title}</div>
              <div className="header">{price}</div>
              <div className="header">{category}</div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
