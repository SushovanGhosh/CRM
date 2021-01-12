import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-5">
                <div className="container">
                    <Link to='/' className="navbar-brand">CRM- Customer Relationship Management</Link>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">All Employees</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>    
    )
}

export default Header