import React, { useState } from "react";
import { useEffect } from "react";
import { getDatabaseCard } from "../../utilities/databaseManager";

import ReviewItem from "../ReviewItem/ReviewItem";

const Review = () => {
  const [card, setCard] = useState([]);
  console.log(card);
  useEffect(() => {
    const saveCard = getDatabaseCard();
    const productKeys = Object.keys(saveCard);

    console.log(productKeys);

    fetch("http://localhost:8080/getProducts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productKeys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("review", data);

        const cardProducts = productKeys.map((key) => {
          console.log(data);
          const product = data.find((pd) => pd.key === key);
          // product.price = saveCard[key];
          console.log(product);
          return product;
        });
        console.log(cardProducts);
        setCard(cardProducts);
      });
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:8080/itemProducts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("data from database", data);
  //       setCard(data);
  //     });
  // }, []);
  return (
    <div>
      {/* <ReviewItem></ReviewItem> */}
      <div>
        {card.map((pd) => (
          <ReviewItem key={pd.key} product={pd}></ReviewItem>
        ))}
      </div>
    </div>
  );
};

export default Review;
