import React from "react"; 
import Logo from "./phoenix.png"; 

function Header(){
    return (
        <div className=" border-bottom p-4">
            <img className="float-left" src={Logo} alt="Phoenix Logo"/>
            <h1>Phoenix Employee Directory</h1>
            <h4>Your Ultimate Employee Lookup</h4>
        </div>
    )
}

export default Header; 