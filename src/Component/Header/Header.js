import React from "react";
import logo from "../../image/logo2.png";
import picture from "../../image/bannerbackground.png";

import "./Header.css";
import Head from "../Head/Head";
import { useAuth } from "../LogIn/useAuth";
// import { useAuth } from '../Login/useAuth';

const Header = () => {
  const auth = useAuth();
  console.log(auth);
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="" />
        <nav>
          <a href="/login">LogIn</a>
          {/* <a href="/signin">SignIn</a> */}
          {/* <a href="/inventory">Inventory</a> */}
          {auth.user && (
            <span style={{ color: "blue" }}>Welcome {auth.user.name}</span>
          )}

          {auth.user ? (
            <a href="/login">Sign Out</a>
          ) : (
            <a href="/login">Sign In</a>
          )}
        </nav>
      </div>
      <div className="picture">
        <img src={picture} alt="" />
        <Head></Head>
      </div>
    </div>
  );
};

export default Header;
