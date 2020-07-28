import React from "react";
import "./LunchProduct.css";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Product = (props) => {
  console.log(props.product);
  // const { itemKey } = useParams();
  const { key, name, category, description, photo, price } = props.product;
  // const [product, setProduct] = useState(null);

  // useEffect(() => {
  //   fetch("http://localhost:8080/item/" + itemKey)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setProduct(data);
  //     });
  // });
  return (
    <div className="product">
      {/* <Link to={"/Item/" + key}> */}
      <button>
        <img
          className="my-image"
          src={photo}
          alt=""
          onClick={() => props.handleAddProduct(props.product)}
        />
        {/* <div className="image">
              <img src={photo} alt="" />
            </div> */}
      </button>
      {/* </Link> */}
      <div className="describe">
        <h4>{name}</h4>

        <p>${price}</p>
      </div>
      {props.productDetail && (
        <div>
          <h2 className="details">{description}</h2>
        </div>
      )}
    </div>
  );
};

export default Product;
