import React from 'react'
import {Router, Route} from 'react-router-dom'

import EmployeeList from './employees/EmployeeList'
import EmployeeCreate from './employees/EmployeeCreate'
import history from '../history'
import Header from './Header'

class App extends React.Component{
    render(){
        return(
            <div>
                <Router history={history}>
                    <div>
                        <Header />
                        <Route path="/" exact component={EmployeeList}/>
                        <Route path="/addEmployee" exact component={EmployeeCreate} />
                    </div>    
                </Router>
            </div>
        )
    }
}

export default App