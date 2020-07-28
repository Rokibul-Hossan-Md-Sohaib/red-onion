import React, { useState } from "react";
import DinnerProduct from "../DinnerProduc/DinnerProduct";
import "./Dinner.css";
import { useEffect } from "react";
import Cart from "../Cart/Cart";
import { addToDatabaseCard } from "../../utilities/databaseManager";

const Dinner = () => {
  const [item, setItem] = useState([]);

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
    fetch("http://localhost:8080/dinnerProducts")
      .then((res) => res.json())
      .then((data) => {
        console.log("data from database", data);
        setItem(data);
      });
  }, []);
  return (
    <div>
      <div className="flex">
        {item.map((pd) => (
          <DinnerProduct
            // handleDinnerProduct={handleDinnerProduct}
            handleAddProduct={handleAddProduct}
            key={pd.key}
            product={pd}
          ></DinnerProduct>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Dinner;
