import React from "react"
import "../../css/SignupPage.css"
import { Auth } from "../../components/authentication";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase_setup/firebase";
import { signUpUser } from "../../firebase_setup/firebase";





export function SignupPage() {
    return (
      <div className="signup-container">
        <h1>Create an Account</h1>
        <div className="signup-form">
          <Auth />
        </div>
      </div>
    );
  }
