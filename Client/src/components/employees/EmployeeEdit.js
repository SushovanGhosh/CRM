import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import {fetchEmployee,editEmployee} from '../../actions'
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends React.Component{

    componentDidMount = () => { 
        this.props.fetchEmployee(this.props.id)
    }

    onSubmit = formValues => {
        this.props.editEmployee(this.props.id,formValues)
    }

    render(){
        if(!this.props.employee)
            return <div>Loading..</div>
        else{
            <div className="container">
                <h2>Edit an Employee</h2>
                <EmployeeForm initialValues={_.pick(this.props.employee,'firstName','lastName','email')} onSubmit={this.onSubmit} />
            </div>
        }
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        employee: state.employeeList[ownProps.match.prams.id],
        id: ownProps.match.prams.id
    }
}

export default connect(mapStateToProps,{fetchEmployee})(EmployeeEdit)
