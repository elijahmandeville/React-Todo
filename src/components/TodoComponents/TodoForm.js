import React from 'react'

function TodoForm(props) {
    return (
        <div className="wrapper">
            <form>
                <input type="text" name="item" onChange={props.handleChange} />
                <button type="submit" name="addTodo" onClick={props.addTodo} >Add Todo</button>
                <button type="submit" name="clearList" onClick={props.clearList} >Clear Completed</button>
            </form>
        </div>
    )
}

export default TodoForm;