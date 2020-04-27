import React from 'react';
import { Link } from 'react-router-dom';

const BreakfastProduct = (props) => {
    console.log(props.point);
    const { key,name, category, description,photo,price}=props.point
    return (
        <div className="product">
           <div className="single-product"><Link to ={"/Item/"+key}>
        {/* //  onClick={()=>props.handlefastProduct(props.dinnerPro)} 
        // > */}
           <div className="image">
                
                <img src={photo} alt=""/>
                
            
        </div>
        </Link>
        <div className="describe">
<             h4>{name}</h4>
             <p>{description}</p>
             <p>${price}</p>
        </div>
        
           </div>
        </div>
    );
};
export default BreakfastProduct;