import React, { useState } from 'react';
import useAuth from './useAuth';
import logo from '../../image/logo2.png';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const auth = useAuth();
  // console.log(auth);

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSignIn = (e) => {
    auth.signInUser(userInfo.email, userInfo.password);
    e.preventDefault();
  };
  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className='login-area'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <a href='/'>
              <img src={logo} alt='' />
            </a>
          </div>
        </div>
        {auth.user ? (
          <div className='row'>
            <div className='col-md-12'>
              <h3 className='text-success'>
                Welcome {auth.user.name} to Red Onion ...
              </h3>
              <Link to='/' className='btn btn-success' onClick={auth.signOut}>
                Sign Out
              </Link>
            </div>
          </div>
        ) : (
          <div className='row'>
            <div className='col-md-8'>
              Sign in With Email Password
              <hr />
              <form onSubmit={handleSignIn}>
                <input
                  type='email'
                  name='email'
                  id='email'
                  value={userInfo.email}
                  onChange={handleChange}
                  placeholder='Your Email'
                />
                <input
                  type='password'
                  name='password'
                  value={userInfo.password}
                  onChange={handleChange}
                  placeholder='Your Password'
                />
                <input type='submit' value='Sign In' />
              </form>
            </div>
            <div className='col-md-4'>
              Sign in With Google
              <hr />
              <button onClick={auth.signInWithGoogle}>
                Sign in with Google
              </button>
              <br />
              <br />
              Don't have any Account?
              <a href='/signup' className='btn btn-block btn-info'>
                Sign Up
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;