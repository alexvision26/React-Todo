import React from 'react';

import Todo from './Todo';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
const TodoList = props => {
    console.log(props.todoList)
    return (
        <>
        <div className='container'>
        <div className='task-container'>
        {props.todoList.map((item) => (
            <Todo key={item.id} item={item} toggleItem={props.toggleItem}/>
        ))}
        </div>
        <div>
        <button onClick={props.clearCompleted} className='btn'>Clear completed</button>
        </div>
        </div>
        </>
    )
}

export default TodoList;