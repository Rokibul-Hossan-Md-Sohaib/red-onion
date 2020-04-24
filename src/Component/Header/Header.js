import React from 'react';
import logo from '../../image/logo2.png';
import picture from '../../image/bannerbackground.png';

import './Header.css'
import Head from '../Head/Head';

const Header = () => {
    return (
        <div >
            <div className="logo">
            <img src={logo} alt=""/>
            </div>
            <div className ="picture">
            <label htmlFor="search">Search Food</label>
                <input type="text"></input>
            <img src={picture} alt=""/>
            <Head></Head>
            </div>
            
            
            </div>

      
    );
};

export default Header;