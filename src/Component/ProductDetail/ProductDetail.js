import React from 'react';
import { useParams } from 'react-router-dom';


import fakeData from '../../fakedate';


import DinnerProduct from '../DinnerProduc/DinnerProduct';
const ProductDetail = () => {
    const {itemKey}= useParams()
   const pro= fakeData.find(pd=>pd.key===itemKey)
    console.log(pro)
    return (
        <div>
            <h4>{itemKey}coming soon</h4>
            
            
            

        </div>
    );
};

export default ProductDetail;