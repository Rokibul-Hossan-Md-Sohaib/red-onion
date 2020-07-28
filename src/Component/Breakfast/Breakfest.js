import React, { useState } from "react";
import breakfast from "../../fakedate/breakfast";
import BreakfastProduct from "../BrekfastProduct/BreakfastProduct";
import { useEffect } from "react";
import Cart from "../Cart/Cart";
import { addToDatabaseCard } from "../../utilities/databaseManager";

const Breakfest = () => {
  const [category, setCategory] = useState([]);

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
    fetch("http://localhost:8080/breakfastProducts")
      .then((res) => res.json())
      .then((data) => {
        console.log("data from database", data);
        setCategory(data);
      });
  }, []);

  return (
    <div>
      <div className="flex">
        {category.map((pd) => (
          <BreakfastProduct
            handleAddProduct={handleAddProduct}
            key={pd.key}
            product={pd}
          ></BreakfastProduct>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Breakfest;
