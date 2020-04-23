import React from 'react';

import fakedata from '../../fakedate';
import { useState } from 'react';
import Product from '../Product/Product';
import './Item.css'

const Item = () => {
    const first6 =fakedata.slice(0,6)
    const[products , setProducts] =useState(first6);

    
    return (
        <div className="flex">
            
             
              {  products.map(pd =><Product  key={pd.key} product={pd}></Product>)
}
            
            
        </div>
    );
};

export default Item;