import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    const { key, name, category, discription,photo,price}=props.product;
    return (
        <div className="product">
           <button className="single-product"
           onClick={()=>props.handleAddProduct(props.product)}>
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