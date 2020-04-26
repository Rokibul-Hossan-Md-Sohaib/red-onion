import React from 'react';
import './DinnerProduct.css'
import { Link } from 'react-router-dom';

const DinnerProduct = (props) => {
    console.log(props.key);
    const { name, category, discription,photo,price,key}=props.dinnerPro;
    return (
        <div className="product">
           <div className="single-product" ><Link to={"/Item/" +key }>
           
        
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

export default DinnerProduct;