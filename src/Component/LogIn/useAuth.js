// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';
// Add the Firebase products that you want to use
import 'firebase/auth';
import firebaseConfig from '../../firebase.Config';
import React from 'react';
import { useState, createContext } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';

firebase.initializeApp(firebaseConfig);

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = (props) => {
  const auth = Auth();
  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  );
};

const getUser = (user) => {
  const { displayName, photoURL, email } = user;
  return { name: displayName, photo: photoURL, email };
};

const Auth = () => {
  const [user, setUser] = useState(null);
  const provider = new firebase.auth.GoogleAuthProvider();

  const createUser = async (name, email, password) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      await firebase.auth().currentUser.updateProfile({
        displayName: name,
      });
      const curUser = firebase.auth().currentUser;
      setUser({
        name: curUser.displayName,
        email: curUser.email,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const signInUser = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        setUser({
          name: res.user.displayName,
          email: res.user.email,
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const signInWithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // The signed-in user info.
        const signedInUser = getUser(result.user);
        console.log(signedInUser);
        setUser(signedInUser);
      })
      .catch((error) => {
        setUser(null);
        console.log(error.message);

        return error.message;
      });
  };
  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        setUser(null);
        return 'Sign-out successful.';
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (usr) {
      if (usr) {
        const currentUser = getUser(usr);
        console.log(currentUser);
        setUser(currentUser);
        // User is signed in.
      } else {
        // No user is signed in.
      }
    });
  }, []);

  const handleInnerClick = (event) => event.target.innerText;

  return {
    user,
    signInUser,
    createUser,
    signInWithGoogle,
    signOut,
    handleInnerClick,
  };
};
export default Auth;