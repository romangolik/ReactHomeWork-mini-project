import React, { useState } from "react";
import "./TodoItem.scss"

export default function TodoItem(props){
    const [value, setValue] = useState(props.todo.value);
    const [edit, setEdit] = useState(props.todo.edit);

    function handleChange(e) {
        setValue(e.target.value);
    }

    function removeTodo(id) {
        props.removeTodo(id);
    }

    function editTodo(id) {
        setEdit(!edit);
    }

    if(edit){
        return (
            <div className="todoItem save">
                <input className="input-add-todo text-input" value={value} onChange={handleChange}/>
                <button className="btn saveTodo" onClick={() => saveTodo(props.todo.id)}>Save</button>
            </div>
        )
    } else {
        return (
            <div className="todoItem">
                <span className="text">{value}</span>
                <div className="buttons">
                    <button className="btn editTodo" onClick={() => editTodo(props.todo.id)}>Edit</button>
                    <button className="btn removeTodo" onClick={() => removeTodo(props.todo.id)}>Remove</button>
                </div>
            </div>
        )
    }


    function saveTodo(id) {
        if(value.length > 0) {
            setEdit(!edit);
            props.editTodo(value, id);
        } else {
            alert("The line should not be empty!");
        }
    }
}