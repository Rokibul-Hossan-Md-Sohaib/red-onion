import React from 'react';

import fakedata from '../../fakedate';
import { useState } from 'react';
import LunchProduct from '../LunchProduct/LunchProduct';
import './Lunch.css'
import lunch from '../../fakedate/lunch';

const Item = () => {
    const first6 = lunch;
    const[products , setProducts] =useState(first6);
    // const handleAddProduct=(product)=>{
    //     console.log("add",product)
    // }

    
    return (
        <div className="flex">
            
             
              {  products.map(pd =><LunchProduct 
            //   handleAddProduct={handleAddProduct}
                key={pd.key}
               product={pd}></LunchProduct>)

               
}
            
            
        </div>
    );
};

export default Item;