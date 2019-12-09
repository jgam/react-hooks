import React, { useState } from 'react'
import AddTodoForm from './AddTodoForm'

const crudForm = props => {
    if(!props.currentUser.todos){props.currentUser.todos=[];}
    const todoChanged = changed =>{
        //the state needs to be changed in order to display.
        props.currentUser = changed;
    }
    console.log(props);
    return (//first with adding the to do
        <div>
            hello {props.currentUser.name}
            <AddTodoForm user={props.currentUser} addTodo={props.addTodo} setTodoElement={props.setTodoElement} todoChanged={todoChanged}/>
            <table>
                <thead>
                    <tr>
                        <th>Todo list</th>
                        <th>Check</th>
                    </tr>
                </thead>

                <tbody>
                    {props.currentUser.todos.length > 0 ? (
                        props.currentUser.todos.map(todo =>(
                            <td>{todo}</td>
                        ))
                    ):(
                        <tr>
                            <td>No activity</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default crudForm;