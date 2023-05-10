import React from 'react';
import { Link } from "react-router-dom"

import {signOut} from "firebase/auth";
import { auth } from "../firebase_setup/firebase"
;


import '../css/Header.css';

function HeaderLoggedIn(props) {

  console.log(props.name)

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <header>
    <Link className="site-logo" to="/">ResearchReviews.com</Link>
    <Link to={`/ReviewInput/${props.name}`}>Write a Review! </Link>
    <p className='insertName'>Hi {props.name} </p>
    <Link to="/" onClick={logout}>Sign Out</Link>
  </header>
  );
}

export default HeaderLoggedIn;