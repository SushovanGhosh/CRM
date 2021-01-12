import crm from '../apis/crm'
import history from '../history'

export const fetchEmployees = () => async dispatch =>{
    const response = await crm.get('/')

    dispatch({type: 'FETCH_EMPLOYEES', payload: response.data})
};

export const addEmployees = formValues => async dispatch => {
    const response = await crm.post("/addEmployee",{...formValues})

    dispatch({type: 'CREATE_EMPLOYEE',payload: response.data})
    history.push('/')
};

export const editEmployee = (id,formValues) => async dispatch => {
    const response = await crm.patch(`/editEmployee/${id}`,formValues)
    dispatch({type: 'EDIT_EMPLOYEE', payload: response.data})
    history.push('/')
}

export const deleteEmployee = id => async dispatch => {
    await crm.delete(`/deleteEmployee/${id}`)
    dispatch({type: 'DELETE_EMPLOYEE',payload: id})
    history.push('/')
}
