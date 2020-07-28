import React from "react";
import "./ReviewItem.css";
import { Link } from "react-router-dom";
import { useAuth } from "../LogIn/useAuth";

const ReviewItem = (props) => {
  const auth = useAuth();
  console.log(props);
  const { name, photo, key, description } = props.product;
  return (
    <div>
      <div className="manue">
        <h2>{description}</h2>
        <img src={photo} alt="" />
      </div>
      <div className="button">
        <Link to="/shipment">
          {auth.user ? (
            <button className="  btn btn-primary">Proceed CheckOut</button>
          ) : (
            <button className="  btn btn-primary"> Order</button>
          )}
        </Link>
      </div>
    </div>
  );
};

export default ReviewItem;
