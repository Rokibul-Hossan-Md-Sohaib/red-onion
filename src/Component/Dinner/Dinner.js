import React, { useState } from 'react';
import dinner from '../../fakedate/dinner';
import DinnerProduct from '../DinnerProduc/DinnerProduct';
import './Dinner.css';


const Dinner = () => {
    const first =dinner;
    const [item, setItem]=useState( first);
    const handleDinnerProduct=(dinnerPro)=>{
        console.log("add",dinnerPro)
    }
    return (
        <div className="flex">
            {
                item.map(dinner=><DinnerProduct 
                    handleDinnerProduct={handleDinnerProduct}
                    id={dinner.key}
                     dinnerPro={dinner}></DinnerProduct> )
            }
        </div>
    );
};

export default Dinner;