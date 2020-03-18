import React from "react"; 
// import Card from "../Card"; 
import API from "../../utils/API";
import EmployeeCard from "../EmployeeCard";

class CardContainer extends React.Component {

    state= {
        employees: []
    }; 

    componentDidMount(){
        this.generateEmployees(); 
    }
    
    generateEmployees = () => {
        API.search()
            .then(res => {
                const employeesRawData = res.data.results; 
                let employeeFormattedData = employeesRawData.map(employee =>{
                    let dob = employee.dob.date.split("T")[0]; 
                    let year = dob.split("-")[0]; 
                    let month = dob.split("-")[1]; 
                    let day = dob.split("-")[2]; 
                    let employeeFormat ={}; 
                    employeeFormat["image"] = employee.picture.large; 
                    employeeFormat["fullname"]= `${employee.name.first} ${employee.name.last}`; 
                    employeeFormat["address1"]= `${employee.location.street.number} ${employee.location.street.name}`; 
                    employeeFormat["address2"]= `${employee.location.city}, ${employee.location.state} ${employee.location.postcode}`; 
                    employeeFormat["email"] = employee.email; 
                    employeeFormat["phone"] = employee.phone;
                    employeeFormat["birthday"] = `${month}/${day}/${year}`; 

                    return employeeFormat; 
                })
                console.log(employeeFormattedData); 
                this.setState({ employees: employeeFormattedData}); })
            .catch(err => console.log(err)); 
    }; 

    render() {
        return (
            <div className = "d-flex flex-wrap justify-content-center"> 
            {this.state.employees.map(employee =>(
                <EmployeeCard 
                    id = {this.state.employees.indexOf(employee)}
                    key = {this.state.employees.indexOf(employee)}
                    image= {employee.image}
                    fullname = {employee.fullname}
                    address1= {employee.address1}
                    address2 = {employee.address2}
                    email= {employee.email}
                    phone= {employee.phone}
                    birthday= {employee.birthday}
                />
            ))}
            </div>
        )
    }
}

export default CardContainer; 