import React from "react";
import Review from "../Review/Review";
import { Link } from "react-router-dom";

const Cart = (props) => {
  return (
    <div>
      <div>
        <Link to="/review">
          <button class="btn btn-warning" btn btn-primary btn-sm>
            check Your Food {props.cart.length}
          </button>
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default Cart;
