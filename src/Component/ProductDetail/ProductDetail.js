import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetail.css";

import fakeData from "../../fakedate";

import DinnerProduct from "../DinnerProduc/DinnerProduct";

import Head from "../Head/Head";
import { useEffect } from "react";

const ProductDetail = () => {
  const { itemKey } = useParams();
  // const pro = fakeData.find((pd) => pd.key == itemKey);
  const [count, setCount] = useState();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/item/" + itemKey)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  });
  // console.log(pro);
  return (
    <div>
      <Head></Head>
      <div className="pro">
        <div className="display">
          <h1>{product}</h1>
         
          <br />
          <p>
            <small className="paragraph"></small>
            {product}
          </p>
          {/* <div>
            <h3>
             <button onClick={() => setCount + 1}>+ </button> 1{" "}
              <button onClick={count - 1}>-</button>
            </h3>
          </div> */}
          <br />
          <Link to="/login">
            {" "}
            <button className="display-btn">Add</button>
          </Link>
        </div>
        <div className="contant">
          <img src={product} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
