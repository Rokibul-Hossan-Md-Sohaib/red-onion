import React from 'react';
import './LunchProduct.css'
import { Link } from 'react-router-dom';


const Product = (props) => {
    console.log(props.product);
    const { key, name, category, discription,photo,price}=props.product;
    return (
        <div className="product">
           <div className="single-product"><Link to={"/Item/"+key}>
        {/* //    onClick={()=>props.handleAddProduct(props.product)}> */}
           <div className="image">
                
                <img src={photo} alt=""/>
                
            
        </div>
        <div className="describe">
<             h4>{name}</h4>
             <p>{category}</p>
             <p>${price}</p>
        </div>
            </Link>
           </div>
        </div>
    );
};

export default Product;