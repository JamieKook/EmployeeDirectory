import React from "react"; 
import Button from "../Button"; 

class ButtonContainer extends React.Component {

    state= {
        icon: <i className="far fa-user"></i>,
        alpha: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        map: Array.prototype.map
    }; 

    render() {
        return (
            <div className = "d-flex justify-content-between overflow-auto"> 
                <Button letter= {this.state.icon}></Button>
                {this.state.map.call(this.state.alpha, alphabet => (
                    <Button 
                        letter = {alphabet}
                        key = {this.state.alpha.indexOf(alphabet)}
                    />
                ))}
            </div>
        )
    }
}

export default ButtonContainer; 