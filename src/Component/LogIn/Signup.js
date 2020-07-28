import React, { useState } from "react";
import useAuth from "./useAuth";
import logo from "../../image/logo2.png";
import "./Login.css";
import { Link } from "react-router-dom";
const Signup = () => {
  const auth = useAuth();
  // console.log(auth);

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
  });
  const handleSubmit = (e) => {
    if (e.target.password.value === e.target.confirmPass.value) {
      auth.createUser(userInfo.name, userInfo.email, userInfo.password);
    } else {
      alert("Password did not match. Try again!");
    }
    e.preventDefault();
  };
  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="login-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </div>
        </div>
        {auth.user ? (
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-success">
                Welcome {auth.user.name} to Red Onion ...
              </h3>
              <Link
                to="/geteway"
                className="btn btn-success"
                onClick={auth.signOut}
              >
                Sign Out
              </Link>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={userInfo.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={userInfo.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  value={userInfo.password}
                  placeholder="Password"
                  onChange={handleChange}
                  required
                />
                <br />
                <input
                  type="password"
                  name="confirmPass"
                  value={userInfo.confirmPass}
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  required
                />
                <Link to="/getway">Signup</Link>
              </form>
              <a href="/login">Already have an account?</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
