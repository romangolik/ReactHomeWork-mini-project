import React, { useState } from "react";
import "./TodoInput.scss"

export default function TodoInput(props) {
    const [value, setValue] = useState("");

    function handleChange(e) {
        setValue( e.target.value);
    }

    function addTodo(value) {
        if (value.length > 0) {
            props.addTodo(value);
            setValue("");
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter new todo" value={value} onChange={handleChange}
                   className="input-add-todo"/>
            <button className="button-add" onClick={() => addTodo(value)}>Add</button>
        </form>
    )
}
