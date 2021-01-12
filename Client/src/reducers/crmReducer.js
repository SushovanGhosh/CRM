import _ from 'lodash'

export default (state=[],action) =>{

    switch (action.type){

        case "FETCH_EMPLOYEES":
            return {...state, [action.payload.id]: action.payload};
        case "CREATE_EMPLOYEE":
            return {...state, [action.payload.id]: action.payload};
        case "EDIT_EMPLOYEE":
            return {...state, [action.payload.id]: action.payload};
        case "DELETE_EMPLOYEE":
            return _.omit(state,action.payload)
        default:
            return state;
    }
}