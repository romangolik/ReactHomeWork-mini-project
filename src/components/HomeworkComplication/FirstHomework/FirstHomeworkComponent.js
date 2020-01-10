import './FirstHomework.scss';
import React from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./componentsOfFirstHomework/Home";
import Stuff from "./componentsOfFirstHomework/Stuff";
import Contact from "./componentsOfFirstHomework/Contact";
import SpecialComponent from "./componentsOfFirstHomework/SpecialComponent";


export default function FirstHomeworkComponent() {
    return (
        <div className="router">
            <HashRouter>
                <div>
                    <h1>Simple SPA</h1>
                    <ul className="header">
                        <li><NavLink to="/first-homework/Home" activeClassName="active">Home</NavLink></li>
                        <li><NavLink from="/first-homework" to="/first-homework/stuff">Stuff</NavLink></li>
                        <li><NavLink from="/first-homework" to="/first-homework/contact">Contact</NavLink></li>
                        <li><NavLink from="/first-homework" to="/first-homework/special">Special</NavLink></li>
                    </ul>
                    <div className="contentOfComponent">
                        <Route exact path="/first-homework/Home"><Home/></Route>
                        <Route path="/first-homework/stuff"><Stuff/></Route>
                        <Route path="/first-homework/contact"><Contact/></Route>
                        <Route path="/first-homework/special"><SpecialComponent/></Route>
                    </div>
                </div>
            </HashRouter>
        </div>
    );

}