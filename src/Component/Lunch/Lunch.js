import React from "react";

import { useState } from "react";
import LunchProduct from "../LunchProduct/LunchProduct";
import "./Lunch.css";
import { useEffect } from "react";
import lunch from "../../fakedate/lunch";
import Cart from "../Cart/Cart";
import { addToDatabaseCard } from "../../utilities/databaseManager";

const Item = () => {
  // const first6 = lunch;
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddProduct = (product) => {
    console.log(product);
    const newCart = [...cart, product];
    console.log("my ard", newCart);

    setCart(newCart);
    const sameProduct = newCart.filter((pd) => pd.key === product.key);
    const count = sameProduct.length;
    addToDatabaseCard(product.key, count);
    console.log(addToDatabaseCard());
  };
  useEffect(() => {
    fetch("http://localhost:8080/lunchProducts")
      .then((res) => res.json())
      .then((data) => {
        console.log("data from database", data);
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <div className="flex">
        {products.map((pd) => (
          <LunchProduct
            productDetail={false}
            handleAddProduct={handleAddProduct}
            key={pd.key}
            product={pd}
          ></LunchProduct>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Item;
