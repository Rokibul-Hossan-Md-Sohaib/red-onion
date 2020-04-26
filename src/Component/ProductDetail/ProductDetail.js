import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakedate';
import LunchProduct from '../LunchProduct/LunchProduct';

import lunch from '../../fakedate/lunch';
import DinnerProduct from '../DinnerProduc/DinnerProduct';

const ProductDetail = () => {
    const {dinnerKey}= useParams()
   const pro= fakeData.find(pd=>pd.key===dinnerKey)
    console.log(pro)
    return (
        <div>
            <h4>{dinnerKey}coming soon</h4>
            
            

        </div>
    );
};

export default ProductDetail;