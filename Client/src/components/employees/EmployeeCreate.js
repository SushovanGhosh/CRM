import React from 'react'
import {connect} from 'react-redux'

import EmployeeForm from './EmployeeForm'
import { addEmployees } from '../../actions'

class EmployeeCreate extends React.Component{

    onSubmit = formValues =>{
        this.props.addEmployees(formValues)
    }


    render(){
        return(
            <div className="container">
                <h2>Create Employee</h2>
                <EmployeeForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

export default connect(null,{addEmployees})(EmployeeCreate)
