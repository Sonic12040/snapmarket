import React from "react";
import carrotLogo from './carrotLogo.png';


const Header = () =>
    <div className=" t-a-c bg-E5DCD1 mb-2em pad-2em">
        <div className="color-2D2D2D fs-5em l-h1 d-s">
            <img className="logo-carrot" src={carrotLogo} alt="CarrotSnap" />
            CarrotSnap
        </div>
        <p className="color-2D2D2D l-h1 fs-1-25rem">find farmer&apos;s markets with benefits near you</p>
    </div>



export default Header;