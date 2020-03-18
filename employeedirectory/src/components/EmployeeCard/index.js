import React from "react"; 


function EmployeeCard(props){
    return (
        <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.fullname}
            </li>
            <li>
              <strong>Address:</strong> {props.address}
            </li>
            <li>
              <strong>Email:</strong> {props.email}
            </li>
            <li>
              <strong>Phone #:</strong> {props.phone}
            </li>
            <li>
              <strong>Birthday:</strong> {props.birthday}
            </li>
          </ul>
        </div>
      </div>
    )
}

export default EmployeeCard; 