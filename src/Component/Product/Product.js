import React from 'react';
import './Product.css'

const Product = (props) => {
    
    const { key, name, category, discription,photo,price}=props.product;
    return (
        <div className="product">
           <div className="single-product">
           <div className="image">
                
                <img src={photo} alt=""/>
                
            
        </div>
        <div className="describe">
<             h4>{name}</h4>
        </div>
           </div>
        </div>
    );
};

export default Product;