import React, { useState, useEffect } from 'react';
import "./API.scss"
import Loader from "./Loader";

function API() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const url = 'https://swapi.co/api/people';

        fetch(url)
            .then(response => response.json())
            .then(people => {setTodos(people.results); setLoading(false)})
    }, []);

    return (
        <div className="API">
            <h1>API</h1>
            <div>
                {loading && <Loader />}
                <ul>
                    {
                        todos.map(item => {
                            return <li key={item.name} style={{listStyle: "none"}}>
                                Name: {item.name},
                                Height: {item.height},
                                Mass: {item.mass}
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default API;