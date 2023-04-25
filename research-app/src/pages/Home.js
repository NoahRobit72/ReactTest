import React from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Slogan from "../components/Slogan"
import "../css/Home.css"

export default function Home() {
    return (
    <div className="about-page-container">
        <Header/>
        <Slogan/>
        <div className="button-div">
            <Link className="link-button" to="/LabsBU">BU</Link>
            <Link className="link-button" to="/LabsMIT">MIT</Link>
            <Link className="link-button" to="/LabsNU">NU</Link>            
        </div>
    </div>
    )
  }