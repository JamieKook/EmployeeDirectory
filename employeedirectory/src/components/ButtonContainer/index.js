import React from "react"; 
import Button from "../Button"; 

function ButtonContainer(props) {

    // state= {
    //     icon: <i className="far fa-user"></i>,
    //     alpha: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    //     map: Array.prototype.map
    // }; 

    // render() {
        return (
            <div className = "d-flex justify-content-between overflow-auto"> 
                <Button 
                    handleLetterBtnSubmit = {props.handleLetterBtnSubmit}
                    letter= {props.icon}
                    name = {props.all}
                />
                {props.map.call(props.alpha, alphabet => (
                    <Button 
                        letter = {alphabet}
                        name= {alphabet}
                        key = {props.alpha.indexOf(alphabet)}
                        handleLetterBtnSubmit = {props.handleLetterBtnSubmit}
                    />
                ))}
            </div>
        )
    // }
}

export default ButtonContainer; 