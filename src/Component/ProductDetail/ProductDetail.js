import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css';


import fakeData from '../../fakedate';


import DinnerProduct from '../DinnerProduc/DinnerProduct';
import LunchProduct from '../LunchProduct/LunchProduct';
import Head from '../Head/Head';

const ProductDetail = () => {
    const {itemKey}= useParams()
   const pro= fakeData.find(pd=>pd.key==itemKey)
   const [count, setCount]= useState();
    console.log(pro)
    return (
        <div>
            <Head></Head>
        <div className="pro">
            
            <div className="display">
               <h1>{pro.name}</h1>
               <br/>
              <p  ><small className="paragraph"></small>{pro.description}</p>
             <div><h3>${pro.price}   <button onClick={()=>setCount+1}>+ </button> 1 <button onClick={count-1}>-</button></h3>
             
             </div> 
              <br/>
             <Link to ={"/login"}> <button className="display-btn">Add</button>
             </Link>
            </div>
            <div className="contant">
            <img  src={pro.photo} alt=""/>
            </div>
           
               
           
           
            

        </div>
        </div>
    );
};

export default ProductDetail;