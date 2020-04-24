import React from 'react';

// import fakedata from '../../fakedate';
import { useState } from 'react';
import Product from '../Product/Product';
import './Lunch.css'
import lunch from '../../fakedate/lunch';

const Item = () => {
    const first6 = lunch
    const[products , setProducts] =useState(first6);
    const handleAddProduct=(product)=>{
        console.log("add",product)
    }

    
    return (
        <div className="flex">
            
             
              {  products.map(pd =><Product 
              handleAddProduct={handleAddProduct}
               key={pd.key} product={pd}></Product>)

               
}
            
            
        </div>
    );
};

export default Item;