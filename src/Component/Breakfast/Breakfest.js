import React, { useState } from 'react';
import breakfast from '../../fakedate/breakfast';
import BreakfastProduct from '../BrekfastProduct/BreakfastProduct';

const Breakfest = () => {
    const second= breakfast;
    const [cat, setCat]= useState( second);
//     const handlefastProduct=(dinnerPro)=>{
//         console.log("add",dinnerPro)
// }
    return (
        <div className="flex">
            {
              cat.map(rank=><BreakfastProduct
                // handlefastProduct={handlefastProduct}
                // key={rank.key}
                point={rank}></BreakfastProduct>)
            }
        </div>
    );
};


export default Breakfest;