import React from "react"; 
import "./style.css"; 

function Button(props){
    return (
        <button className="btn p-3 m-2">
            {props.letter}
        </button>
    )
}

export default Button; 