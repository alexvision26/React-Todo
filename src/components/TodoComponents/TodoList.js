import React from 'react';

import Todo from './Todo';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
const TodoList = props => {
    console.log(props.todoList)
    return (
        <>
        {props.todoList.map((item) => (
            <Todo key={item.id} item={item} toggleItem={props.toggleItem}/>
        ))}
        <button onClick={props.clearCompleted}>Clear completed</button>
        </>
    )
}

export default TodoList;