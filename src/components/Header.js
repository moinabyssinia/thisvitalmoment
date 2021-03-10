import React from "react";
import Typed from "react-typed";



const Header = () => {
    return (
        <div className = "header-wrapper">
            <div className = "main-info">
                <h1>
                    Serving the Americas and the Caribbean
                </h1>
                <Typed 
                    className = "typed-text"
                    strings = { ["Evangelism", "Discipleship", "Missions", "Community Outreach"] }
                    typeSpeed = {40}
                    backSpeed = {30}
                    loop
                />
                <a  href = "" className = "btn-main-offer"> contact me </a>
            </div>
        </div>
    )
}

export default Header
