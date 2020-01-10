import React from 'react'

export default function SpecialComponent() {
    return (
        <ul>
            {['a', 'b', 'c'].map(function (item) {
                return <li key={item}>{item}</li>;
            })}
        </ul>
    );
}