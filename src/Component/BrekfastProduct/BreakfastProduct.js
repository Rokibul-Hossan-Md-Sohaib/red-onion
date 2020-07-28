import React from "react";

const BreakfastProduct = (props) => {
  console.log(props.point);
  const { key, name, category, description, photo, price } = props.product;
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
export default BreakfastProduct;
