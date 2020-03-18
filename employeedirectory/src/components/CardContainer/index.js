import React from "react"; 
import API from "../../utils/API";
import EmployeeCard from "../EmployeeCard";
import ButtonContainer from "../ButtonContainer"; 

class CardContainer extends React.Component {

    state= {
        employees: [],
        viewEmployees: []
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
                this.setState({ employees: employeeFormattedData});
                this.setState({viewEmployees: employeeFormattedData}); 
             })
            .catch(err => console.log(err)); 
    }; 

    filterbyLastNameLetter = (letter) => {
        if (letter !== "all"){
            let selectedEmployees = []; 
            for (const employee of this.state.employees){
                let lastName = employee.fullname.split(" ")[1];
                let initial= lastName.split("")[0]; 
                if (letter.toUpperCase() === initial.toUpperCase()){
                    selectedEmployees.push(employee); 
                } 
            }  
            this.setState({viewEmployees: selectedEmployees}); 
        } else {
            this.setState({viewEmployees: this.state.employees}); 
        }
    }; 

    handleLetterBtnSubmit = event => {
        const letter= event.target.name
        this.filterbyLastNameLetter(letter); 
    }

    render() {
        return (
            <div>
                <ButtonContainer
                    icon = {<i className="far fa-user"></i>}
                    alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
                    all = "all"
                    map = {Array.prototype.map}
                    handleLetterBtnSubmit = {this.handleLetterBtnSubmit}
                />

                <div className = "d-flex flex-wrap justify-content-center"> 
                {this.state.viewEmployees.map(employee =>(
                    <EmployeeCard 
                        id = {this.state.viewEmployees.indexOf(employee)}
                        key = {this.state.viewEmployees.indexOf(employee)}
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
            </div>
            
        )
    }
}

export default CardContainer; 