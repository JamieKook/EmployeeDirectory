import React from "react"; 
import Logo from "./phoenix.png"; 

function Header(){
    return (
        <div className="d-flex align-items-center border-bottom p-4">
            <img src={Logo} alt="Phoenix Logo"/>
            <h1>Phoenix Employee Directory</h1>
        </div>
    )
}

export default Header; 