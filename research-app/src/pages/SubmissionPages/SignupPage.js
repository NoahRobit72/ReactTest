import React from "react"
import "../../css/SignupPage.css"
import { Auth } from "../../components/authentication";


export function SignupPage() {
    return (
      <div className="signup-container">
        <h1>Create an Accountssss</h1>
        <div className="signup-form">
          <Auth />
        </div>
      </div>
    );
  }
