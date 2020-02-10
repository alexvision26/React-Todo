import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './index.css';

const todoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: todoList,
    }
  }

  toggleItem = clickedId => {
    const newTaskList = this.state.todoList.map(task => {
      if (task.id === clickedId) {
        return {
          ...task, completed: !task.completed
        }
      } else {
        return task;
      }
    })

    this.setState({
      todoList: newTaskList,
    })
  }

  addNewTask = taskText => {
    const newTask = {
      task: taskText,
      id: Date.now(),
      completed: false,
    }
    this.setState({
      todoList: [...this.state.todoList, newTask]
    })
  }

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todoList: this.state.todoList.filter(task => !task.completed)
    })
  }

  render() {
    return (
      <div>
        <h1>Your Simple To-Do List!</h1>
        <TodoList todoList={this.state.todoList} toggleItem={this.toggleItem} clearCompleted={this.clearCompleted}/>
        <TodoForm addNewTask={this.addNewTask} />
      </div>
    );
  }
}

export default App;
