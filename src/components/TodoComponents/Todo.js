import React from 'react'

function Todo(props) {
    console.log(props);
    return (
        <div
        className="wrapper"
        onClick={() => props.toggleItem(props.item.id)}
        >
            <p>{props.item.task}</p>
        </div>
    )
}

export default Todo
