import React from 'react'
import { Field, reduxForm} from 'redux-form'
import { connect } from 'react-redux'


class EmployeeForm extends React.Component{


    renderForm = ({input, label, placeholder, meta }) => {
        const invalid = meta.error && meta.touched ? 'is-invalid':''
        return(
            <div className="form-group">
                <label>{label}</label>
                <input {...input} className={`form-control ${invalid}`} placeholder={placeholder} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        )
    }

    renderError = ({error, touched}) => {
        if(error && touched){
            return(
                <div className="invalid-feedback">{error}</div>
            )
        }
    }

    onSubmit = formValues =>{
        if(formValues){
            this.props.onSubmit(formValues)
        }
    }

    render(){
        return(
            <div className='container'>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="firstName" component={this.renderForm} label="First Name" placeholder="Enter your first name" />
                    <Field name="lastName" component={this.renderForm} label="Last Name" placeholder="Enter your last name" />
                    <Field name="email" component={this.renderForm} label="Email Id" placeholder="Enter your email id" />
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

const validate = formValues => {
    const error = {}
    if(!formValues.firstName){
        error.firstName="Please enter the first name"
    }
    if(!formValues.lastName){
        error.lastName="Please enter the last name"
    }
    if(!formValues.email){
        error.email="Please enter an email id"
    }
    return error
}

export default connect(null)(reduxForm({
    form: 'EmployeeCreate',
    validate
})(EmployeeForm))