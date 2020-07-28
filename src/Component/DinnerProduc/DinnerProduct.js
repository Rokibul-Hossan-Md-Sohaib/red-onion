import React from "react";
import "./DinnerProduct.css";

const DinnerProduct = (props) => {
  console.log(props.key);
  const { name, category, discription, photo, price, key } = props.product;
  return (
    <div className="product">
      <button>
        <img
          className="my-image"
          src={photo}
          alt=""
          onClick={() => props.handleAddProduct(props.product)}
        />
      </button>
      <div className="describe">
        <h4>{name}</h4>

        <p>${price}</p>
      </div>
    </div>
  );
};

export default DinnerProduct;
