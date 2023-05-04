import React from "react"
import { Link, useParams } from "react-router-dom"
import HeaderLoggedIn from "../../components/HeaderLoggedIn"
import Slogan from "../../components/Slogan"
import "../../css/Home.css"

export default function HomeLoggedIn() {
    const params = useParams()

    return (
    <div className="about-page-container">
        <HeaderLoggedIn name = {params.id} />
        <Slogan/>
        <div className="button-div">
            <Link className="link-button" to="/LabsBU">BU</Link>
            <Link className="link-button" to="/LabsMIT">MIT</Link>
            <Link className="link-button" to="/LabsNU">NU</Link>    
        </div>
    </div>
    )
  }