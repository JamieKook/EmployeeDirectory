import React from "react"; 
import "./style.css"; 

function Button(props){
    return (
        <button name= {props.name} className="btn p-3 m-2" onClick= {props.handleLetterBtnSubmit}>
            {props.letter}
        </button>
    )
}

export default Button; 