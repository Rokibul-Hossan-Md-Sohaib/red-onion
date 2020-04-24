import React from 'react';

const BreakfastProduct = (props) => {
    console.log(props.point);
    const { key,name, category, discription,photo,price}=props.point
    return (
        <div className="product">
           <button className="single-product"
         onClick={()=>props.handlefastProduct(props.dinnerPro)} 
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
export default BreakfastProduct;