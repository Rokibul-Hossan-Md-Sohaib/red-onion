import React from 'react';
import './Product.css'

const Product = (props) => {
    
    const { key, name, category, discription,photo,price}=props.product;
    return (
        <div className="product">
           <button className="single-product">
           <div className="image">
                
                <img src={photo} alt=""/>
                
            
        </div>
        <div className="describe">
<             h4>{name}</h4>
             <p>{category}</p>
             <p>${price}</p>
        </div>
           </button>
        </div>
    );
};

export default Product;