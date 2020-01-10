import React from 'react';
import './Sidebar.scss'
import {
    NavLink,
    HashRouter
} from "react-router-dom";

export default function Sidebar() {
    return(
        <div className='sidebar'>
            <HashRouter>
                <ul className="navigation">
                    <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                    <li><NavLink to="/first-homework/Home">First homework</NavLink></li>
                    <li><NavLink to="/todo-list">Todo List</NavLink></li>
                    <li><NavLink to="/form">Form</NavLink></li>
                    <li><NavLink to="/formik-form">Form with Formik</NavLink></li>
                    <li><NavLink to="/api-connection">Api connection</NavLink></li>
                </ul>
            </HashRouter>
        </div>
    );
}