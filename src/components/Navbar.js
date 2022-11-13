import React from "react";
import "./Navbar.css";
import dp from '../images/dp.jpeg';

const Navbar = () => {
    return(
        <nav>
            <div id="logoContainer">
                <img src={dp} alt="profileIcon"></img>
            </div>
            <div id="options">
                <div>option1</div>
                <div>option1</div>
                <div>option1</div>
                <div>option1</div>
                <div>option1</div>
            </div>
            
        </nav>
    );
};

export default Navbar;