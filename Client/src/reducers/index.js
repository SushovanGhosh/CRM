import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form' 

import crmReducer from './crmReducer'

export default combineReducers({
    employeeList: crmReducer,
    form: formReducer
});
