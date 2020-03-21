import React from "react"; 
import Logo from "./phoenix.png"; 

function Header(){
    return (
        <div className="row border-bottom p-4">
            <div className = "col-md-3 d-flex justify-content-center">
                 <img src={Logo} className="img-fluid" alt="Phoenix Logo"/>
            </div>
            <div className="col-md-9 p-4">
                <h1>Phoenix Employee Directory</h1>
                <h4>Your Ultimate Employee Lookup</h4>
            </div>
        </div>
    )
}

export default Header; 