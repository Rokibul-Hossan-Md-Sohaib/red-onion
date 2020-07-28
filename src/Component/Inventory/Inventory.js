import React from "react";
import fakeData from "../../fakedate";

const Inventory = () => {
  const handleInventory = () => {
    const product = fakeData[0];
    console.log("before post", product);
    fetch("http://localhost:8080/addProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fakeData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("post successfully", data);
      });
  };
  return (
    <div>
      <h1>this is inventory</h1>
      <button onClick={handleInventory}>ADD</button>
    </div>
  );
};
export default Inventory;
