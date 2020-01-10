import React, { useState } from 'react';
import "./TodoList.css"
import Header from "./componentsOfTodoList/HeaderTodo/header";
import TodoInput from "./componentsOfTodoList/InputComponent/TodoInput";
import TodoItem from "./componentsOfTodoList/TodoItem/TodoItem";

function TodoList() {
    let defaultInitialization = JSON.parse(localStorage.getItem("todos")) ? JSON.parse(localStorage.getItem("todos")) : [];
    const [todos, setTodos] = useState(defaultInitialization);
    localStorage.setItem("todos", JSON.stringify(todos));

    function addTodo(value)
    {
        setTodos(todos.concat([{value: value, id: Date.now(), edit: false}]));
        localStorage.setItem("todos", JSON.stringify(todos));
    }


    function removeTodo(id)
    {
        setTodos(todos.filter((todo) => todo.id !== id));
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    function editTodo(value, id) {
        todos.map(todo => todo.id === id ? todo.value = value : todo.value);
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    return (
        <div className="todo-list">
            <div className="todo-wrapper">
                <Header/>
                <TodoInput addTodo={addTodo}/>
                <ul>
                    {
                        todos.map((todo) => {
                            return <TodoItem todo={todo} key={todo.id} editTodo={editTodo} removeTodo={removeTodo}/>
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default TodoList;