import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';


import fakeData from '../../fakedate';


import DinnerProduct from '../DinnerProduc/DinnerProduct';
import LunchProduct from '../LunchProduct/LunchProduct';
const ProductDetail = () => {
    const {itemKey}= useParams()
   const pro= fakeData.find(pd=>pd.key==itemKey)
    console.log(pro)
    return (
        <div className="pro">
            <div className="display">
               <h1>{pro.name}</h1>
               <br/>
              <p  ><small className="paragraph"></small>{pro.description}</p>
             <div><h3>${pro.price}   <button>+ </button> 1 <button>-</button></h3>
             
             </div> 
              <br/>
              <button className="display-btn">Add</button>
            </div>
            <div className="contant">
            <img  src={pro.photo} alt=""/>
            </div>
           
               
           
           
            

        </div>
    );
};

export default ProductDetail;