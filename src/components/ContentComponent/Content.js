import React from "react";
import {
    Route,
    HashRouter
} from "react-router-dom";
import './Content.scss'
import FirstHomeworkComponent from "../HomeworkComplication/FirstHomework/FirstHomeworkComponent";
import TodoList from "../HomeworkComplication/Todo-List/TodoList";
import Form from "../HomeworkComplication/Form/Form";
import Formik from "../HomeworkComplication/Formik-Form/Formik";
import API from "../HomeworkComplication/API-Conection/API-Conection";

export default function Content() {
    return(
        <div className="wrapper">
            <HashRouter>
                <Route exact path="/"><p className="home">This mini project brings together all the homework you have already done</p></Route>
                <Route path="/first-homework/"><FirstHomeworkComponent /></Route>
                <Route path="/todo-list"><TodoList/></Route>
                <Route path="/form"><Form/></Route>
                <Route path="/formik-form"><Formik/></Route>
                <Route path="/api-connection"><API /></Route>
            </HashRouter>
        </div>
    );
}