import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import {fetchEmployees} from '../../actions'

class EmployeeList extends React.Component{

    componentDidMount = () =>{
        this.props.fetchEmployees()       
    }

    renderButtons = () =>{
        return(
            <React.Fragment>
                <button className="btn btn-danger">Delete</button>
                <button className="btn btn-success">Edit</button>
            </React.Fragment>
        )
    }

    renderList = (employees) => {
        return employees.map(employee => {
                return(
                    <tr key={employee.id}>
                        <th scope="row">{employee.id}</th>
                        <th scope="row">{employee.firstName}</th>
                        <th scope="row">{employee.lastName}</th>
                        <th scope="row">{employee.email}</th>
                        {/* {this.renderButtons()} */}
                    </tr>
                )
            })
    }

    render(){
        console.log(this.props.employees[0])
        return (
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.employees[0]!==undefined ? this.renderList(this.props.employees[0]):null}
                    </tbody>
                </table>
                <Link to="/addEmployee" className="btn btn-primary float-right">Add Employee</Link>
            </div>    
        )
    }    
}

const mapStateToProps = state => {
    return {employees: Object.values(state.employeeList)}
}

export default connect(mapStateToProps,{ fetchEmployees })(EmployeeList)