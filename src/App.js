import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css'

const toDoList = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      toDoList: toDoList,
      item: ""
    }
  }

  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    }

    this.setState({
      toDoList: [...this.state.toDoList, newItem]
    })
  }

  addTodo = e => {
    e.preventDefault();

    console.log("Target: ", e)

    this.addItem(e, this.state.item)

  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  toggleItem = itemId => {
    this.setState({
      toDoList: this.state.toDoList.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        console.log("Completed", item)
        return item;
      })
    })
  }

  clearList = e => {
    e.preventDefault();

    this.setState({
      toDoList: this.state.toDoList.filter(item => item.completed === false)
    })
  }

  render() {
    return (
      <div className="App" >
        <h1>To-do List</h1>
        <TodoForm
          addTodo={this.addTodo}
          clearList={this.clearList}
          handleChange={this.handleChange}
        />
        <TodoList
          toDoList={this.state.toDoList}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
