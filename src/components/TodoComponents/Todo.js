import React from 'react'
import './Todo.scss'

function Todo(props) {
    console.log(props);
    return (
        <div
        className={`item${props.item.completed ? " completed" : ""}`}
        onClick={() => props.toggleItem(props.item.id)}
        >
            <p>{props.item.task}</p>
        </div>
    )
}

export default Todo
