import React from 'react';
import './DinnerProduct.css'
const DinnerProduct = (props) => {
    console.log(props.dinnerPro);
    const { id,name, category, discription,photo,price}=props.dinnerPro
    return (
        <div className="product">
           <button className="single-product"
           onClick={()=>props.handleDinnerProduct(props.dinnerPro)} 
        >
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

export default DinnerProduct;